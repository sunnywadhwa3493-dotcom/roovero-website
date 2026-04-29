import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center bg-white px-6 pt-20 pb-24">
          <div className="max-w-content mx-auto">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-amber" />
                <span className="text-xs tracking-widest text-smoke uppercase font-sans">
                  AI social media for Indian SMBs
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif italic text-ink leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
                Your brand posts itself.<br />
                <span style={{ color: 'var(--amber)' }}>You run your business.</span>
              </h1>

              {/* Subhead */}
              <p className="text-lg md:text-xl text-smoke leading-relaxed max-w-2xl mb-12" style={{ fontFamily: 'system-ui, sans-serif', fontStyle: 'normal' }}>
                Roovero generates, schedules, and publishes social content for cafés, restaurants, salons, and D2C brands — completely on autopilot. Set your brand voice once. Post forever.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 text-base font-serif italic hover:bg-amber transition-colors"
                >
                  Start for free
                  <span className="text-amber group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-3 border border-ink/20 text-ink px-8 py-4 text-base font-serif italic hover:border-ink transition-colors"
                >
                  See how it works
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-mist">
                <p className="text-sm text-smoke font-sans">Trusted by Indian brands</p>
                {['Cafés', 'Restaurants', 'Salons', 'D2C Brands'].map((c) => (
                  <span key={c} className="text-xs border border-mist text-smoke px-3 py-1.5 font-sans">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-stone py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-narrow mb-16">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">How it works</span>
              <h2 className="font-serif italic text-ink mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>
                Three steps to a brand that runs itself
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist">
              {[
                {
                  number: '01',
                  title: 'Set your brand voice',
                  description: 'Tell Roovero about your business — your niche, tone, target audience, and visual style. Takes 10 minutes.',
                },
                {
                  number: '02',
                  title: 'AI builds your calendar',
                  description: 'Every month, Roovero generates a full content calendar with captions, hashtags, and images tailored to your brand.',
                },
                {
                  number: '03',
                  title: 'Approve and post',
                  description: 'Review with one tap. Approve. Roovero publishes directly to Instagram at the optimal time. Done.',
                },
              ].map((step, i) => (
                <div key={i} className={`p-10 ${i < 2 ? 'md:border-r border-mist border-b md:border-b-0' : ''}`}>
                  <div className="text-4xl font-serif italic text-amber/40 mb-6">{step.number}</div>
                  <h3 className="text-xl font-serif italic text-ink mb-3">{step.title}</h3>
                  <p className="text-smoke text-sm leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features highlight */}
        <section className="bg-white py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-xs tracking-widest text-smoke uppercase font-sans">Brand Asset Engine</span>
                <h2 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                  Every post looks like it was made by a designer
                </h2>
                <p className="text-smoke leading-relaxed font-sans mb-8">
                  Roovero's Brand Asset Engine learns your colours, fonts, and visual style — then generates on-brand images for every post. No Canva. No designer. No templates that look like everyone else's.
                </p>
                <ul className="space-y-3">
                  {[
                    'AI image generation tuned to your brand',
                    'Consistent visual identity across all posts',
                    'Reels, carousels, and single-image formats',
                    'Auto-resize for every platform',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink font-sans">
                      <span className="text-amber mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone border border-mist aspect-square flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-smoke text-sm font-serif italic">Brand Asset Engine preview</p>
                  <p className="text-ash text-xs mt-2 font-sans">Screenshot coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Manager section */}
        <section className="bg-ink text-white py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs tracking-widest text-amber uppercase font-sans">AI Manager</span>
              <h2 className="font-serif italic mt-4 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                The social media manager your business can finally afford
              </h2>
              <p className="text-white/60 leading-relaxed font-sans mb-10 text-lg">
                A full-time social media manager costs ₹25,000–₹50,000/month. Roovero's AI Manager does everything they do — for ₹4,999/month. It generates content, publishes it, monitors competitors, replies to comments, and sends you a weekly report.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-amber text-white px-8 py-4 font-serif italic hover:bg-amber-light transition-colors"
              >
                See AI Manager plan →
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="bg-white py-32 px-6">
          <div className="max-w-content mx-auto text-center">
            <span className="text-xs tracking-widest text-smoke uppercase font-sans">Pricing</span>
            <h2 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>
              Start free. Grow on your terms.
            </h2>
            <p className="text-smoke font-sans mb-10 max-w-lg mx-auto">
              No setup fees. No contracts. Cancel anytime. Plans built for the reality of running an Indian SMB.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-serif italic hover:bg-amber transition-colors"
            >
              View all plans →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-stone py-32 px-6">
          <div className="max-w-content mx-auto">
            <div className="border border-amber/30 p-12 md:p-20 text-center max-w-3xl mx-auto">
              <h2 className="font-serif italic text-ink mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                Your brand has a true voice.<br />Let Roovero find it.
              </h2>
              <p className="text-smoke font-sans mb-10">
                Join Indian cafés, restaurants, and salons that have stopped worrying about social media.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-lg font-serif italic hover:bg-amber transition-colors"
              >
                Get started free →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
