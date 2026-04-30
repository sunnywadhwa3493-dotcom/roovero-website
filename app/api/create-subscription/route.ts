import { NextRequest, NextResponse } from 'next/server'

const PLAN_ENV_MAP: Record<string, string | undefined> = {
  starter: process.env.RAZORPAY_PLAN_STARTER_ID,
  core: process.env.RAZORPAY_PLAN_CORE_ID,
  growth: process.env.RAZORPAY_PLAN_GROWTH_ID,
  studio: process.env.RAZORPAY_PLAN_STUDIO_ID,
}

export async function POST(req: NextRequest) {
  try {
    const { planId, uid, clientId, isAddon, addonId } = await req.json()

    if (!uid || !clientId) {
      return NextResponse.json({ error: 'Missing uid or clientId' }, { status: 400 })
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: 'Payment configuration error' }, { status: 500 })
    }

    if (isAddon) {
      return NextResponse.json(
        { error: 'Add-on checkout is being split between recurring subscription plans and one-time payments. This route is plan-only for now.' },
        { status: 501 }
      )
    }

    // Get the Razorpay plan ID for this plan tier
    const razorpayPlanId = PLAN_ENV_MAP[planId]
    if (!razorpayPlanId) {
      return NextResponse.json({ error: `Unknown plan: ${planId}` }, { status: 400 })
    }

    // Create Razorpay subscription via REST API
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64')
    const response = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: razorpayPlanId,
        total_count: 120, // 10 years max, user can cancel anytime
        quantity: 1,
        notes: {
          uid,
          clientId,
          planId,
        },
      }),
    })

    const subscription = await response.json()

    if (!response.ok) {
      console.error('Razorpay error:', subscription)
      return NextResponse.json(
        { error: subscription.error?.description ?? 'Failed to create subscription' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      planId,
    })
  } catch (err: any) {
    console.error('Create subscription error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
