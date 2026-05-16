'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface WordRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

export function WordReveal({ text, className, style, delay = 0, as: Tag = 'h2' }: WordRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const words = text.split(' ')

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>} className={cn('flex flex-wrap', className)} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.28em] last:mr-0"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: delay + i * 0.07,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
