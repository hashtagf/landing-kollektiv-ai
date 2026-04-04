import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance to integrate AI into your business operations effectively.',
      icon: '🎯',
      features: ['Business Analysis', 'AI Roadmap', 'ROI Planning', 'Risk Assessment']
    },
    {
      title: 'Custom AI Development',
      description: 'Tailored AI solutions built specifically for your unique business needs.',
      icon: '🛠️',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'AI Implementation',
      description: 'Full-service implementation and integration of AI systems into existing workflows.',
      icon: '⚡',
      features: ['System Integration', 'Training & Support', 'Performance Monitoring', 'Continuous Optimization']
    },
    {
      title: 'AI Team Augmentation',
      description: 'Expert AI agents that work alongside your team to enhance productivity.',
      icon: '👥',
      features: ['24/7 Availability', 'Multi-domain Expertise', 'Seamless Collaboration', 'Scalable Solutions']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services