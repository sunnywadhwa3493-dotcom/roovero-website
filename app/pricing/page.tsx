import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ADD_ONS, GST_DISPLAY_RULE, PLANS, inclusiveGstPortion } from '@/lib/plans'

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">Pricing</span>
              <h1 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                Quiet pricing.<br />Clear tradeoffs.
              </h1>
              <p className="text-smoke font-sans max-w-2xl mx-auto text-lg leading-relaxed">
                Every plan is priced in INR with GST included. Starter proves the output. Core is the first fully operational Roovero plan. Growth and Studio expand video, engagement, and publishing depth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-0 border border-mist max-w-7xl mx-auto">
              {PLANS.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`
                    relative flex flex-col p-8
                    ${i < PLANS.length - 1 ? 'border-b xl:border-b-0 xl:border-r border-mist' : ''}
                    ${plan.highlighted ? 'bg-ink text-white' : 'bg-white'}
                  `}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-amber text-white text-xs px-4 py-1 font-sans uppercase tracking-widest">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className={`text-2xl font-serif italic mb-1 ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                      {plan.name}
                    </h2>
                    <p className={`text-sm font-sans ${plan.highlighted ? 'text-white/60' : 'text-smoke'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="mb-5">
                    <div className={`text-4xl font-serif italic ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                      {plan.monthlyPrice === 0 ? 'Free' : `₹${plan.monthlyPrice.toLocaleString('en-IN')}`}
                    </div>
                    <div className={`text-sm mt-1 font-sans ${plan.highlighted ? 'text-white/50' : 'text-smoke'}`}>
                      {plan.monthlyPrice === 0 ? 'watermarked entry tier' : 'per month, GST included'}
                    </div>
                    {plan.monthlyPrice > 0 && (
                      <div className={`text-xs mt-2 font-sans ${plan.highlighted ? 'text-amber' : 'text-smoke'}`}>
                        GST portion: ₹{inclusiveGstPortion(plan.monthlyPrice).toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    )}
                  </div>

                  <div className={`grid grid-cols-2 gap-2 text-xs font-sans mb-5 ${plan.highlighted ? 'text-white/75' : 'text-smoke'}`}>
                    <span>{plan.postsPerMonth} posts/mo</span>
                    <span>{plan.staticsPerMonth} statics</span>
                    <span>{plan.carouselCredits} carousels</span>
                    <span>{plan.reelCredits} reels</span>
                    <span>{plan.reelMaxSeconds > 0 ? `${plan.reelMaxSeconds}s max` : 'No reels'}</span>
                    <span>{plan.avatarLabel}</span>
                  </div>

                  <p className={`text-sm leading-relaxed font-sans mb-6 ${plan.highlighted ? 'text-white/80' : 'text-smoke'}`}>
                    {plan.recommendedFor}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-2.5 text-sm font-sans ${plan.highlighted ? 'text-white/80' : 'text-ink'}`}>
                        <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/subscribe?plan=${plan.id}`}
                    className={`
                      block text-center py-3.5 text-base font-serif italic transition-colors
                      ${plan.highlighted
                        ? 'bg-amber text-white hover:bg-amber-light'
                        : 'bg-ink text-white hover:bg-amber'}
                    `}
                  >
                    {plan.id === 'free' ? 'Start free →' : `Get ${plan.name} →`}
                  </Link>
                </div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto mt-8 text-sm text-smoke font-sans">
              All displayed prices are GST {GST_DISPLAY_RULE}. Razorpay processing fees are separate from GST and are already accounted for in the internal margin model.
            </div>

            <div className="max-w-6xl mx-auto mt-24">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                <div>
                  <span className="text-xs tracking-widest text-smoke uppercase font-sans">Add-ons</span>
                  <h2 className="text-2xl font-serif italic text-ink mt-3">Expansion packs for paid plans</h2>
                </div>
                <p className="text-sm text-smoke font-sans max-w-xl leading-relaxed">
                  Recurring add-ons increase monthly capacity. One-time purchases cover campaign spikes without changing the base plan. Some long-reel unlocks still need the final checkout implementation path.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-mist">
                {ADD_ONS.map((addOn, index) => (
                  <div key={addOn.id} className={`p-7 ${index < ADD_ONS.length - 1 ? 'border-b border-mist' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif italic text-ink text-xl">{addOn.name}</h3>
                          <span className="text-[11px] uppercase tracking-widest text-smoke font-sans">
                            {addOn.kind === 'recurring' ? 'Recurring' : 'One-time'}
                          </span>
                        </div>
                        <p className="text-smoke text-sm font-sans leading-relaxed">{addOn.unlocks}</p>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-smoke font-sans">
                          <span>Eligibility: {addOn.eligibility}</span>
                          <span>COGS: {addOn.cogs}</span>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="text-2xl font-serif italic text-ink">
                          ₹{addOn.price.toLocaleString('en-IN')}
                        </div>
                        <div className="text-xs text-smoke font-sans">GST included</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-24">
              <h2 className="text-2xl font-serif italic text-ink text-center mb-12">Common questions</h2>
              <div className="space-y-0 border border-mist">
                {[
                  {
                    q: 'Can I cancel anytime?',
                    a: 'Yes. Cancel from inside the Roovero app any time. Your subscription continues until the end of the billing period.',
                  },
                  {
                    q: 'Which plan should most brands start with?',
                    a: 'Core is the right starting point for serious brands because it is the first plan that unlocks Meta connect, auto-publish, and analytics.',
                  },
                  {
                    q: 'Are taxes already included?',
                    a: 'Yes. The listed INR amounts are GST-inclusive.',
                  },
                  {
                    q: 'Do add-ons replace a higher plan?',
                    a: 'No. Add-ons are for controlled capacity increases. The underlying plan still governs the publishing surface, comment tools, and overall reel limits.',
                  },
                  {
                    q: 'How are long reels handled?',
                    a: 'Growth includes 20-second reel support and Studio includes 30-second support. Additional long-reel commercial handling is being wired through the checkout stack.',
                  },
                ].map((faq, index) => (
                  <div key={index} className={`p-7 ${index < 4 ? 'border-b border-mist' : ''}`}>
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
