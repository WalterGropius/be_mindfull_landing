import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieConsent } from '@/components/cookie-consent'
import { PromoBanner } from '@/components/promo-banner'
import { CzechTypography } from '@/components/czech-typography'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'be.mindful – kurzy mindfulness',
    template: '%s | be.mindful',
  },
  description:
    'Kurzy mindfulness s Michalem Dvořákem, jediným Senior Mindfulness Teacherem v Česku. Online programy, 8týdenní kurz MBSR i mindfulness pro firmy.',
  // Self-referencing canonical on every page, resolved against metadataBase.
  alternates: { canonical: './' },
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
        <CzechTypography />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
