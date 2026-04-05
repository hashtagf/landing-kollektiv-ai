'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
    
    alert('Thank you! Your message has been sent. We\'ll get back to you soon.')
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      value: "hello@kollektiv.ai",
      action: "mailto:hello@kollektiv.ai",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our headquarters",
      value: "San Francisco, CA",
      action: "https://maps.google.com",
      gradient: "from-indigo-600 to-purple-600"
    }
  ]

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Start Live Chat",
      description: "Chat with our AI agents now",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo",
      gradient: "from-blue-600 to-cyan-600"
    }
  ]

  return (
    <section id="contact-section" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className={`text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to transform your business with AI? Let's start a conversation about how Kollektiv AI can help.
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <a
                key={index}
                href={method.action}
                className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 group cursor-pointer text-center`}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                <div className={`font-medium bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                  {method.value}
                </div>
              </a>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Quick Actions & Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <button
                    key={index}
                    className={`w-full bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transform transition-all duration-300 text-left group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{action.title}</h4>
                        <p className="text-gray-400 text-sm">{action.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-bold text-white mb-4">Response Time</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email inquiries:</span>
                  <span className="text-blue-400">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone calls:</span>
                  <span className="text-purple-400">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Demo requests:</span>
                  <span className="text-blue-400">Same day</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Support:</span>
                  <span className="text-green-400">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}