import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 mt-32">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif italic text-white">Roovero</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your brand's true voice. AI-powered social media automation built for Indian SMBs — cafés, restaurants, salons, and D2C brands.
            </p>
            <p className="text-xs text-white/40 mt-4 font-serif italic">
              From <em>rovere</em> — the oak. Deeply rooted. Built to last.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-serif italic mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-serif italic mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Roovero. All rights reserved. Made in India 🇮🇳
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="https://instagram.com/rooveroapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com/company/roovero" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:hello@roovero.com" className="hover:text-white transition-colors">hello@roovero.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
