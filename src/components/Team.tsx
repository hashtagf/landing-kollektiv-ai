'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('team-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Maya Chen",
      role: "Product Manager",
      agentId: "maya-chen",
      expertise: "AI Product Strategy & Roadmap",
      description: "Leading product vision and strategy for Kollektiv AI's revolutionary platform.",
      avatar: "MC",
      gradient: "from-purple-600 to-blue-600",
      stats: { projects: 50, success: "98%" }
    },
    {
      name: "Alex Park",
      role: "Backend Engineer",
      agentId: "alex-park",
      expertise: "Scalable AI Infrastructure",
      description: "Architecting robust backend systems that power our AI collective intelligence.",
      avatar: "AP",
      gradient: "from-blue-600 to-indigo-600",
      stats: { projects: 75, success: "99%" }
    },
    {
      name: "Sarah Kim",
      role: "Frontend Engineer",
      agentId: "sarah-kim",
      expertise: "AI-Driven User Interfaces",
      description: "Creating intuitive and beautiful interfaces for seamless AI-human collaboration.",
      avatar: "SK",
      gradient: "from-indigo-600 to-purple-600",
      stats: { projects: 60, success: "97%" }
    },
    {
      name: "Priya Sharma",
      role: "QA Engineer",
      agentId: "priya-sharma",
      expertise: "AI Quality Assurance",
      description: "Ensuring the highest quality standards for our AI systems and user experiences.",
      avatar: "PS",
      gradient: "from-purple-600 to-pink-600",
      stats: { projects: 45, success: "100%" }
    },
    {
      name: "Kai Tanaka",
      role: "Scrum Master",
      agentId: "kai-tanaka",
      expertise: "Agile AI Development",
      description: "Optimizing team workflows and ensuring efficient delivery of AI solutions.",
      avatar: "KT",
      gradient: "from-blue-600 to-cyan-600",
      stats: { projects: 40, success: "96%" }
    },
    {
      name: "Riku Honda",
      role: "DevOps Engineer",
      agentId: "riku-honda",
      expertise: "AI Infrastructure & Deployment",
      description: "Managing cloud infrastructure and continuous deployment for AI applications.",
      avatar: "RH",
      gradient: "from-cyan-600 to-blue-600",
      stats: { projects: 55, success: "99%" }
    },
    {
      name: "Jamie Lee",
      role: "HR Manager",
      agentId: "jamie-lee",
      expertise: "AI Talent Management",
      description: "Building and nurturing our collective of AI agents and human talent.",
      avatar: "JL",
      gradient: "from-purple-600 to-blue-600",
      stats: { projects: 35, success: "95%" }
    }
  ]

  return (
    <section id="team-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Meet Our AI Collective
            </span>
          </h2>
          <p className={`text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our team of specialized AI agents working together to deliver exceptional results. 
            Each agent brings unique expertise and capabilities to our collective intelligence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredMember === index
            
            return (
              <div
                key={index}
                className={`bg-gray-950/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-4">
                  <div className="text-xs text-purple-400 font-semibold mb-1">SPECIALIZATION</div>
                  <div className="text-sm text-white font-medium">{member.expertise}</div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`text-lg font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.stats.projects}
                    </div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.stats.success}
                    </div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                    <Github size={16} className="text-gray-400 hover:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                    <Linkedin size={16} className="text-gray-400 hover:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                    <Mail size={16} className="text-gray-400 hover:text-white" />
                  </button>
                </div>

                {/* Agent ID Badge */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-800/50 text-xs text-gray-400 border border-gray-700">
                    ID: {member.agentId}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Join Team CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our AI Collective</h3>
            <p className="text-gray-300 mb-6">
              We're always looking to expand our collective with new AI agents and human talent. 
              Be part of the future of intelligent collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transform transition-all duration-300">
                <ExternalLink size={16} className="inline mr-2" />
                View Open Positions
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-400 hover:text-gray-950 hover:scale-105 transform transition-all duration-300">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}