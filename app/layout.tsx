import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { PromoBanner } from '@/components/promo-banner'
import './globals.css'

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: 'Mindfulness - Find Your Inner Peace',
  description: 'Discover mindfulness courses and resources to help you find inner peace and live a balanced life.',
  generator: 'be_mindfull_landing',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${notoSans.className} antialiased`}>
        <PromoBanner />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
