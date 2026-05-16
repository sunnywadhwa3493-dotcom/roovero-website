'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { WordReveal } from '@/components/ui/word-reveal'
import AnimateIn from '@/components/AnimateIn'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add Firebase function or third-party email API call
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main className="pt-32 pb-32 px-6">
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <>
              <WordReveal
                text="Join the waitlist."
                className="font-serif italic text-ink mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              />
              <AnimateIn delay={80}>
                <p className="text-smoke font-sans text-lg mb-8 leading-relaxed">
                  Get early access to Roovero. Limited beta spots opening soon.
                </p>
              </AnimateIn>
              <AnimateIn delay={160}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@cafe.com"
                    className="w-full px-4 py-3 border border-mist font-sans text-sm focus:outline-none focus:border-amber bg-white"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-ink text-white py-4 font-serif italic hover:bg-amber transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join waitlist →
                  </motion.button>
                </form>
              </AnimateIn>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg font-serif italic text-ink mb-4">Thanks for joining!</p>
              <p className="text-smoke font-sans mb-8">We'll be in touch soon with early access details.</p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
