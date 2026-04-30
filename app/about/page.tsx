import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-narrow mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-amber" />
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">About Roovero</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif italic text-ink mb-12" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.05' }}>
              The name means something.
            </h1>

            {/* Story */}
            <div className="prose-roovero space-y-6 text-ink font-sans leading-relaxed">
              <p className="text-xl text-smoke leading-relaxed font-serif italic">
                Roovero comes from <em>rovere</em> — the Italian word for oak. We named the company after it because of what oaks represent: they grow slowly, root deeply, and endure for centuries.
              </p>

              <p>
                We think that's what every Indian SMB brand actually is. Not a viral moment. Not a trending audio. A slow-growing, deeply-rooted story — told one post at a time, over years, until the neighbourhood knows you by heart.
              </p>

              <p>
                The problem is that most small business owners don't have time to tell that story consistently. They're running the kitchen, managing staff, handling suppliers, and a hundred other things before 9am. Social media falls through the cracks. Posts go out late, or not at all. The brand goes quiet.
              </p>

              <p>
                Roovero was built to fix that. We give Indian cafés, restaurants, salons, and D2C brands the social media presence they deserve — without requiring them to become content creators.
              </p>

              <div className="border-l-2 border-amber pl-6 my-10">
                <p className="text-xl font-serif italic text-ink">
                  "The bottleneck is never ideas. It's the operational follow-through —
                  the approvals, the edits, the 11pm post that never went out."
                </p>
              </div>

              <p>
                The AI handles generation, scheduling, and publishing. You handle the business. And over time — month by month, post by post — your brand becomes the oak: unmistakably yours, impossible to ignore.
              </p>
            </div>

            {/* Founder */}
            <div className="mt-16 pt-16 border-t border-mist">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">Built by</span>
              <div className="flex items-center gap-5 mt-6">
                <div className="w-14 h-14 bg-ink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-serif italic">S</span>
                </div>
                <div>
                  <p className="font-serif italic text-ink text-lg">Sampreeth Singh Wadhwa</p>
                  <p className="text-smoke text-sm font-sans mt-0.5">Founder, Roovero — Bengaluru, India</p>
                </div>
              </div>
              <p className="text-smoke font-sans text-sm leading-relaxed mt-5 max-w-lg">
                Built as a solo founder after years of watching Indian small businesses lose the social media battle not because of lack of effort, but lack of time. Roovero is the tool I wish existed.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-16 border-t border-mist">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-serif italic hover:bg-amber transition-colors"
              >
                Start your brand's story →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
