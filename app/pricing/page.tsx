import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'
import { ADD_ONS, GST_DISPLAY_RULE, PLANS, inclusiveGstPortion } from '@/lib/plans'

const TIER_POSITION: Record<string, number> = {
  free: 1, starter: 2, core: 3, growth: 4, studio: 5,
}

export default function PricingPage() {
  return (
    <>
      <Nav heroIsDark />
      <main className="pt-16">

        {/* ══════════════════════════ HERO ══ */}
        <section className="bg-ink py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-end">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <span className="amber-rule" />
                  <span className="text-[11px] tracking-widest text-white/40 uppercase font-sans">Pricing</span>
                </div>
                <h1
                  className="font-serif italic text-white mb-6 animate-fade-up"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
                >
                  Quiet pricing.<br />
                  <span style={{ color: 'var(--amber)' }}>Clear tradeoffs.</span>
                </h1>
                <p className="text-white/55 font-sans text-lg leading-relaxed max-w-2xl animate-fade-up delay-100">
                  Every plan is priced in INR with GST included. Starter proves the output. Core is
                  the first fully operational Roovero plan. Growth and Studio expand video,
                  engagement, and publishing depth.
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-6 animate-fade-in delay-200">
                <div className="text-[10px] uppercase tracking-widest text-white/35 font-sans mb-4">
                  Buying pattern
                </div>
                <div className="space-y-4">
                  {[
                    ['Starter', 'prove output quality'],
                    ['Core', 'connect publishing + analytics'],
                    ['Growth', 'push reels + replies harder'],
                    ['Studio', 'run high-volume content ops'],
                  ].map(([tier, note], i) => (
                    <div key={tier} className={`flex items-start justify-between gap-4 pb-4 ${i < 3 ? 'border-b border-white/8' : ''}`}>
                      <div>
                        <div className="font-serif italic text-white text-lg">{tier}</div>
                        <div className="text-white/45 text-xs font-sans mt-1">{note}</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-amber mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ PLANS GRID ══ */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-content mx-auto">

            <AnimateIn>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-0 border border-mist max-w-7xl mx-auto">
                {PLANS.map((plan, i) => (
                  <div
                    key={plan.id}
                    className={[
                      'pricing-tier-card relative flex flex-col',
                      i < PLANS.length - 1 ? 'border-b xl:border-b-0 xl:border-r border-mist' : '',
                      plan.highlighted ? 'bg-ink text-white' : 'bg-white',
                      plan.highlighted ? 'pricing-tier-card-dark' : '',
                      plan.highlighted ? 'py-10 px-8' : 'p-8',
                    ].filter(Boolean).join(' ')}
                  >
                    {/* Recommended badge */}
                    {plan.highlighted && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="bg-amber text-white text-[10px] px-4 py-1 font-sans uppercase tracking-widest whitespace-nowrap">
                          Recommended
                        </span>
                      </div>
                    )}

                    {/* Tier bar */}
                    <div className="flex gap-0.5 mb-6">
                      {[1, 2, 3, 4, 5].map((t) => (
                        <div
                          key={t}
                          className="h-0.5 flex-1"
                          style={{
                            background: t <= TIER_POSITION[plan.id]
                              ? (plan.highlighted ? 'var(--amber)' : 'var(--ink)')
                              : (plan.highlighted ? 'rgba(255,255,255,0.15)' : 'var(--mist)'),
                          }}
                        />
                      ))}
                    </div>

                    {/* Name + tagline */}
                    <div className="mb-5">
                      <h2 className={`text-2xl font-serif italic mb-1 ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                        {plan.name}
                      </h2>
                      <p className={`text-xs font-sans leading-snug ${plan.highlighted ? 'text-white/55' : 'text-smoke'}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-5">
                      <div className={`text-3xl font-serif italic ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                        {plan.monthlyPrice === 0 ? 'Free' : `₹${plan.monthlyPrice.toLocaleString('en-IN')}`}
                      </div>
                      <div className={`text-xs mt-1 font-sans ${plan.highlighted ? 'text-white/45' : 'text-smoke'}`}>
                        {plan.monthlyPrice === 0 ? 'watermarked entry tier' : 'per month, GST included'}
                      </div>
                      {plan.monthlyPrice > 0 && (
                        <div className={`text-[11px] mt-1.5 font-sans tabular-nums ${plan.highlighted ? 'text-amber' : 'text-smoke'}`}>
                          GST ₹{inclusiveGstPortion(plan.monthlyPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })} included
                        </div>
                      )}
                    </div>

                    {/* Quick stats */}
                    <div className={`grid grid-cols-2 gap-x-3 gap-y-2 text-xs font-sans mb-5 pb-5 border-b ${
                      plan.highlighted ? 'text-white/60 border-white/10' : 'text-smoke border-mist'
                    }`}>
                      <span>{plan.postsPerMonth} posts/mo</span>
                      <span>{plan.staticsPerMonth} statics</span>
                      <span>{plan.carouselCredits} carousels</span>
                      <span>{plan.reelCredits} reels</span>
                      {plan.reelMaxSeconds > 0
                        ? <span>{plan.reelMaxSeconds}s reel max</span>
                        : <span className="text-smoke/50">No reels</span>}
                      <span>{plan.avatarLabel}</span>
                    </div>

                    {/* Recommended for */}
                    <p className={`text-xs leading-relaxed font-sans mb-5 ${plan.highlighted ? 'text-white/70' : 'text-smoke'}`}>
                      {plan.recommendedFor}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-2.5 text-xs font-sans ${plan.highlighted ? 'text-white/75' : 'text-ink'}`}
                        >
                          <span className="mt-0.5 flex-shrink-0 text-amber">–</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/subscribe?plan=${plan.id}`}
                      className={`block text-center py-3.5 text-sm font-serif italic transition-colors ${
                        plan.highlighted
                          ? 'bg-amber text-white hover:bg-amber-light'
                          : 'bg-ink text-white hover:bg-amber'
                      }`}
                    >
                      {plan.id === 'free' ? 'Start free →' : `Get ${plan.name} →`}
                    </Link>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={100} className="max-w-7xl mx-auto mt-6">
              <p className="text-xs text-smoke font-sans">
                All prices are GST {GST_DISPLAY_RULE}. Razorpay processing fees are separate
                and accounted for in the internal margin model.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════ ADD-ONS ══ */}
        <section className="bg-stone py-20 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="mb-12">
              <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Add-ons</span>
              <h2 className="font-serif italic text-ink mt-3 text-2xl">Expand capacity without changing plans.</h2>
              <p className="text-smoke font-sans text-sm leading-relaxed mt-3 max-w-2xl">
                Monthly add-ons increase specific quotas. One-time purchases cover campaign spikes
                without changing the base plan.
              </p>
            </AnimateIn>

            {/* Recurring */}
            <AnimateIn delay={80}>
              <h3 className="text-[11px] uppercase tracking-widest text-smoke font-sans mb-4">Monthly recurring</h3>
              <div className="border border-mist bg-white mb-8">
                {ADD_ONS.filter((a) => a.kind === 'recurring').map((addOn, i, arr) => (
                  <div
                    key={addOn.id}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-7 py-5 ${
                      i < arr.length - 1 ? 'border-b border-mist' : ''
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-serif italic text-ink text-base">{addOn.name}</h4>
                      </div>
                      <p className="text-smoke text-xs font-sans">{addOn.unlocks}</p>
                      <p className="text-ash text-[11px] font-sans mt-1">Eligibility: {addOn.eligibility}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-xl font-serif italic text-ink">₹{addOn.price.toLocaleString('en-IN')}</div>
                      <div className="text-[11px] text-smoke font-sans">GST included · /month</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* One-time */}
            <AnimateIn delay={120}>
              <h3 className="text-[11px] uppercase tracking-widest text-smoke font-sans mb-4">One-time purchases</h3>
              <div className="border border-mist bg-white">
                {ADD_ONS.filter((a) => a.kind === 'one_time').map((addOn, i, arr) => (
                  <div
                    key={addOn.id}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-7 py-5 ${
                      i < arr.length - 1 ? 'border-b border-mist' : ''
                    }`}
                  >
                    <div className="min-w-0">
                      <h4 className="font-serif italic text-ink text-base mb-1">{addOn.name}</h4>
                      <p className="text-smoke text-xs font-sans">{addOn.unlocks}</p>
                      <p className="text-ash text-[11px] font-sans mt-1">Eligibility: {addOn.eligibility}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-xl font-serif italic text-ink">₹{addOn.price.toLocaleString('en-IN')}</div>
                      <div className="text-[11px] text-smoke font-sans">GST included · one-time</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════ FAQ ══ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-narrow mx-auto">
            <AnimateIn>
              <h2 className="text-2xl font-serif italic text-ink text-center mb-12">Common questions</h2>
            </AnimateIn>
            <AnimateIn delay={80}>
              <div className="border border-mist">
                {[
                  {
                    q: 'Can I cancel anytime?',
                    a: 'Yes. Cancel from inside the Roovero app any time. Your subscription continues until the end of the billing period.',
                  },
                  {
                    q: 'Which plan should most brands start with?',
                    a: 'Core is the right starting point for serious brands — it is the first plan that unlocks Meta connect, auto-publish, and analytics.',
                  },
                  {
                    q: 'Are taxes already included?',
                    a: 'Yes. Every listed INR price is GST-inclusive. The GST portion is disclosed separately at checkout.',
                  },
                  {
                    q: 'Do add-ons replace a higher plan?',
                    a: 'No. Add-ons expand specific quotas. The underlying plan still governs publishing surface, comment tools, and overall reel limits.',
                  },
                  {
                    q: 'How are longer reels handled?',
                    a: 'Growth includes 20-second reel support and Studio includes 30-second support. Reel length unlocks are governed by plan tier.',
                  },
                ].map((faq, i) => (
                  <div key={i} className={`p-7 ${i < 4 ? 'border-b border-mist' : ''}`}>
                    <h3 className="font-serif italic text-ink mb-2 text-base">{faq.q}</h3>
                    <p className="text-smoke text-sm font-sans leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
