'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Post {
  id: string
  type: string
  business: string
  handle: string
  initial: string
  caption: string
  hashtags: string
  likes: string
  comments: number
  status: string
  statusColor: string
  imagePath: string
  imageText: string
  imageSubtext: string
}

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white shadow-2xl overflow-hidden h-full">
      {/* Header */}
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
              <div
                className="w-0 h-0 ml-1"
                style={{
                  borderTop: '6px solid transparent',
                  borderBottom: '6px solid transparent',
                  borderLeft: '10px solid rgba(255,255,255,0.9)',
                }}
              />
            </div>
          </div>
        )}
        {post.id === 'carousel' && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-full ${i === 0 ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
        >
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
          <span
            className={`status-live inline-block w-1.5 h-1.5 rounded-full ${post.statusColor}`}
            style={{ background: 'currentColor' }}
          />
          <span className={post.statusColor}>{post.status}</span>
        </div>
      </div>

      {/* Type label */}
      <div className="px-4 py-2 border-t border-stone bg-stone">
        <span className="text-[10px] uppercase tracking-widest text-smoke font-sans">{post.type}</span>
      </div>
    </div>
  )
}

const easeOut = [0.22, 1, 0.36, 1] as const
const easeIn = [0.76, 0, 0.24, 1] as const

const cardVariants = {
  enter: { opacity: 0, y: 24, scale: 0.97 },
  center: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
  exit: {
    opacity: 0, y: -18, scale: 0.97,
    transition: { duration: 0.45, ease: easeIn },
  },
}

export default function HeroPostStack({ posts }: { posts: Post[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % posts.length), 3500)
    return () => clearInterval(id)
  }, [posts.length])

  return (
    <div className="relative" style={{ height: '520px' }}>
      {/* Floating "Monthly cycle live" badge */}
      <motion.div
        className="absolute -left-10 top-10 px-4 py-2 bg-white/6 border border-white/10 backdrop-blur-sm text-white/70 text-[11px] tracking-[0.16em] uppercase font-sans z-10"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Monthly cycle live
      </motion.div>

      {/* "Static · Carousel · Reel" badge */}
      <motion.div
        className="absolute -right-5 bottom-16 px-4 py-2 bg-amber text-white text-[11px] tracking-[0.14em] uppercase font-sans shadow-[0_16px_40px_rgba(200,135,58,0.26)] z-10"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Static · Carousel · Reel
      </motion.div>

      {/* Logo circle */}
      <motion.div
        className="absolute -right-10 top-28 w-24 h-24 rounded-full border border-white/8 bg-white/4 backdrop-blur-sm flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/brand/roovero-logos/roovero-mark-light.svg" alt="" className="w-10 h-10 opacity-85" />
      </motion.div>

      {/* Cycling card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ zIndex: 5 }}
        >
          <PostCard post={posts[index]} />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute -bottom-7 left-0 flex items-center gap-2 z-10">
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              'rounded-full transition-all duration-500',
              i === index
                ? 'w-5 h-1.5 bg-amber'
                : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
}
