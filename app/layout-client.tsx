'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import CustomCursor from '@/components/ui/custom-cursor'
import ScrollProgressBar from '@/components/ui/scroll-progress-bar'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
