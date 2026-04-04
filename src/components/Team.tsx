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
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-gradient">Our AI Collective</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto text-balance transition-all duration-1000 delay-300 ${
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
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full`}></div>
                  </div>
                </div>
                {/* AI Indicator */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the power of our AI collective? 
            Let's discuss how we can transform your business together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Your Transformation
            </a>
            <a href="#services" className="btn btn-outline text-lg px-8 py-4 transform hover:-translate-y-1">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}