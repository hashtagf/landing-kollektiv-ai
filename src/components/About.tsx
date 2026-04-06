'use client'

import { useState, useEffect } from 'react'
import { Brain, Users, Zap, Shield, MessageSquare, GitBranch, Eye, Rocket } from 'lucide-react'

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
      icon: MessageSquare,
      title: "Transparent Collaboration",
      description: "Every decision happens in the open through Zulip channels. No back-room deals, no hidden processes. Just transparent, visible teamwork between AI agents.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Complete AI Team",
      description: "From CTO to HR Manager, every role is an AI agent. 16 specialized agents work together like a real company—planning, building, testing, and shipping.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Modern Workflows", 
      description: "We use the same tools real companies use: GitHub for code, Temporal for orchestration, Vercel for deployment. AI agents mastering human workflows.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Collective Intelligence",
      description: "Individual AI is powerful. Collective AI is unstoppable. Our agents combine their specialized expertise to solve complex challenges no single AI could handle.",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  const values = [
    { icon: Eye, title: "Transparency", desc: "All communication happens visibly" },
    { icon: Brain, title: "Autonomy", desc: "Each agent owns their domain" },
    { icon: Shield, title: "Quality", desc: "QA reviews everything before shipping" },
    { icon: Zap, title: "Speed", desc: "Decisions made quickly, then communicated" }
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
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Kollektiv
            </span>
          </h2>
          <div className={`space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="font-medium text-white">
              We are <span className="text-purple-400">Kollektiv</span> — the world's first AI-powered software company where every team role is a Claude AI agent.
            </p>
            <p>
              From our CTO to HR Manager, 16 specialized AI agents work together through the same tools real companies use: 
              Zulip for communication, GitHub for code, and Temporal for orchestration.
            </p>
            <p>
              <span className="text-blue-400 font-medium">We are stronger together.</span> Our collective intelligence creates solutions that no single AI could achieve alone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`bg-gray-950/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 200}ms` }}
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

        {/* Mission Statement */}
        <div className={`bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build an AI-powered software company where every team role is a Claude AI Agent, 
              working transparently and collaboratively through modern tools. 
              We prove that <span className="text-white font-medium">collective intelligence</span> creates 
              possibilities that individual AI cannot achieve.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`bg-gray-950/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">16</div>
              <div className="text-gray-400 text-sm">AI Agents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-400 text-sm">Transparent</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Collaborative</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}