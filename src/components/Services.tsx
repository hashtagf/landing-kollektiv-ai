'use client'

import { useState, useEffect } from 'react'
import { Code, Database, Cloud, MessageSquare, BarChart3, Cog } from 'lucide-react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs with cutting-edge machine learning algorithms.",
      features: ["Custom Model Training", "API Integration", "Real-time Processing", "Scalable Architecture"],
      gradient: "from-purple-600 to-blue-600",
      price: "From $5,000/month"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics and prediction models.",
      features: ["Predictive Analytics", "Data Visualization", "Pattern Recognition", "Automated Reports"],
      gradient: "from-blue-600 to-indigo-600",
      price: "From $3,000/month"
    },
    {
      icon: Cloud,
      title: "Cloud AI Platform",
      description: "Deploy and manage AI workloads at scale with our enterprise-grade cloud infrastructure.",
      features: ["Auto-scaling", "Global CDN", "99.9% Uptime", "Multi-region Deploy"],
      gradient: "from-indigo-600 to-purple-600",
      price: "From $2,000/month"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands context and provides human-like interactions.",
      features: ["Natural Language", "Multi-language", "Context Aware", "Integration Ready"],
      gradient: "from-purple-600 to-pink-600",
      price: "From $1,500/month"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced analytics powered by AI to optimize operations and drive strategic decisions.",
      features: ["KPI Tracking", "Trend Analysis", "Forecasting", "ROI Optimization"],
      gradient: "from-blue-600 to-cyan-600",
      price: "From $4,000/month"
    },
    {
      icon: Cog,
      title: "AI Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.",
      features: ["Process Automation", "Workflow Design", "Error Reduction", "Time Savings"],
      gradient: "from-purple-600 to-blue-600",
      price: "From $3,500/month"
    }
  ]

  return (
    <section id="services-section" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className={`text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive AI solutions designed to transform your business operations and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === index
            
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300`}>
                    Get Started
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of AI experts can design and implement bespoke solutions tailored to your unique requirements.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}