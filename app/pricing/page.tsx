import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PLANS } from '@/lib/plans'

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">Pricing</span>
              <h1 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                Honest pricing.<br />No surprises.
              </h1>
              <p className="text-smoke font-sans max-w-lg mx-auto text-lg">
                All plans include a 14-day free trial. Cancel anytime. No credit card required to start.
              </p>
            </div>

            {/* Plan cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist max-w-5xl mx-auto">
              {PLANS.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`
                    relative flex flex-col p-10
                    ${i < 2 ? 'md:border-r border-mist border-b md:border-b-0' : ''}
                    ${plan.highlighted ? 'bg-ink text-white' : 'bg-white'}
                  `}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-amber text-white text-xs px-4 py-1 font-sans uppercase tracking-widest">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className={`text-2xl font-serif italic mb-1 ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                      {plan.name}
                    </h2>
                    <p className={`text-sm font-sans ${plan.highlighted ? 'text-white/60' : 'text-smoke'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className={`text-4xl font-serif italic ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                      ₹{plan.price.toLocaleString('en-IN')}
                    </div>
                    <div className={`text-sm mt-1 font-sans ${plan.highlighted ? 'text-white/50' : 'text-smoke'}`}>
                      per month
                    </div>
                    <div className={`text-xs mt-2 font-sans ${plan.highlighted ? 'text-amber' : 'text-smoke'}`}>
                      ₹{plan.annualPrice.toLocaleString('en-IN')}/mo billed annually
                    </div>
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-sm font-sans ${plan.highlighted ? 'text-white/80' : 'text-ink'}`}>
                        <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/subscribe?plan=${plan.id}`}
                    className={`
                      block text-center py-3.5 text-base font-serif italic transition-colors
                      ${plan.highlighted
                        ? 'bg-amber text-white hover:bg-amber-light'
                        : 'bg-ink text-white hover:bg-amber'
                      }
                    `}
                  >
                    Get {plan.name} →
                  </Link>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto mt-24">
              <h2 className="text-2xl font-serif italic text-ink text-center mb-12">Common questions</h2>
              <div className="space-y-0 border border-mist">
                {[
                  {
                    q: 'Can I cancel anytime?',
                    a: 'Yes. Cancel from inside the Roovero app, any time. Your subscription continues until the end of the billing period.'
                  },
                  {
                    q: 'Which payment methods are accepted?',
                    a: 'All Indian payment methods via Razorpay — UPI, credit/debit cards, net banking, and popular wallets.'
                  },
                  {
                    q: 'Can I switch plans?',
                    a: 'Yes, upgrade or downgrade anytime from the app. Changes take effect from the next billing cycle.'
                  },
                  {
                    q: 'Is there a free trial?',
                    a: 'All plans include a 14-day free trial. No credit card required to start. You\'ll only be charged after the trial ends if you choose to continue.'
                  },
                  {
                    q: 'What is the AI Manager plan exactly?',
                    a: 'AI Manager is our fully autonomous tier. It generates content, publishes it automatically, monitors competitors, replies to comments, and sends weekly reports — everything a human social media manager would do.'
                  },
                ].map((faq, i) => (
                  <div key={i} className={`p-7 ${i < 4 ? 'border-b border-mist' : ''}`}>
                    <h3 className="font-serif italic text-ink mb-2">{faq.q}</h3>
                    <p className="text-smoke text-sm font-sans leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
