'use client'

import { useState, useEffect } from 'react'
import { Brain, Users, Zap, Shield } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Our collective AI agents work together, combining specialized knowledge to deliver unprecedented intelligence and problem-solving capabilities.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Collaborative Framework",
      description: "Experience seamless integration between AI agents and human teams, creating a powerful synergy that amplifies productivity.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Deploy solutions in minutes, not months. Our AI collective processes information and delivers insights at unprecedented speed.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance standards, and complete data sovereignty for your organization.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ]

  return (
    <section id="about-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Kollektiv AI
            </span>
          </h2>
          <p className={`text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We're pioneering the future of artificial intelligence through collective intelligence. 
            Our AI agents work as a unified team, each bringing specialized expertise to solve complex challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`bg-gray-950/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 bg-gray-950/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-400 text-sm">Specialized AI Agents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">1M+</div>
              <div className="text-gray-400 text-sm">Tasks Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-400 text-sm">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-400 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}