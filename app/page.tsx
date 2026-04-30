import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="min-h-screen flex flex-col justify-center bg-white px-6 pt-20 pb-24">
          <div className="max-w-content mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-amber" />
                <span className="text-xs tracking-widest text-smoke uppercase font-sans">
                  Content operations for Indian SMBs
                </span>
              </div>

              <h1 className="font-serif italic text-ink leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
                Roovero keeps the content engine moving.<br />
                <span style={{ color: 'var(--amber)' }}>You keep running the business.</span>
              </h1>

              <p className="text-lg md:text-xl text-smoke leading-relaxed max-w-2xl mb-12" style={{ fontFamily: 'system-ui, sans-serif', fontStyle: 'normal' }}>
                Generate the calendar, approve every post in-app, request edits in plain language, and move into publishing without scattered tools or agency-style handoffs.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 text-base font-serif italic hover:bg-amber transition-colors"
                >
                  See plans
                  <span className="text-amber group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-3 border border-ink/20 text-ink px-8 py-4 text-base font-serif italic hover:border-ink transition-colors"
                >
                  See how it works
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-mist">
                <p className="text-sm text-smoke font-sans">Built for Indian operators</p>
                {['Cafés', 'Restaurants', 'Salons', 'D2C Brands'].map((category) => (
                  <span key={category} className="text-xs border border-mist text-smoke px-3 py-1.5 font-sans">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-narrow mb-16">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">How it works</span>
              <h2 className="font-serif italic text-ink mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>
                Three steps to a cleaner content workflow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist">
              {[
                {
                  number: '01',
                  title: 'Map the brand once',
                  description: 'Roovero captures business context, tone, audience, and brand assets through a guided onboarding flow.',
                },
                {
                  number: '02',
                  title: 'Generate in monthly batches',
                  description: 'The system creates statics, carousels, and reels based on the plan’s content mix and locked usage limits.',
                },
                {
                  number: '03',
                  title: 'Approve, edit, and publish',
                  description: 'Clients approve inside the app, ask for edits in plain language, and move into the publishing path with context intact.',
                },
              ].map((step, index) => (
                <div key={index} className={`p-10 ${index < 2 ? 'md:border-r border-mist border-b md:border-b-0' : ''}`}>
                  <div className="text-4xl font-serif italic text-amber/40 mb-6">{step.number}</div>
                  <h3 className="text-xl font-serif italic text-ink mb-3">{step.title}</h3>
                  <p className="text-smoke text-sm leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-xs tracking-widest text-smoke uppercase font-sans">Brand Asset Engine</span>
                <h2 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                  Every post keeps brand context intact
                </h2>
                <p className="text-smoke leading-relaxed font-sans mb-8">
                  Roovero uses plan-aware generation, edit credits, and brand-photo quota so the client gets controllable output instead of random automation theatre.
                </p>
                <ul className="space-y-3">
                  {[
                    'Natural-language edit path inside the approval flow',
                    'Brand-photo and reference-asset generation lane',
                    'Statics, carousels, reels, and avatar support',
                    'Output governed by plan and add-on entitlements',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-ink font-sans">
                      <span className="text-amber mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone border border-mist p-7 space-y-3">
                {/* Approved post */}
                <div className="bg-white border border-mist p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-smoke">
                      Static · Post 14 of 30
                    </span>
                    <span className="text-[11px] font-sans text-white bg-ink px-2.5 py-0.5 uppercase tracking-wide">
                      Approved
                    </span>
                  </div>
                  <div className="bg-stone border border-mist h-20 mb-4 flex items-center justify-center">
                    <span className="text-xs text-ash font-sans">Brand image</span>
                  </div>
                  <p className="text-xs text-ink font-sans leading-relaxed">
                    "Sunday mornings are better with a slow cup. Come find yours."
                  </p>
                  <div className="mt-3 pt-3 border-t border-mist flex items-center justify-between text-[11px] text-smoke font-sans">
                    <span>Sunday · 9:00 AM</span>
                    <span>Instagram</span>
                  </div>
                </div>

                {/* Edit request */}
                <div className="border border-amber/30 bg-amber-pale p-4">
                  <div className="text-[11px] font-sans uppercase tracking-widest text-amber mb-2">
                    Edit request
                  </div>
                  <p className="text-sm text-ink font-sans leading-relaxed">
                    "Change the image to show latte art, not a plain black coffee"
                  </p>
                </div>

                {/* Pending post */}
                <div className="bg-white border border-mist p-5 opacity-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-smoke">
                      Carousel · Post 15 of 30
                    </span>
                    <span className="text-[11px] font-sans text-smoke bg-stone px-2.5 py-0.5 uppercase tracking-wide">
                      Awaiting review
                    </span>
                  </div>
                  <div className="bg-stone border border-mist h-16 flex items-center justify-center">
                    <span className="text-xs text-ash font-sans">3-slide carousel · 4 hashtags</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-white py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs tracking-widest text-amber uppercase font-sans">Operational depth</span>
              <h2 className="font-serif italic mt-4 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                Core is where Roovero stops being a generator and starts being infrastructure.
              </h2>
              <p className="text-white/60 leading-relaxed font-sans mb-10 text-lg">
                Starter proves the loop. Core unlocks Meta connect, auto-publish, analytics, and the first real operating model. Growth and Studio add more reels, AI reply volume, competitor coverage, and output cadence.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-amber text-white px-8 py-4 font-serif italic hover:bg-amber-light transition-colors"
              >
                Compare plans →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-32 px-6">
          <div className="max-w-content mx-auto text-center">
            <span className="text-xs tracking-widest text-smoke uppercase font-sans">Pricing</span>
            <h2 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>
              Five tiers, one clean upgrade ladder.
            </h2>
            <p className="text-smoke font-sans mb-10 max-w-2xl mx-auto">
              Free handles discovery. Starter proves output. Core, Growth, and Studio scale publishing, video, and engagement depth with clear metered tradeoffs.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-serif italic hover:bg-amber transition-colors"
            >
              View all plans →
            </Link>
          </div>
        </section>

        <section className="bg-stone py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="border border-amber/30 p-12 md:p-20 text-center max-w-3xl mx-auto">
              <h2 className="font-serif italic text-ink mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                The real bottleneck is not ideas.<br />It is operational follow-through.
              </h2>
              <p className="text-smoke font-sans mb-10">
                Roovero is built for brands that want approvals, edits, publishing, and analytics to live in one system — not across agencies, chats, and separate tools.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-lg font-serif italic hover:bg-amber transition-colors"
              >
                See the pricing stack →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
