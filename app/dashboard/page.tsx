'use client'
import { useEffect, useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { getPlanById, type PlanId } from '@/lib/plans'

interface SubscriptionDoc {
  status: string
  planId: PlanId
  currentPeriodEnd?: { seconds: number }
  cancelAtPeriodEnd?: boolean
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [subscription, setSubscription] = useState<SubscriptionDoc | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push('/login')
        return
      }
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [router])

  useEffect(() => {
    if (!user) return
    const ref = doc(db, 'subscriptions', user.uid)
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setSubscription(snap.data() as SubscriptionDoc)
      }
    })
    return () => unsub()
  }, [user])

  const plan = subscription ? getPlanById(subscription.planId) : null

  const periodEnd = subscription?.currentPeriodEnd
    ? new Date(subscription.currentPeriodEnd.seconds * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  if (loading) {
    return (
      <div className="min-h-screen bg-stone flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen bg-stone">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-serif italic text-ink mb-1">Account</h1>
            <p className="text-smoke text-sm font-sans">{user?.email}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subscription card */}
            <div className="bg-white border border-mist p-8">
              <h2 className="text-lg font-serif italic text-ink mb-6">Current plan</h2>

              {subscription && plan ? (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-2xl font-serif italic text-ink">{plan.name}</p>
                      <p className="text-sm text-smoke font-sans mt-1">{plan.tagline}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 font-sans uppercase tracking-widest ${
                      subscription.status === 'active' ? 'bg-green-50 text-green-700 border border-green-200' :
                      subscription.status === 'grace_period' ? 'bg-amber-pale text-amber border border-amber/30' :
                      'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {subscription.status}
                    </span>
                  </div>

                  {periodEnd && (
                    <p className="text-sm text-smoke font-sans mb-6">
                      {subscription.cancelAtPeriodEnd ? 'Cancels' : 'Renews'} on {periodEnd}
                    </p>
                  )}

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/pricing"
                      className="text-center border border-ink text-ink py-2.5 text-sm font-serif italic hover:bg-ink hover:text-white transition-colors"
                    >
                      Change plan
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-smoke font-sans text-sm mb-6">You're on the free plan.</p>
                  <Link
                    href="/pricing"
                    className="block text-center bg-ink text-white py-3 font-serif italic hover:bg-amber transition-colors"
                  >
                    Upgrade →
                  </Link>
                </>
              )}
            </div>

            {/* Account card */}
            <div className="bg-white border border-mist p-8">
              <h2 className="text-lg font-serif italic text-ink mb-6">Account details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-smoke uppercase tracking-widest font-sans mb-1">Email</p>
                  <p className="text-sm text-ink font-sans">{user?.email}</p>
                </div>
                <div>
                  <p className="text-xs text-smoke uppercase tracking-widest font-sans mb-1">Sign-in method</p>
                  <p className="text-sm text-ink font-sans capitalize">
                    {user?.providerData?.[0]?.providerId?.replace('.com', '') ?? 'Email'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-mist">
                <button
                  onClick={async () => {
                    await signOut(auth)
                    router.push('/')
                  }}
                  className="text-sm text-smoke hover:text-ink transition-colors font-sans underline"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>

          {/* Help */}
          <div className="mt-8 bg-white border border-mist p-6">
            <p className="text-sm text-smoke font-sans">
              Need help? Email us at{' '}
              <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
                hello@roovero.com
              </a>
              . We typically reply within a few hours.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
