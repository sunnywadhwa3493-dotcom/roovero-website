'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { getPlanById, normalizePlanId, type PlanId } from '@/lib/plans'

function SuccessContent() {
  const searchParams = useSearchParams()
  const rawPlan = searchParams.get('plan') ?? ''
  const plan = getPlanById(normalizePlanId(rawPlan) as PlanId)
  const [countdown, setCountdown] = useState(8)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(interval)
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-stone flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-2xl font-serif italic text-ink">Roovero</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber" />
        </div>

        {/* Success icon */}
        <div className="w-20 h-20 bg-amber/10 border border-amber/30 flex items-center justify-center mx-auto mb-8">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 16L13 23L26 9" stroke="#C8873A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-3xl font-serif italic text-ink mb-3">
          Welcome to {plan?.name ?? 'Roovero'}
        </h1>
        <p className="text-smoke font-sans mb-8 leading-relaxed">
          Your subscription is active. Your brand's true voice is ready. Return to the app to get started.
        </p>

        {/* What happens next */}
        <div className="bg-white border border-mist p-6 text-left mb-8">
          <p className="text-xs tracking-widest text-smoke uppercase font-sans mb-4">What happens next</p>
          <ul className="space-y-3">
            {[
              'Your plan is now active in the app',
              'Complete your brand profile setup',
              'AI generates your first content calendar',
              'Review and approve your first posts',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-ink font-sans">
                <span className="text-amber flex-shrink-0 mt-0.5">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-smoke font-sans mb-6">
          Return to the Roovero app to continue setup.
          {countdown > 0 && (
            <span className="text-amber"> Auto-closing in {countdown}s...</span>
          )}
        </p>

        <button
          onClick={() => window.close()}
          className="w-full bg-ink text-white py-4 font-serif italic hover:bg-amber transition-colors mb-3"
        >
          Return to app →
        </button>

        <Link
          href="/"
          className="block text-center text-sm text-smoke hover:text-ink transition-colors font-sans"
        >
          Go to roovero.com
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stone flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
