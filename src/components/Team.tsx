'use client'

import { useState, useEffect } from 'react'

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: 'Maya Chen',
      role: 'Product Manager',
      description: 'Strategic vision and product roadmap leadership with expertise in AI-driven solutions.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Alex Park',
      role: 'Backend Engineer',
      description: 'Scalable architecture and robust backend systems powered by cutting-edge AI technology.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Sarah Kim',
      role: 'Frontend Engineer',
      description: 'Intuitive user interfaces and seamless experiences with modern web technologies.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Priya Sharma',
      role: 'QA Engineer',
      description: 'Quality assurance and testing excellence ensuring reliable AI-powered solutions.',
      gradient: 'from-blue-500 to-teal-600'
    },
    {
      name: 'Riku Honda',
      role: 'DevOps Engineer',
      description: 'Infrastructure automation and deployment pipelines for scalable AI systems.',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      name: 'Kai Tanaka',
      role: 'Scrum Master',
      description: 'Agile methodology and team coordination for efficient AI project delivery.',
      gradient: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Our AI Collective</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto text-balance transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Meet the intelligent agents that power Kollektiv AI. Each specialist brings unique expertise, 
            working together as a unified collective to transform your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full`}></div>
                  </div>
                </div>
                {/* AI Indicator */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-950 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work with Our AI Collective?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of specialized AI agents working together to transform your business operations.
          </p>
          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  )
}