import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roovero — Your Brand\'s True Voice',
  description: 'AI-powered social media automation for Indian cafés, restaurants, salons, and D2C brands. Your brand posts itself.',
  keywords: 'social media automation India, AI content generation, Instagram automation SMB, social media tool India',
  openGraph: {
    title: 'Roovero — Your Brand\'s True Voice',
    description: 'AI-powered social media automation for Indian SMBs. Set it once, post forever.',
    url: 'https://roovero.com',
    siteName: 'Roovero',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roovero — Your Brand\'s True Voice',
    description: 'AI-powered social media automation for Indian SMBs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body>{children}</body>
    </html>
  )
}
