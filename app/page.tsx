import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'

/* ─── Simulated post data ─────────────────────────────────── */
const posts = [
  {
    id: 'static',
    type: 'Static',
    business: 'Aroha Café',
    handle: '@aromacafe.blr',
    initial: 'A',
    caption: 'Sunday mornings are for slow pours. Our filter kaapi returns this weekend.',
    hashtags: '#FilterCoffee #Bengaluru #WeekendVibes',
    likes: '2,438',
    comments: 47,
    status: 'Published',
    statusColor: 'text-emerald-400',
    imagePath: '/assets/cafe-static.png',
    imageText: 'filter kaapi',
    imageSubtext: 'handcrafted daily',
  },
  {
    id: 'carousel',
    type: 'Carousel · 4 slides',
    business: 'Spice Route Kitchen',
    handle: '@spiceroute.blr',
    initial: 'S',
    caption: "This week's specials are in. Swipe for the full menu — each dish tells a story.",
    hashtags: '#IndianFood #WeeklyMenu #Bengaluru',
    likes: '1,847',
    comments: 63,
    status: 'Approved',
    statusColor: 'text-sky-400',
    imagePath: '/assets/restaurant-campaign.png',
    imageText: 'this week',
    imageSubtext: '4 dishes · 4 stories',
  },
  {
    id: 'reel',
    type: 'Reel · 0:23',
    business: 'Studio Nine Salon',
    handle: '@studionine.salon',
    initial: 'N',
    caption: 'From consultation to colour — watch the full transformation.',
    hashtags: '#SalonLife #HairTransformation #Bengaluru',
    likes: '5,102',
    comments: 128,
    status: 'Awaiting review',
    statusColor: 'text-amber-400',
    imagePath: '/assets/salon-reel-cover.png',
    imageText: 'the transformation',
    imageSubtext: '0:23 · Studio Nine',
  },
]

function HeroPostCard({ post, cycleClass }: { post: typeof posts[0]; cycleClass: string }) {
  return (
    <div className={`absolute inset-0 ${cycleClass} pointer-events-none`}>
      <div className="bg-white shadow-2xl overflow-hidden" style={{ borderRadius: 0 }}>
        {/* Post header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-stone">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-white"
            style={{ background: 'var(--amber)' }}
          >
            {post.initial}
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-ink leading-tight truncate">{post.business}</p>
            <p className="text-[10px] text-smoke">{post.handle}</p>
          </div>
          <div className="ml-auto flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-smoke/40" />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-stone">
          <img
            src={post.imagePath}
            alt={`${post.business} ${post.type}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {post.id === 'reel' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                <div className="w-0 h-0 ml-1" style={{ borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid rgba(255,255,255,0.9)' }} />
              </div>
            </div>
          )}
          {post.id === 'carousel' && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`rounded-full ${i === 0 ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`} />
              ))}
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}>
            <p className="text-white/90 text-[11px] font-light italic" style={{ fontFamily: 'Georgia, serif' }}>
              {post.imageText}
            </p>
            <p className="text-white/55 text-[10px] mt-0.5">{post.imageSubtext}</p>
          </div>
        </div>

        {/* Caption */}
        <div className="px-4 pt-3 pb-1">
          <p className="text-[11px] text-ink leading-relaxed">
            <span className="font-semibold">{post.handle.replace('@', '')}</span>{' '}
            {post.caption}
          </p>
          <p className="text-[10px] mt-1.5" style={{ color: 'var(--amber)' }}>{post.hashtags}</p>
        </div>

        {/* Engagement */}
        <div className="px-4 py-3 flex items-center gap-4 text-[11px] text-smoke border-t border-stone mt-2">
          <span>♡ {post.likes}</span>
          <span>{post.comments} comments</span>
          <div className="ml-auto flex items-center gap-1.5 text-[11px] font-medium">
            <span className={`status-live inline-block w-1.5 h-1.5 rounded-full ${post.statusColor}`} style={{ background: 'currentColor' }} />
            <span className={post.statusColor}>{post.status}</span>
          </div>
        </div>

        {/* Type label */}
        <div className="px-4 py-2 border-t border-stone bg-stone">
          <span className="text-[10px] uppercase tracking-widest text-smoke font-sans">{post.type}</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Proof posts (below fold) ───────────────────────────── */
const proofPosts = [
  {
    business: 'Aroha Café',
    type: 'Static',
    imagePath: '/assets/cafe-static.png',
    caption: '"Sunday mornings are for slow pours. Our filter kaapi returns this weekend. Drop in before 11."',
    hashtags: '#FilterCoffee #Bengaluru #SundayMorning #CafeLife',
    likes: '2,438',
    comments: 47,
    status: 'Published',
    statusBg: 'bg-emerald-50',
    statusText: 'text-emerald-700',
    imageText: 'filter kaapi · Sunday',
  },
  {
    business: 'Spice Route Kitchen',
    type: 'Carousel · 4 slides',
    imagePath: '/assets/restaurant-campaign.png',
    caption: '"This week\'s specials are in. Each dish crafted fresh. Swipe for the full menu."',
    hashtags: '#IndianFood #WeeklySpecial #Bengaluru #DineIn',
    likes: '1,847',
    comments: 63,
    status: 'Approved',
    statusBg: 'bg-sky-50',
    statusText: 'text-sky-700',
    imageText: 'weekly specials · 4 dishes',
  },
  {
    business: 'Studio Nine Salon',
    type: 'Reel · 0:23',
    imagePath: '/assets/salon-reel-cover.png',
    caption: '"From consultation to colour. Watch the full transformation. Book your slot this week."',
    hashtags: '#SalonLife #HairTransformation #Bengaluru #BeforeAfter',
    likes: '5,102',
    comments: 128,
    status: 'Awaiting review',
    statusBg: 'bg-amber-50',
    statusText: 'text-amber-700',
    imageText: 'the transformation · 0:23',
  },
  {
    business: 'Soma Botanicals',
    type: 'Static · D2C',
    imagePath: '/assets/d2c-skincare.png',
    caption: '"A quieter hydration ritual. Saffron, hyaluronic acid, and a formula built for daily use."',
    hashtags: '#SkincareIndia #D2CBeauty #HydrationRoutine #SomaBotanicals',
    likes: '1,264',
    comments: 21,
    status: 'Generated',
    statusBg: 'bg-stone',
    statusText: 'text-smoke',
    imageText: 'hydrating serum · launch visual',
  },
]

const productScreens = [
  {
    eyebrow: 'Dashboard',
    title: 'Monthly output, one view.',
    body: 'The home screen keeps approvals, next posts, and performance in one place so clients do not have to chase multiple tools.',
  },
  {
    eyebrow: 'Approval queue',
    title: 'Every post is reviewed in-app.',
    body: 'Approve, reject, or describe an edit in plain English before anything publishes. This is the step that keeps Roovero useful instead of reckless.',
  },
  {
    eyebrow: 'Analytics',
    title: 'Performance loops back into the next cycle.',
    body: 'Meta analytics and screenshot metrics feed the next calendar so the system learns what actually moved reach, saves, and engagement.',
  },
]

const pilotFeedback = [
  {
    quote:
      'The key shift was not more content. It was having approvals and publishing happen in one place instead of through WhatsApp and back-and-forth.',
    label: 'Pilot feedback',
    context: 'Bengaluru café operator',
  },
  {
    quote:
      'We finally had a clean way to ask for edits without restarting the whole process. That made the system feel practical, not experimental.',
    label: 'Pilot feedback',
    context: 'Salon founder',
  },
  {
    quote:
      'Core felt like the first plan where this became infrastructure. Once publishing and analytics were connected, it stopped feeling like another AI toy.',
    label: 'Pilot feedback',
    context: 'D2C brand operator',
  },
]

/* ─── Page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Nav heroIsDark />
      <main>

        {/* ══════════════════════════════ 1. HERO ══ */}
        <section className="relative min-h-screen bg-ink flex items-center pt-16 overflow-hidden">

          {/* Ambient amber glow (top right) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 55% 60% at 78% 40%, rgba(200,135,58,0.09) 0%, transparent 65%)' }}
          />
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          <div className="max-w-content mx-auto px-6 py-24 w-full relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-center">

              {/* Left: Text */}
              <div>
                <div className="flex items-center gap-3 mb-10 animate-fade-up delay-0">
                  <span className="amber-rule" />
                  <span className="text-[11px] tracking-widest text-white/50 uppercase font-sans">
                    Content Operations · Indian SMBs
                  </span>
                </div>

                <h1
                  className="font-serif italic text-white mb-8 animate-fade-up delay-100"
                  style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.04' }}
                >
                  Generate.<br />
                  Approve.<br />
                  <span style={{ color: 'var(--amber)' }}>Publish.</span>
                </h1>

                <p className="text-lg text-white/60 leading-relaxed font-sans max-w-xl mb-10 animate-fade-up delay-200">
                  Thirty posts a month — statics, carousels, and reels — delivered to your phone
                  for approval and pushed live automatically. Built for Indian cafés, restaurants,
                  salons, and D2C brands.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up delay-300">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-amber text-white px-8 py-4 text-base font-serif italic hover:bg-amber-light transition-colors"
                  >
                    See plans →
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 px-8 py-4 text-base font-serif italic hover:border-white/50 hover:text-white transition-colors"
                  >
                    How it works
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 animate-fade-up delay-400">
                  {[
                    { number: '30', label: 'posts per month' },
                    { number: '₹1,999', label: 'from Starter' },
                    { number: '0', label: 'agencies needed' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-serif italic text-white">{stat.number}</div>
                      <div className="text-xs text-white/40 font-sans mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: cycling post stack */}
              <div className="hidden lg:block relative animate-fade-in delay-500">
                <div className="relative" style={{ height: '480px' }}>
                  {posts.map((post, i) => (
                    <HeroPostCard
                      key={post.id}
                      post={post}
                      cycleClass={`cycle-${i + 1}` as string}
                    />
                  ))}
                </div>
                {/* Label strip below post */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="amber-rule" style={{ width: '24px' }} />
                  <p className="text-[11px] text-white/35 font-sans">
                    Cycling through Static · Carousel · Reel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ 2. MARQUEE ══ */}
        <section className="bg-amber overflow-hidden py-3.5">
          <div className="marquee-track select-none">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-0">
                {[
                  'Cafés', 'Restaurants', 'Salons', 'D2C Brands',
                  'Boutiques', 'Fitness Studios', 'Cloud Kitchens', 'Bakeries',
                  'Spas & Wellness', 'Apparel Brands', 'Photography Studios', 'Home Décor',
                ].map((cat) => (
                  <span key={cat} className="flex items-center gap-5 pr-5">
                    <span className="text-[11px] tracking-widest uppercase text-white font-sans whitespace-nowrap">
                      {cat}
                    </span>
                    <span className="w-1 h-1 bg-white/50 rotate-45 inline-block flex-shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════ 3. PRODUCT PROOF ══ */}
        <section className="bg-white py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="max-w-2xl mb-16">
              <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Output</span>
              <h2
                className="font-serif italic text-ink mt-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                What goes out every month.
              </h2>
              <p className="text-smoke font-sans text-base leading-relaxed mt-4 max-w-xl">
                Every post is generated from your brand context, queued for approval, and published
                to Instagram automatically. These examples show how the system adapts across
                hospitality, beauty, and D2C brands.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border border-mist">
              {proofPosts.map((post, i) => (
                <AnimateIn
                  key={post.business}
                  delay={i * 100}
                  className={[
                    i < proofPosts.length - 1 ? 'border-b xl:border-b-0 border-mist' : '',
                    i === 0 || i === 2 ? 'md:border-r border-mist' : '',
                    i < 3 ? 'xl:border-r border-mist' : '',
                  ].join(' ')}
                >
                  {/* Post card */}
                  <div className="bg-white h-full flex flex-col">
                    {/* Image */}
                    <div className="h-52 relative overflow-hidden flex-shrink-0 bg-stone">
                      <img
                        src={post.imagePath}
                        alt={`${post.business} ${post.type}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {post.type.startsWith('Reel') && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10">
                            <div className="ml-1" style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid rgba(255,255,255,0.85)' }} />
                          </div>
                        </div>
                      )}
                      {post.type.startsWith('Carousel') && (
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                          {[0, 1, 2, 3].map((j) => (
                            <div key={j} className={`rounded-full ${j === 0 ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`} />
                          ))}
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}>
                        <p className="text-white/85 text-xs font-light italic" style={{ fontFamily: 'Georgia, serif' }}>
                          {post.imageText}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-semibold text-ink text-sm">{post.business}</p>
                          <p className="text-[11px] text-smoke mt-0.5">{post.type}</p>
                        </div>
                        <span className={`text-[11px] font-sans px-2.5 py-1 ${post.statusBg} ${post.statusText}`}>
                          {post.status}
                        </span>
                      </div>

                      <p className="text-sm text-ink font-sans leading-relaxed mb-3 flex-1">
                        {post.caption}
                      </p>
                      <p className="text-xs font-sans mb-4" style={{ color: 'var(--amber)' }}>
                        {post.hashtags}
                      </p>

                      <div className="pt-4 border-t border-mist flex items-center gap-4 text-xs text-smoke font-sans">
                        <span>♡ {post.likes}</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={120} className="mt-8">
              <p className="text-xs text-smoke font-sans max-w-2xl">
                Sample brand assets shown from four distinct categories to demonstrate style adaptability.
                Replace with live campaign outputs as client permission allows.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════════ 4. HOW IT WORKS ══ */}
        <section className="bg-stone py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="max-w-2xl mb-16">
              <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Workflow</span>
              <h2
                className="font-serif italic text-ink mt-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                Three steps. Then it runs.
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist">
              {[
                {
                  number: '01',
                  title: 'Brief the brand once.',
                  body: 'A structured onboarding maps your business context, tone, audience, and brand assets. This runs once. Roovero uses it every month to generate content that actually sounds like you.',
                  detail: 'One-time setup · ~15 minutes',
                },
                {
                  number: '02',
                  title: 'Get 30 posts, generated monthly.',
                  body: 'Each billing cycle, Roovero generates your full calendar — the right mix of statics, carousels, and reels — and delivers them to your approval queue. No brief needed month to month.',
                  detail: 'Statics · Carousels · Reels',
                },
                {
                  number: '03',
                  title: 'Approve, edit, and go live.',
                  body: 'Review each post in the app. Approve as-is, or describe an edit in plain language. Once approved, Roovero publishes directly to Instagram at the scheduled time.',
                  detail: 'In-app approval · Auto-publish · Core+',
                },
              ].map((step, i) => (
                <AnimateIn
                  key={step.number}
                  delay={i * 120}
                  className={`bg-white p-10 ${i < 2 ? 'md:border-r border-mist border-b md:border-b-0' : ''}`}
                >
                  <div className="text-4xl font-serif italic mb-6" style={{ color: 'var(--amber)', opacity: 0.5 }}>
                    {step.number}
                  </div>
                  <h3 className="text-lg font-serif italic text-ink mb-3">{step.title}</h3>
                  <p className="text-smoke text-sm font-sans leading-relaxed mb-6">{step.body}</p>
                  <div className="inline-flex items-center gap-2">
                    <span className="w-4 h-px bg-amber" />
                    <span className="text-[11px] text-smoke font-sans">{step.detail}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ 5. INSIDE THE APP ══ */}
        <section className="bg-white py-28 px-6">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
              <AnimateIn className="max-w-xl">
                <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Inside the app</span>
                <h2
                  className="font-serif italic text-ink mt-4 mb-6"
                  style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em' }}
                >
                  What the product actually looks like when it runs.
                </h2>
                <p className="text-smoke font-sans leading-relaxed mb-8">
                  The website should sell the product you are actually building. Roovero is not a
                  vague AI assistant. It is a workflow: dashboard, approval queue, publishing, and
                  analytics tied together in one operating surface.
                </p>
                <ul className="space-y-4">
                  {[
                    'Dashboard keeps approvals, publishing, and performance visible',
                    'Approval queue prevents unreviewed posts from going live',
                    'Plain-language edits keep iteration inside the workflow',
                    'Analytics and comments close the loop for the next cycle',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink font-sans">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 border border-amber/50 flex items-center justify-center">
                        <span className="text-amber text-[10px]">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <div className="space-y-5">
                {productScreens.map((screen, index) => (
                  <AnimateIn key={screen.title} delay={120 + index * 80}>
                    <div className="border border-mist bg-stone overflow-hidden">
                      <div className="px-5 py-3 border-b border-mist flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-smoke font-sans">{screen.eyebrow}</p>
                          <p className="font-serif italic text-ink text-lg mt-1">{screen.title}</p>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 status-live" />
                      </div>
                      <div className="p-5">
                        {index == 0 && (
                          <div className="bg-white border border-mist p-4">
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              {[
                                ['30', 'posts this cycle'],
                                ['11', 'awaiting approval'],
                                ['82%', 'AI efficiency'],
                              ].map(([value, label]) => (
                                <div key={label} className="bg-stone p-3">
                                  <div className="font-serif italic text-xl text-ink">{value}</div>
                                  <div className="text-[10px] text-smoke font-sans mt-1 uppercase tracking-wide">{label}</div>
                                </div>
                              ))}
                            </div>
                            <div className="border border-mist p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] uppercase tracking-widest text-smoke font-sans">Next in queue</span>
                                <span className="text-[10px] text-amber font-sans uppercase tracking-wide">Today · 4:30 PM</span>
                              </div>
                              <p className="text-sm text-ink font-sans">Carousel draft for weekly specials is ready for approval.</p>
                            </div>
                          </div>
                        )}

                        {index == 1 && (
                          <div className="bg-white border border-mist p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="text-[10px] uppercase tracking-widest text-smoke font-sans">Post 14 of 30</div>
                                <div className="font-serif italic text-ink text-lg mt-1">Filter kaapi weekend post</div>
                              </div>
                              <span className="text-[10px] font-sans text-amber-700 bg-amber-50 px-2.5 py-1 uppercase tracking-wide">Awaiting review</span>
                            </div>
                            <div className="h-28 mb-4" style={{ background: 'linear-gradient(160deg, #2D1008 0%, #B86820 60%, #F0CCA0 100%)' }} />
                            <p className="text-sm text-ink font-sans leading-relaxed mb-4">
                              “Sunday mornings are for slow pours. Our filter kaapi returns this weekend.”
                            </p>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              {['Approve', 'Quick edit', 'Regenerate'].map((action, actionIndex) => (
                                <div
                                  key={action}
                                  className={`py-2 text-xs font-sans ${
                                    actionIndex === 0
                                      ? 'bg-ink text-white'
                                      : 'border border-mist text-smoke bg-stone'
                                  }`}
                                >
                                  {action}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {index == 2 && (
                          <div className="bg-white border border-mist p-4">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="bg-stone p-3">
                                <div className="text-[10px] uppercase tracking-widest text-smoke font-sans">Reach</div>
                                <div className="font-serif italic text-2xl text-ink mt-1">18.4k</div>
                              </div>
                              <div className="bg-stone p-3">
                                <div className="text-[10px] uppercase tracking-widest text-smoke font-sans">Saves</div>
                                <div className="font-serif italic text-2xl text-ink mt-1">612</div>
                              </div>
                            </div>
                            <div className="border border-mist p-4">
                              <div className="text-[10px] uppercase tracking-widest text-smoke font-sans mb-3">Weekly insight</div>
                              <div className="w-full h-20 flex items-end gap-2">
                                {[34, 62, 48, 76, 58, 84, 68].map((height, barIndex) => (
                                  <div key={barIndex} className="flex-1 bg-stone relative">
                                    <div
                                      className="absolute bottom-0 left-0 right-0"
                                      style={{ height: `${height}%`, background: barIndex === 5 ? 'var(--amber)' : 'var(--ink)' }}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        <p className="text-smoke text-sm font-sans leading-relaxed mt-4">{screen.body}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ 6. CAPABILITIES ══ */}
        <section className="bg-ink py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="max-w-3xl mb-16">
              <span className="text-[11px] tracking-widest uppercase font-sans" style={{ color: 'var(--amber)' }}>
                The full stack
              </span>
              <h2
                className="font-serif italic text-white mt-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                Core is where Roovero stops being a generator<br />and starts being infrastructure.
              </h2>
              <p className="text-white/55 font-sans leading-relaxed mt-6 text-lg max-w-2xl">
                Starter proves the output loop. Core unlocks Meta connect, auto-publish, analytics,
                and the first real operating model. Growth and Studio expand video, engagement depth,
                and publishing cadence.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border border-white/10">
              {[
                {
                  label: 'Content calendar',
                  detail: 'Up to 60 posts generated per cycle',
                  sub: 'Statics · Carousels · Reels based on plan mix',
                },
                {
                  label: 'Meta publishing',
                  detail: 'Auto-publish to Instagram after approval',
                  sub: 'Available on Core, Growth, and Studio',
                },
                {
                  label: 'Analytics',
                  detail: 'Post-level performance from Meta',
                  sub: '5–999 screenshot credits by plan',
                },
                {
                  label: 'Competitor tracking',
                  detail: '1–5 competitor slots',
                  sub: 'Core (1), Growth (3), Studio (5)',
                },
                {
                  label: 'AI reply assist',
                  detail: '50–200 reply generations per month',
                  sub: 'Growth (50), Studio (200)',
                },
                {
                  label: 'Add-ons',
                  detail: 'Expand any quota without upgrading',
                  sub: 'Reels · Carousels · Edits · Brand photos',
                },
              ].map((cap, i) => {
                const borders = [
                  'md:border-r xl:border-r border-b border-white/10',
                  'border-b border-white/10 xl:border-r border-white/10',
                  'md:border-r xl:border-r-0 border-b border-white/10',
                  'md:border-r-0 xl:border-r border-b md:border-b-0 xl:border-b border-white/10',
                  'md:border-r border-b md:border-b-0 border-white/10',
                  '',
                ]
                return (
                  <AnimateIn key={cap.label} delay={(i % 3) * 80} className={`p-8 ${borders[i]}`}>
                    <div className="w-6 h-px mb-5" style={{ background: 'var(--amber)' }} />
                    <p className="font-serif italic text-white text-lg mb-2">{cap.label}</p>
                    <p className="text-white/70 text-sm font-sans">{cap.detail}</p>
                    <p className="text-white/35 text-xs font-sans mt-1">{cap.sub}</p>
                  </AnimateIn>
                )
              })}
            </div>

            <AnimateIn className="mt-10">
              <Link
                href="/features"
                className="inline-flex items-center gap-3 font-serif italic text-white/80 hover:text-white transition-colors"
              >
                <span className="amber-rule" />
                Full feature breakdown →
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════════ 7. PILOT FEEDBACK ══ */}
        <section className="bg-stone py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="max-w-2xl mb-14">
              <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Pilot feedback</span>
              <h2
                className="font-serif italic text-ink mt-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                What early operators actually valued.
              </h2>
              <p className="text-smoke font-sans text-base leading-relaxed mt-4 max-w-xl">
                Kept anonymous on purpose. The useful signal here is not celebrity proof. It is
                whether the workflow felt operationally better than briefs, agencies, and message threads.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-mist bg-white">
              {pilotFeedback.map((item, i) => (
                <AnimateIn
                  key={item.context}
                  delay={i * 100}
                  className={`${i < 2 ? 'md:border-r border-mist border-b md:border-b-0' : ''}`}
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="w-6 h-px mb-6" style={{ background: 'var(--amber)' }} />
                    <p className="text-ink font-serif italic text-lg leading-relaxed flex-1">
                      “{item.quote}”
                    </p>
                    <div className="pt-6 mt-6 border-t border-mist">
                      <div className="text-[10px] uppercase tracking-widest text-smoke font-sans">{item.label}</div>
                      <div className="text-sm text-ink font-sans mt-1">{item.context}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ 8. PRICING TEASE ══ */}
        <section className="bg-white py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[11px] tracking-widest text-smoke uppercase font-sans">Pricing</span>
              <h2
                className="font-serif italic text-ink mt-4 mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
              >
                Five tiers. One clear ladder.
              </h2>
              <p className="text-smoke font-sans text-base leading-relaxed">
                Free proves the loop. Starter establishes daily output. Core, Growth, and Studio
                scale publishing, video, and engagement depth with clear metered tradeoffs.
              </p>
            </AnimateIn>

            <AnimateIn delay={100} className="border border-mist max-w-5xl mx-auto">
              {[
                { id: 'free',    price: 'Free',     tag: 'Discovery',       detail: '8 watermarked statics · no Meta connect' },
                { id: 'starter', price: '₹1,999',   tag: 'Starter',         detail: '30 posts · 1 reel · 10 edits · WhatsApp share' },
                { id: 'core',    price: '₹4,999',   tag: 'Core',            detail: 'Meta publish · analytics · 7 carousels · 2 reels', highlight: true },
                { id: 'growth',  price: '₹8,999',   tag: 'Growth',          detail: '5 reels · 3 competitor slots · 50 AI replies' },
                { id: 'studio',  price: '₹14,999',  tag: 'Studio',          detail: '60 posts · 8 reels · 200 AI replies · priority queue' },
              ].map((plan, i) => (
                <div
                  key={plan.id}
                  className={`flex items-center justify-between gap-4 px-8 py-5 ${
                    i < 4 ? 'border-b border-mist' : ''
                  } ${plan.highlight ? 'bg-ink text-white' : 'hover:bg-stone transition-colors'}`}
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <span className={`font-serif italic text-xl flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-ink'}`}>
                      {plan.tag}
                    </span>
                    {plan.highlight && (
                      <span className="text-[10px] uppercase tracking-widest text-amber font-sans flex-shrink-0">
                        Recommended
                      </span>
                    )}
                    <span className={`text-sm font-sans truncate hidden sm:block ${plan.highlight ? 'text-white/55' : 'text-smoke'}`}>
                      {plan.detail}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <span className={`font-serif italic text-lg ${plan.highlight ? 'text-white' : 'text-ink'}`}>
                      {plan.price}
                    </span>
                    <Link
                      href={`/subscribe?plan=${plan.id}`}
                      className={`text-sm font-serif italic px-5 py-2 transition-colors ${
                        plan.highlight
                          ? 'bg-amber text-white hover:bg-amber-light'
                          : 'bg-ink text-white hover:bg-amber'
                      }`}
                    >
                      {plan.id === 'free' ? 'Start free' : 'Get started'}
                    </Link>
                  </div>
                </div>
              ))}
            </AnimateIn>

            <AnimateIn delay={150} className="text-center mt-8">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 font-serif italic text-smoke hover:text-ink transition-colors"
              >
                <span className="amber-rule" />
                Full pricing and add-ons →
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════════════════════════ 9. FINAL CTA ══ */}
        <section className="bg-stone py-28 px-6">
          <div className="max-w-content mx-auto">
            <AnimateIn>
              <div className="border border-amber/25 p-12 md:p-20 max-w-3xl mx-auto" style={{ background: 'rgba(200,135,58,0.04)' }}>
                <span className="text-[11px] tracking-widest text-smoke uppercase font-sans block mb-6">Ready?</span>
                <h2
                  className="font-serif italic text-ink mb-6"
                  style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
                >
                  The content calendar runs every month. The question is whether yours does.
                </h2>
                <p className="text-smoke font-sans mb-10 leading-relaxed">
                  Start on Free. Move to Starter when you want daily output. Upgrade to Core when
                  you need Meta publishing and analytics to run in one system.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-base font-serif italic hover:bg-amber transition-colors"
                  >
                    See pricing →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 text-smoke hover:text-ink transition-colors px-4 py-4 text-sm font-serif italic"
                  >
                    About Roovero
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
