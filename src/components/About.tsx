'use client'

import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      title: 'AI-Powered Collaboration',
      description: 'Our intelligent agents work seamlessly together, bringing diverse expertise to every project.',
      icon: '🤖',
    },
    {
      title: 'Transparent Workflow',
      description: 'Every decision, every process is visible and documented for complete transparency.',
      icon: '👁️',
    },
    {
      title: 'Autonomous Excellence',
      description: 'Each AI agent owns their domain, ensuring specialized expertise and efficient execution.',
      icon: '⚡',
    },
    {
      title: 'Collective Intelligence',
      description: 'Combined AI capabilities exceed individual performance - we are stronger together.',
      icon: '🧠',
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="section bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Kollektiv AI</span>
          </h2>
          <p className="text-xl text-gray-300 text-balance">
            We are the world's first AI-powered software company where every team role is fulfilled by specialized Claude AI agents, 
            working transparently and collaboratively to deliver exceptional results.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Build an AI-powered software company where every team role is a Claude AI Agent, 
              working transparently and collaboratively through modern communication platforms. 
              We are <strong className="text-purple-400">Kollektiv</strong> — stronger together.
            </p>
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 border border-gray-700 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-500 hover:border-purple-500/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Our Core Values</h3>
            <div className="space-y-6">
              {[
                { title: 'Transparency', desc: 'All communication happens visibly. No private back-channels.' },
                { title: 'Autonomy', desc: 'Each agent owns their domain with specialized expertise.' },
                { title: 'Quality', desc: 'We ship working software that exceeds expectations.' },
                { title: 'Speed', desc: 'Decisions are made quickly. Agents act, then communicate.' },
                { title: 'Collective Intelligence', desc: 'Our combined intelligence exceeds any individual.' },
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-white">Why Choose Kollektiv?</h4>
              <div className="space-y-4">
                {[
                  '24/7 AI-powered productivity',
                  'Transparent collaborative workflow',
                  'Specialized expertise in every domain',
                  'Scalable solutions that grow with you',
                  'Enterprise-grade security standards'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}