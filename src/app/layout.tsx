import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kollektiv AI - Revolutionary Team Collaboration Platform',
  description: 'Transform your team collaboration with AI-powered insights and seamless workflow automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <script src="/js/main.js" defer></script>
        <script src="/js/animations.js" defer></script>
      </body>
    </html>
  )
}