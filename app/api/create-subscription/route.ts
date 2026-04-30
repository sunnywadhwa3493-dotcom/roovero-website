import { NextRequest, NextResponse } from 'next/server'
import { getAddOnById } from '@/lib/plans'

const PLAN_ENV_MAP: Record<string, string | undefined> = {
  starter: process.env.RAZORPAY_PLAN_STARTER_ID,
  core: process.env.RAZORPAY_PLAN_CORE_ID,
  growth: process.env.RAZORPAY_PLAN_GROWTH_ID,
  studio: process.env.RAZORPAY_PLAN_STUDIO_ID,
}

const RECURRING_ADDON_ENV_MAP: Record<string, string | undefined> = {
  ADDON_REEL_PACK_5: process.env.RAZORPAY_ADDON_REEL_PACK_5_ID,
  ADDON_CAROUSEL_PACK_5: process.env.RAZORPAY_ADDON_CAROUSEL_PACK_5_ID,
  ADDON_EDIT_PACK_20: process.env.RAZORPAY_ADDON_EDIT_PACK_20_ID,
  ADDON_BRAND_PHOTO_PACK: process.env.RAZORPAY_ADDON_BRAND_PHOTO_PACK_ID,
}

function basicAuthHeader(keyId: string, keySecret: string) {
  return `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`
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
      const addOn = getAddOnById(addonId)
      if (!addOn) {
        return NextResponse.json({ error: `Unknown add-on: ${addonId}` }, { status: 400 })
      }

      if (addOn.kind === 'recurring') {
        const recurringPlanId = RECURRING_ADDON_ENV_MAP[addOn.id]
        if (!recurringPlanId) {
          return NextResponse.json(
            { error: `Recurring add-on is not configured for checkout: ${addOn.id}` },
            { status: 400 }
          )
        }

        const response = await fetch('https://api.razorpay.com/v1/subscriptions', {
          method: 'POST',
          headers: {
            Authorization: basicAuthHeader(keyId, keySecret),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan_id: recurringPlanId,
            total_count: 120,
            quantity: 1,
            notes: {
              uid,
              clientId,
              addOnId: addOn.id,
            },
          }),
        })

        const subscription = await response.json()
        if (!response.ok) {
          console.error('Razorpay recurring add-on error:', subscription)
          return NextResponse.json(
            { error: subscription.error?.description ?? 'Failed to create add-on subscription' },
            { status: 500 }
          )
        }

        return NextResponse.json({
          mode: 'subscription',
          subscriptionId: subscription.id,
          itemId: addOn.id,
          itemName: addOn.name,
        })
      }

      const response = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          Authorization: basicAuthHeader(keyId, keySecret),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: addOn.price * 100,
          currency: 'INR',
          receipt: `addon_${addOn.id}_${Date.now()}`.slice(0, 40),
          payment_capture: 1,
          notes: {
            uid,
            clientId,
            addOnId: addOn.id,
            checkoutType: 'one_time_addon',
          },
        }),
      })

      const order = await response.json()
      if (!response.ok) {
        console.error('Razorpay one-time add-on error:', order)
        return NextResponse.json(
          { error: order.error?.description ?? 'Failed to create one-time order' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        mode: 'order',
        orderId: order.id,
        amount: addOn.price * 100,
        currency: 'INR',
        itemId: addOn.id,
        itemName: addOn.name,
      })
    }

    // Get the Razorpay plan ID for this plan tier
    const razorpayPlanId = PLAN_ENV_MAP[planId]
    if (!razorpayPlanId) {
      return NextResponse.json({ error: `Unknown plan: ${planId}` }, { status: 400 })
    }

    // Create Razorpay subscription via REST API
    const response = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        Authorization: basicAuthHeader(keyId, keySecret),
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
      mode: 'subscription',
      subscriptionId: subscription.id,
      planId,
    })
  } catch (err: any) {
    console.error('Create subscription error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
