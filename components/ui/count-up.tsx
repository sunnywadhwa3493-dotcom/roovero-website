'use client'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
}

export function CountUp({ value, prefix = '', suffix = '', className, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 })
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, motionVal, value])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`
    })
  }, [spring, prefix, suffix])

  return (
    <motion.span ref={ref} className={className}>
      {prefix}0{suffix}
    </motion.span>
  )
}
