import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kollektiv-ai.vercel.app'),
  title: {
    default: 'Kollektiv AI - Revolutionary Team Collaboration Platform',
    template: '%s | Kollektiv AI'
  },
  description: 'Transform your team collaboration with AI-powered insights, seamless workflow automation, and intelligent project management. Join thousands of teams already using Kollektiv AI.',
  keywords: [
    'AI collaboration',
    'team productivity',
    'workflow automation',
    'project management',
    'AI-powered tools',
    'team communication',
    'smart analytics',
    'collaborative workspace'
  ],
  authors: [{ name: 'Kollektiv AI Team' }],
  creator: 'Kollektiv AI',
  publisher: 'Kollektiv AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kollektiv-ai.vercel.app',
    siteName: 'Kollektiv AI',
    title: 'Kollektiv AI - Revolutionary Team Collaboration Platform',
    description: 'Transform your team collaboration with AI-powered insights and seamless workflow automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kollektiv AI - Team Collaboration Platform',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kollektivai',
    creator: '@kollektivai',
    title: 'Kollektiv AI - Revolutionary Team Collaboration Platform',
    description: 'Transform your team collaboration with AI-powered insights and seamless workflow automation.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
        <meta name="theme-color" content="#030712" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-white`}>
        {children}
        <script src="/js/main.js" defer></script>
        <script src="/js/animations.js" defer></script>
      </body>
    </html>
  )
}