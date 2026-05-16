'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  return (
    <motion.div
      className="pointer-events-none fixed w-4 h-4 bg-amber rounded-full mix-blend-screen"
      style={{ zIndex: 9999 }}
      animate={{ x: position.x - 8, y: position.y - 8, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  )
}
