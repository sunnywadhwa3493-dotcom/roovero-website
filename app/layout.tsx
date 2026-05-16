import type { Metadata } from 'next'
import './globals.css'
import LayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Roovero — Content Operations for Indian SMBs',
  description: 'Generate 30 posts a month — statics, carousels, reels. Approve from your phone. Publish automatically. Built for Indian cafés, restaurants, salons, and D2C brands.',
  keywords: 'social media content India, Instagram automation SMB, content calendar India, social media tool Indian business',
  openGraph: {
    title: 'Roovero — Content Operations for Indian SMBs',
    description: 'Generate, approve, and publish 30 posts a month. No agencies. No scattered tools.',
    url: 'https://roovero.com',
    siteName: 'Roovero',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roovero — Content Operations for Indian SMBs',
    description: 'Generate, approve, and publish 30 posts a month.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brand/roovero-logos/favicon-32.png" />
        <meta name="theme-color" content="#111111" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
