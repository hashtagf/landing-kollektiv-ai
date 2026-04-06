'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * 0.015,
            scale: [1, 1.05, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 4, repeat: Infinity, delay: 1 }
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * -0.01,
            scale: [1, 1.08, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 5, repeat: Infinity, delay: 2 }
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
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
              Kollektiv AI
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transform your business with our revolutionary AI collective. 
            Experience the power of intelligent collaboration that adapts, learns, and evolves with your team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl block"
              >
                Get Started Today
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(96, 165, 250, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link 
                href="#about" 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-2xl text-lg font-semibold transition-colors duration-300 block"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { number: "500+", label: "Companies Transformed", color: "purple" },
              { number: "99.9%", label: "Uptime Guaranteed", color: "blue" },
              { number: "24/7", label: "AI Support", color: "purple" },
              { number: "Enterprise", label: "Security Standards", color: "blue" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-${stat.color}-500/20 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: stat.color === 'purple' ? 'rgba(147, 51, 234, 0.6)' : 'rgba(59, 130, 246, 0.6)',
                  boxShadow: stat.color === 'purple' 
                    ? "0 10px 30px rgba(147, 51, 234, 0.2)" 
                    : "0 10px 30px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className={`text-3xl font-bold text-${stat.color}-400`}
                  variants={pulseVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        animate="animate"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center cursor-pointer"
          whileHover={{ borderColor: "#60A5FA" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}