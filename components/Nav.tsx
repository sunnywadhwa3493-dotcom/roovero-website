'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif italic text-ink tracking-tight">
            Roovero
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1 group-hover:scale-150 transition-transform" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-smoke hover:text-ink transition-colors font-serif italic">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-smoke hover:text-ink transition-colors font-serif italic">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-smoke hover:text-ink transition-colors font-serif italic">
            About
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-smoke hover:text-ink transition-colors px-4 py-2"
          >
            Sign in
          </Link>
          <Link
            href="/pricing"
            className="text-sm bg-ink text-white px-5 py-2.5 hover:bg-amber transition-colors rounded-none font-serif italic"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone px-6 py-6 flex flex-col gap-5">
          <Link href="/features" className="text-lg font-serif italic text-ink" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-lg font-serif italic text-ink" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/about" className="text-lg font-serif italic text-ink" onClick={() => setOpen(false)}>About</Link>
          <hr className="border-stone" />
          <Link href="/login" className="text-base text-smoke" onClick={() => setOpen(false)}>Sign in</Link>
          <Link href="/pricing" className="text-base bg-ink text-white px-5 py-3 text-center font-serif italic" onClick={() => setOpen(false)}>
            Get started
          </Link>
        </div>
      )}
    </nav>
  )
}
