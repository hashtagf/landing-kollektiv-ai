'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Database, Cloud, MessageSquare, BarChart3, Cog } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs with cutting-edge machine learning algorithms.",
      features: ["Custom Model Training", "API Integration", "Real-time Processing", "Scalable Architecture"],
      gradient: "from-purple-600 to-blue-600",
      price: "From $5,000/month",
      color: "purple"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics and prediction models.",
      features: ["Predictive Analytics", "Data Visualization", "Pattern Recognition", "Automated Reports"],
      gradient: "from-blue-600 to-indigo-600",
      price: "From $3,000/month",
      color: "blue"
    },
    {
      icon: Cloud,
      title: "Cloud AI Platform",
      description: "Deploy and manage AI workloads at scale with our enterprise-grade cloud infrastructure.",
      features: ["Auto-scaling", "Global CDN", "99.9% Uptime", "Multi-region Deploy"],
      gradient: "from-indigo-600 to-purple-600",
      price: "From $2,000/month",
      color: "indigo"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands context and provides human-like interactions.",
      features: ["Natural Language", "Multi-language", "Context Aware", "Integration Ready"],
      gradient: "from-purple-600 to-pink-600",
      price: "From $1,500/month",
      color: "pink"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced analytics powered by AI to optimize operations and drive strategic decisions.",
      features: ["KPI Tracking", "Trend Analysis", "Forecasting", "ROI Optimization"],
      gradient: "from-blue-600 to-cyan-600",
      price: "From $4,000/month",
      color: "cyan"
    },
    {
      icon: Cog,
      title: "AI Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.",
      features: ["Process Automation", "Workflow Design", "Error Reduction", "Time Savings"],
      gradient: "from-purple-600 to-blue-600",
      price: "From $3,500/month",
      color: "blue"
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -15
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.1
      }
    })
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const iconRotateVariants = {
    initial: { rotate: 0 },
    animate: { 
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(147, 51, 234, 0)" 
    },
    animate: { 
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.1)",
        "0 0 20px rgba(147, 51, 234, 0.3)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      id="services-section" 
      className="py-24 bg-gray-950 relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Interactive Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 8, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: mousePosition.x * -0.008,
            y: mousePosition.y * -0.008,
            scale: [1, 1.05, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 6, repeat: Infinity, delay: 2 }
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Our Services
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            variants={itemVariants}
            whileHover={{ scale: 1.02, color: "#F3F4F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Comprehensive AI solutions designed to transform your business operations and accelerate growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === index
            
            return (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 cursor-pointer group relative overflow-hidden"
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(147, 51, 234, 0.6)",
                  boxShadow: "0 25px 60px rgba(147, 51, 234, 0.2)",
                  y: -10,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon and Title */}
                <div className="mb-6 relative z-10">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg relative`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 10,
                      boxShadow: "0 15px 35px rgba(147, 51, 234, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      variants={iconRotateVariants}
                      animate={isHovered ? "animate" : "initial"}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>
                    
                    {/* Pulse effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.div 
                    className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.price}
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <AnimatePresence>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        custom={featureIndex}
                        variants={featureVariants}
                        initial="hidden"
                        animate={isHovered ? "visible" : "hidden"}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        />
                        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* CTA Button */}
                <motion.button 
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(147, 51, 234, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgba(147, 51, 234, 0.5)",
              boxShadow: "0 30px 60px rgba(147, 51, 234, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {/* Animated background particles */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, #8B5CF6 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, #3B82F6 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 20%, #8B5CF6 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-3xl font-bold text-white mb-4 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Need a Custom Solution?
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10"
              whileHover={{ scale: 1.02, color: "#F3F4F6" }}
            >
              Our team of AI experts can design and implement bespoke solutions tailored to your unique requirements.
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold relative overflow-hidden z-10"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "1rem" }}
              />
              <span className="relative z-10">Contact Our Experts</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}