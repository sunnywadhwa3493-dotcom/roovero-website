'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParabolicPhonesProps {
  phones: Array<{
    id: string
    image?: string
    htmlPath?: string
    label?: string
  }>
}

export function ParabolicPhones({ phones = [] }: ParabolicPhonesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const spread = useTransform(scrollYProgress, [0.15, 0.55], [0, 1])

  const displayPhones: ParabolicPhonesProps['phones'] = phones.length > 0
    ? phones
    : Array.from({ length: 5 }, (_, i) => ({ id: `phone-${i}`, label: `Screen ${i + 1}` }))

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Ambient amber glow behind phones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 60%, rgba(200,135,58,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Phone arc container */}
      <div className="relative w-full h-[500px] flex items-end justify-center pb-12">
        {displayPhones.map((phone, i) => {
          const total = displayPhones.length
          // t: -1 (left) to +1 (right)
          const t = total === 1 ? 0 : (i / (total - 1)) * 2 - 1

          // Scroll-driven spread
          const x = useTransform(spread, (s) => t * 230 * s)
          // Parabolic arc: centre rises, edges stay low
          const y = useTransform(spread, (s) => -(1 - t * t) * 80 * s)
          const rotate = useTransform(spread, (s) => t * 9 * s)

          // Centre phone highest z-index
          const zIndex = Math.round(100 - Math.abs(t) * 45)
          // Outer phones slightly smaller
          const scale = 1 - Math.abs(t) * 0.04

          const entranceDelay = Math.abs(t) * 0.1

          return (
            <motion.div
              key={phone.id}
              className="absolute bottom-12"
              style={{ x, y, rotate, zIndex }}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: entranceDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div style={{ width: 152 }}>

                {/* ── Phone bezel ── */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 38,
                    padding: '3px',
                    background: 'linear-gradient(170deg, #3C3630 0%, #18150F 60%, #2A2620 100%)',
                    boxShadow: `
                      0 0 0 1px rgba(255,255,255,0.07),
                      0 32px 64px rgba(0,0,0,${0.6 + Math.abs(t) * 0.15}),
                      0 8px 24px rgba(0,0,0,0.5),
                      0 0 40px rgba(200,135,58,${0.04 + (1 - Math.abs(t)) * 0.06}),
                      inset 0 1px 0 rgba(255,255,255,0.09),
                      inset 0 -1px 0 rgba(0,0,0,0.3)
                    `,
                  }}
                >
                  {/* Power button (right side) */}
                  <div style={{
                    position: 'absolute', right: -2, top: '22%',
                    width: 3, height: 26, borderRadius: 2,
                    background: '#2A2620',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                  }} />
                  {/* Volume up (left) */}
                  <div style={{
                    position: 'absolute', left: -2, top: '17%',
                    width: 3, height: 18, borderRadius: 2,
                    background: '#2A2620',
                  }} />
                  {/* Volume down (left) */}
                  <div style={{
                    position: 'absolute', left: -2, top: '24%',
                    width: 3, height: 24, borderRadius: 2,
                    background: '#2A2620',
                  }} />
                  {/* Silent switch (left) */}
                  <div style={{
                    position: 'absolute', left: -2, top: '13%',
                    width: 3, height: 12, borderRadius: 2,
                    background: '#2A2620',
                  }} />

                  {/* ── Screen ── */}
                  <div
                    style={{
                      borderRadius: 35,
                      overflow: 'hidden',
                      aspectRatio: '9 / 19.5',
                      background: '#F5F3EF',
                      position: 'relative',
                    }}
                  >
                    {phone.image ? (
                      <img
                        src={phone.image}
                        alt={phone.label || `App screen ${i + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          display: 'block',
                        }}
                        draggable={false}
                      />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{ textAlign: 'center', opacity: 0.35 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#C8873A', margin: '0 auto 8px' }} />
                          <p style={{ fontSize: 10, fontFamily: 'serif', color: '#1F1B16' }}>{phone.label}</p>
                        </div>
                      </div>
                    )}

                    {/* Top edge fade — softens status bar transition into bezel */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0,
                      height: '8%',
                      background: 'linear-gradient(to bottom, rgba(24,21,15,0.15), transparent)',
                      pointerEvents: 'none',
                    }} />

                    {/* Bottom edge fade — blends screen into bezel / section */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '22%',
                      background: 'linear-gradient(to bottom, transparent, rgba(18,15,10,0.55))',
                      pointerEvents: 'none',
                    }} />

                    {/* Glass shine */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(130deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
                      pointerEvents: 'none',
                      borderRadius: 35,
                    }} />
                  </div>
                </div>

                {/* Ground shadow / depth cast */}
                <div style={{
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '75%',
                  height: 16,
                  background: 'rgba(0,0,0,0.4)',
                  filter: 'blur(14px)',
                  borderRadius: '50%',
                }} />

                {/* Label */}
                {phone.label && (
                  <p style={{
                    textAlign: 'center',
                    marginTop: 18,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    whiteSpace: 'nowrap',
                  }}>
                    {phone.label}
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
