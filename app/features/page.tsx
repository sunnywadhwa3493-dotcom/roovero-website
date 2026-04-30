import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const features = [
  {
    id: '01',
    category: 'Content Calendar',
    title: 'A full month of posts, generated from one briefing.',
    description:
      'Roovero captures your business context, tone, and brand assets during onboarding. Each month it generates a complete calendar — the right mix of statics, carousels, and reels based on your plan — and queues posts for daily delivery.',
    points: [
      'Up to 60 posts generated per billing cycle depending on plan',
      'Content mix (statics, carousels, reels) determined by plan entitlements',
      'Posts delivered daily from the queue — no manual scheduling',
      'Preference learning across cycles refines future generation',
    ],
  },
  {
    id: '02',
    category: 'Approval and Edit Flow',
    title: 'Every post goes through you before it goes anywhere.',
    description:
      'Generated content sits in an in-app approval queue. You review, approve, or request edits. Edit requests are written in plain language — caption tone, image adjustments, layout changes — and handled within the plan\'s edit credit system.',
    points: [
      'In-app approval queue per post, visible before scheduling',
      'Plain-language edit requests with no design tools required',
      'Edit credits govern request volume — 10 to 80 per month by plan',
      'Brand-photo generation lane for reference-based image requests',
    ],
  },
  {
    id: '03',
    category: 'Meta Publishing',
    title: 'Approved posts go live automatically.',
    description:
      'Once you approve a post, Roovero publishes it to Instagram at the scheduled time via the Meta API. No manual steps, no copy-paste. Core, Growth, and Studio plans include Meta connect, auto-publish, and post-level analytics.',
    points: [
      'Direct publishing to Instagram — no manual action after approval',
      'Publish failure alerts via push notification',
      'Post-level scheduling visible in the calendar',
      'Available on Core plan and above',
    ],
  },
  {
    id: '04',
    category: 'Analytics',
    title: 'Performance data and competitor context, inside the app.',
    description:
      'Roovero surfaces post-level Instagram performance data — reach, engagement, follower movement — and packages it as reporting you can act on. Competitor tracking slots let you monitor category activity alongside your own numbers.',
    points: [
      'Post-level performance data from Meta',
      'Screenshot analytics credits for deeper reporting (5–999 per month by plan)',
      'Competitor tracking: 1 slot on Core, 3 on Growth, 5 on Studio',
      'Analytics available on Core plan and above',
    ],
  },
  {
    id: '05',
    category: 'AI Reply Assist',
    title: 'Draft comment replies without leaving the system.',
    description:
      'Roovero reads your Instagram comments and drafts replies in your brand voice. You review before anything is sent. Reply generation credits are included in Growth and Studio plans, and available as a one-time add-on pack.',
    points: [
      '50 reply generations per month on Growth',
      '200 reply generations per month on Studio',
      'Brand voice-matched drafts based on your onboarding profile',
      'One-time 20-reply pack available as an add-on on Growth+',
    ],
  },
  {
    id: '06',
    category: 'Add-ons',
    title: 'Expand specific quotas without changing plans.',
    description:
      'Monthly add-ons increase discrete quotas — extra reels, carousels, edit credits, or brand photos — without requiring a full plan upgrade. One-time purchases cover campaign spikes or occasional needs outside the monthly rhythm.',
    points: [
      'Recurring monthly quota increases (reels, carousels, edits, brand photos)',
      'One-time reel, carousel, edit pack, and avatar video purchases',
      'Long-reel unlocks: 20-second on Growth, 30-second on Studio',
      'All add-ons billed through Razorpay alongside the base subscription',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-amber" />
                <span className="text-xs tracking-widest text-smoke uppercase font-sans">Features</span>
              </div>
              <h1
                className="font-serif italic text-ink mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
              >
                The content operating system for Indian SMBs.
              </h1>
              <p className="text-smoke font-sans text-lg leading-relaxed">
                Generation, approval, edits, publishing, and analytics — in one system, governed
                by a clear plan structure. No agencies, no scattered tools, no last-minute posts.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-stone py-16 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-mist">
              {features.map((feature, i) => (
                <AnimateIn
                  key={feature.id}
                  delay={(i % 2) * 100}
                  className={[
                    'bg-white p-10',
                    i % 2 === 0 && i < features.length - 1 ? 'md:border-r border-mist' : '',
                    i < features.length - 2 ? 'border-b border-mist' : '',
                    i === features.length - 1 && features.length % 2 !== 0 ? 'md:col-span-2' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 border border-amber/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] text-amber font-sans tabular-nums">{feature.id}</span>
                    </div>
                    <span className="text-xs tracking-widest text-amber uppercase font-sans">
                      {feature.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif italic text-ink mb-3">{feature.title}</h2>
                  <p className="text-smoke text-sm font-sans leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink font-sans">
                        <span className="text-amber mt-0.5 flex-shrink-0">–</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
              <div>
                <h2
                  className="font-serif italic text-ink mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
                >
                  Everything unlocks on a clear ladder.
                </h2>
                <p className="text-smoke font-sans text-base leading-relaxed mb-8">
                  Free proves the loop. Starter establishes daily output. Core is where publishing
                  and analytics become operational. Growth and Studio add more video, engagement
                  depth, and publishing volume.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 font-serif italic hover:bg-amber transition-colors"
                >
                  Compare plans →
                </Link>
              </div>
              <div className="border border-mist p-8 bg-stone">
                <div className="space-y-3 text-sm font-sans">
                  {[
                    { plan: 'Free', detail: '8 statics · no Meta connect · watermarked' },
                    { plan: 'Starter ₹1,999', detail: '30 posts · 1 reel · 10 edits · WhatsApp share' },
                    { plan: 'Core ₹4,999', detail: 'Meta publish · analytics · 2 reels · 7 carousels' },
                    { plan: 'Growth ₹8,999', detail: '5 reels · 3 competitor slots · 50 AI replies' },
                    { plan: 'Studio ₹14,999', detail: '60 posts · 8 reels · 200 AI replies · priority queue' },
                  ].map((row, i) => (
                    <div
                      key={row.plan}
                      className={`flex items-start justify-between gap-4 py-3 ${i < 4 ? 'border-b border-mist' : ''}`}
                    >
                      <span className="text-ink font-medium">{row.plan}</span>
                      <span className="text-smoke text-right">{row.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
