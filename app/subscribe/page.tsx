'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  GST_DISPLAY_RULE,
  getPlanById,
  inclusiveGstPortion,
  normalizePlanId,
  type PlanId,
} from '@/lib/plans'

declare global {
  interface Window {
    Razorpay: any
  }
}

function SubscribeContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  const rawPlan = searchParams.get('plan') ?? ''
  const uid = searchParams.get('uid') ?? ''
  const clientId = searchParams.get('clientId') ?? ''
  const isAddon = searchParams.get('type') === 'addon'
  const addonId = searchParams.get('addon') ?? ''

  const planId = normalizePlanId(rawPlan) as PlanId
  const plan = getPlanById(planId)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubscribe = async () => {
    if (!uid || !clientId) {
      setError('Session error. Please return to the app and try again.')
      return
    }
    if (!plan && !isAddon) {
      setError('Invalid plan selected.')
      return
    }
    if (!scriptLoaded) {
      setError('Payment system loading. Please wait a moment.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, uid, clientId, isAddon, addonId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Failed to create subscription')

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: data.subscriptionId,
        name: 'Roovero',
        description: `${plan?.name ?? addonId} subscription`,
        image: 'https://roovero.com/logo.png',
        prefill: { name: '', email: '', contact: '' },
        notes: { uid, clientId, planId: planId ?? addonId },
        theme: { color: '#C8873A' },
        modal: { ondismiss: () => setLoading(false) },
        handler: function () {
          window.location.href = `/success?plan=${planId}&uid=${uid}`
        },
      })
      rzp.open()
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (!uid || !clientId) {
    return (
      <div className="min-h-screen bg-stone flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h1 className="text-xl font-serif italic text-ink mb-2">Invalid session</h1>
          <p className="text-smoke text-sm">Please return to the Roovero app and tap Upgrade again.</p>
        </div>
      </div>
    )
  }

  if (!plan && !isAddon) {
    return (
      <div className="min-h-screen bg-stone flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-serif italic text-ink mb-2">Plan not found</h1>
          <p className="text-smoke text-sm">Unknown plan: {rawPlan}. Please return to the app.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl font-serif italic text-ink">Roovero</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          </div>
          <p className="text-smoke text-sm">Complete your subscription</p>
        </div>

        <div className="bg-white border border-mist rounded-none p-8 mb-6">
          {plan ? (
            <>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-serif italic text-ink">{plan.name}</h1>
                  <p className="text-smoke text-sm mt-1">{plan.tagline}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-serif italic text-ink">
                    ₹{plan.monthlyPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-smoke">per month, GST included</div>
                </div>
              </div>

              <div className="bg-stone border border-mist px-4 py-3 mb-5">
                <div className="text-xs text-smoke uppercase tracking-widest mb-2 font-sans">Commercial summary</div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-ink font-sans">
                  <span>{plan.postsPerMonth} posts per month</span>
                  <span>{plan.staticsPerMonth} statics</span>
                  <span>{plan.carouselCredits} carousels</span>
                  <span>{plan.reelCredits} reels</span>
                  <span>{plan.reelMaxSeconds > 0 ? `${plan.reelMaxSeconds}s reel max` : 'No reels'}</span>
                  <span>{plan.avatarLabel}</span>
                </div>
                {plan.monthlyPrice > 0 && (
                  <div className="text-xs text-smoke font-sans mt-3">
                    GST portion inside this price: ₹
                    {inclusiveGstPortion(plan.monthlyPrice).toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                )}
              </div>

              <div className="border-t border-mist pt-5">
                <p className="text-xs text-smoke uppercase tracking-widest mb-3 font-sans">What's included</p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-xl font-serif italic text-ink mb-2">Add-on: {addonId}</h1>
              <p className="text-smoke text-sm">One-time purchase</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 mb-6 text-xs text-smoke">
          <span className="flex items-center gap-1.5">
            <span className="text-amber">🔒</span> Secured by Razorpay
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber">↩</span> Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber">₹</span> Indian payments
          </span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleSubscribe}
          disabled={loading || !scriptLoaded}
          className="w-full bg-ink text-white py-4 text-base font-serif italic hover:bg-amber transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Opening payment...
            </span>
          ) : (
            `Subscribe to ${plan?.name ?? 'Add-on'} →`
          )}
        </button>

        <p className="text-center text-xs text-smoke mt-4">
          By subscribing, you agree to our{' '}
          <a href="/terms" className="underline hover:text-ink">Terms</a> and{' '}
          <a href="/privacy" className="underline hover:text-ink">Privacy Policy</a>.
          Billed monthly. Prices are GST {GST_DISPLAY_RULE}. Cancel anytime from the app.
        </p>
      </div>
    </div>
  )
}

export default function SubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
        </div>
      }
    >
      <SubscribeContent />
    </Suspense>
  )
}
