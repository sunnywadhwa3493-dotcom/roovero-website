'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParabolicPhonesProps {
  phones: Array<{
    id: string
    image?: string
    label?: string
  }>
}

export function ParabolicPhones({ phones = [] }: ParabolicPhonesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Map scroll progress to spread value (0 = stacked, 1 = fully fanned)
  const spread = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  // Use provided phones or default 5 placeholders
  const displayPhones = phones.length > 0 ? phones : Array.from({ length: 5 }, (_, i) => ({ id: `phone-${i}`, image: undefined, label: `Screen ${i + 1}` }))

  // Calculate position and rotation for each phone
  const getPhoneTransforms = (index: number, spreadValue: number) => {
    const total = displayPhones.length
    // Normalize position from -1 to 1 (center to edges)
    const t = total === 1 ? 0 : (index / (total - 1)) * 2 - 1

    // Parabolic curve: y = -(1 - t²) * depth * spread
    const x = t * 180 * spreadValue
    const y = -(1 - t * t) * 120 * spreadValue
    const rotate = t * 12 * spreadValue

    return { x, y, rotate }
  }

  return (
    <div ref={containerRef} className="relative w-full py-20">
      {/* Container for the arc */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {displayPhones.map((phone, i) => {
          const total = displayPhones.length
          const t = total === 1 ? 0 : (i / (total - 1)) * 2 - 1

          // Create useTransform for each phone's position
          const x = useTransform(spread, (s) => t * 180 * s)
          const y = useTransform(spread, (s) => -(1 - t * t) * 120 * s)
          const rotate = useTransform(spread, (s) => t * 12 * s)

          // Z-index: higher for phones closer to center
          const zIndex = Math.round(100 - Math.abs(t) * 50)

          // Stagger delay for initial entrance (center phone settles first)
          const entranceDelay = Math.abs(t) * 0.15

          return (
            <motion.div
              key={phone.id}
              className="absolute"
              style={{
                x,
                y,
                rotate,
                zIndex,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                opacity: { duration: 0.6, delay: entranceDelay },
                scale: { duration: 0.6, delay: entranceDelay },
                default: { type: 'spring', stiffness: 100, damping: 15 },
              }}
            >
              {/* Phone mockup container */}
              <div className="relative w-[160px] sm:w-[180px]">
                {/* Phone frame with rounded corners and shadow */}
                <motion.div
                  className="relative overflow-hidden rounded-[24px] bg-white shadow-lg"
                  style={{ aspectRatio: '9 / 19.5' }}
                  animate={{
                    boxShadow: `0 ${20 + Math.abs(t) * 10}px ${60 + Math.abs(t) * 20}px rgba(0,0,0,${0.08 + Math.abs(t) * 0.08})`,
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                >
                  {/* Status bar (iOS style) */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-ink flex items-center justify-between px-4 text-white text-[10px] z-10">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Screen content */}
                  <div className="pt-7 h-full bg-gradient-to-b from-stone to-white">
                    {phone.image ? (
                      <img
                        src={phone.image}
                        alt={phone.label || `Phone ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center px-4 pb-8">
                        <div className="text-center space-y-2">
                          <div className="w-8 h-8 bg-amber rounded-lg mx-auto" />
                          <p className="text-xs font-serif italic text-ink">{phone.label || `App Screen ${i + 1}`}</p>
                          <p className="text-[10px] text-smoke">Roovero</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Label below phone (optional) */}
                {phone.label && (
                  <motion.p className="text-center text-xs font-serif italic text-ink mt-3 whitespace-nowrap">
                    {phone.label}
                  </motion.p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
