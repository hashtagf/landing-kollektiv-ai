import { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Kollektiv AI - Transform Your Business with AI',
  description: 'Leading AI solutions for business transformation. Expert consulting, custom AI development, and strategic implementation services.',
  keywords: ['AI', 'artificial intelligence', 'business transformation', 'consulting', 'machine learning'],
  openGraph: {
    title: 'Kollektiv AI - Transform Your Business with AI',
    description: 'Leading AI solutions for business transformation. Expert consulting, custom AI development, and strategic implementation services.',
    url: 'https://kollektiv-ai.com',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kollektiv AI - Business Transformation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kollektiv AI - Transform Your Business with AI',
    description: 'Leading AI solutions for business transformation. Expert consulting, custom AI development, and strategic implementation services.',
    images: ['/og-image.jpg']
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
    </main>
  )
}