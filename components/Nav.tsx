'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface NavProps {
  heroIsDark?: boolean
}

export default function Nav({ heroIsDark = false }: NavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isTransparent = heroIsDark && !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/45 via-black/20 to-transparent'
          : 'bg-white/96 backdrop-blur-sm border-b border-mist'
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          className={`flex items-center gap-2.5 group transition-all duration-300 ${
            isTransparent
              ? 'px-3 py-2 bg-black/20 backdrop-blur-sm border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.22)]'
              : ''
          }`}
        >
          <img
            src={
              isTransparent
                ? '/brand/roovero-logos/roovero-logo-light.svg'
                : '/brand/roovero-logos/roovero-logo-dark.svg'
            }
            alt="Roovero"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'About'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className={`text-sm font-serif italic transition-colors duration-200 ${
                isTransparent ? 'text-white/70 hover:text-white' : 'text-smoke hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className={`text-sm transition-colors duration-200 px-4 py-2 ${
              isTransparent ? 'text-white/60 hover:text-white' : 'text-smoke hover:text-ink'
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-serif italic px-5 py-2.5 transition-colors duration-200 ${
              scrolled
                ? 'bg-white text-ink hover:bg-amber-pale'
                : 'bg-ink text-white hover:bg-amber'
            }`}
          >
            Get started →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[
            open ? 'rotate-45 translate-y-2' : '',
            open ? 'opacity-0' : '',
            open ? '-rotate-45 -translate-y-2' : '',
          ].map((cls, i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-200 ${cls} ${
                isTransparent ? 'bg-white' : 'bg-ink'
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone px-6 py-6 flex flex-col gap-5">
          {['Features', 'Pricing', 'About'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-lg font-serif italic text-ink"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <hr className="border-stone" />
          <Link href="/login" className="text-base text-smoke" onClick={() => setOpen(false)}>
            Sign in
          </Link>
          <Link
            href="/pricing"
            className="text-base bg-ink text-white px-5 py-3 text-center font-serif italic hover:bg-amber transition-colors"
            onClick={() => setOpen(false)}
          >
            Get started →
          </Link>
        </div>
      )}
    </nav>
  )
}
