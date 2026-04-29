import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const features = [
  {
    category: 'Content Generation',
    title: 'AI that writes like your brand',
    description: 'Roovero learns your tone, niche, and audience. Every caption, hashtag set, and post idea is generated specifically for your business — not a generic template.',
    points: ['Brand voice training', 'Niche-specific content', 'Multiple format types (Reels, carousels, single images)', 'Monthly content calendar'],
    icon: '✍️',
  },
  {
    category: 'Brand Asset Engine',
    title: 'On-brand visuals, every time',
    description: 'Our AI image generator is tuned to your brand colours, style, and aesthetic. Every image it creates looks like it came from your design team.',
    points: ['Brand colour matching', 'Consistent visual identity', 'Auto-resize for all platforms', 'No Canva required'],
    icon: '🎨',
  },
  {
    category: 'Auto-Publishing',
    title: 'Posts go live without you',
    description: 'Once you approve a post, Roovero publishes it directly to Instagram at the scheduled time. You never have to open the app at midnight to post.',
    points: ['Direct Instagram publishing', 'Optimal time scheduling', 'Approve with one tap', 'Failure alerts via push notification'],
    icon: '🚀',
  },
  {
    category: 'Competitor Intelligence',
    title: 'Know what the competition is doing',
    description: 'Roovero monitors your competitors\' social activity weekly and surfaces insights — what\'s working for them, what\'s not, and where you can win.',
    points: ['Weekly competitor snapshots', 'Engagement benchmarks', 'Content gap analysis', 'Sent to your inbox every Monday'],
    icon: '🔍',
  },
  {
    category: 'Performance Analytics',
    title: 'Know what\'s working',
    description: 'Roovero pulls your Instagram metrics and distils them into a weekly digest — reach, engagement, follower growth, and which posts drove results.',
    points: ['Weekly performance digest', 'Post-level analytics', 'Screenshot-based reporting', 'Trend identification'],
    icon: '📊',
  },
  {
    category: 'AI Comment Replies',
    title: 'Never leave a comment unanswered',
    description: 'Roovero reads your comments and drafts replies in your brand voice. You approve before sending, or let it auto-reply to common queries.',
    points: ['AI-drafted replies', 'Brand voice matching', 'Auto-reply to FAQs', 'Available on AI Manager plan'],
    icon: '💬',
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl">
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">Features</span>
              <h1 className="font-serif italic text-ink mt-4 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                Everything your brand needs to post like a pro
              </h1>
              <p className="text-smoke font-sans text-lg leading-relaxed">
                Roovero combines AI content generation, brand-matched visuals, auto-publishing, and performance analytics into one tool built for Indian SMBs.
              </p>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-stone py-16 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-mist">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`
                    bg-white p-10
                    ${i % 2 === 0 && i < features.length - 1 ? 'md:border-r border-mist' : ''}
                    ${i < features.length - 2 ? 'border-b border-mist' : ''}
                    ${i === features.length - 1 && features.length % 2 !== 0 ? 'md:col-span-2' : ''}
                  `}
                >
                  <div className="text-3xl mb-5">{feature.icon}</div>
                  <span className="text-xs tracking-widest text-amber uppercase font-sans">{feature.category}</span>
                  <h2 className="text-xl font-serif italic text-ink mt-2 mb-3">{feature.title}</h2>
                  <p className="text-smoke text-sm font-sans leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink font-sans">
                        <span className="text-amber mt-0.5">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-content mx-auto text-center">
            <h2 className="text-3xl font-serif italic text-ink mb-6">Ready to let your brand post itself?</h2>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-lg font-serif italic hover:bg-amber transition-colors"
            >
              See pricing →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
