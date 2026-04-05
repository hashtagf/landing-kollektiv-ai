'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Kollektiv AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Transform your business with our revolutionary AI collective. 
            Experience the power of intelligent collaboration that adapts, learns, and evolves with your team.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              href="#about" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-400 hover:text-gray-950 hover:scale-105 transform transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-sm text-gray-400 mt-2">Companies Transformed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-400 mt-2">Uptime Guaranteed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400 mt-2">AI Support</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">Enterprise</div>
              <div className="text-sm text-gray-400 mt-2">Security Standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}