'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const tabs = [
    { name: 'Test Vocals' },
    { name: 'Dialect Intelligence' },
    { name: 'Advisory Report' },
  ]

  const content = [
    {
      headline: 'Hear your song sung 9 different ways.',
      description: 'Before you commit to a direction, hear how your composition sounds across 9 AI vocal archetypes — soprano to baritone, gospel to secular, contemporary to traditional.',
    },
    {
      headline: 'Authentic dialects, perfect delivery.',
      description: 'Our AI understands the nuances of Sheng, Swahili, Kikuyu, Luo, and more. Get authentic pronunciation and emotional delivery in a language that fits your vision.',
    },
    {
      headline: 'Your roadmap to a hit record.',
      description: 'Receive detailed feedback on melody strength, arrangement opportunities, market positioning, and actionable recommendations to make your song radio-ready.',
    },
  ]

  return (
    <section 
      id="features" 
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#FBF7F2' }}
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <h2 className="font-heading font-black text-[32px] lg:text-[45px] text-text-primary leading-tight mb-4">
            Tools built for how<br />artists actually work.
          </h2>
          <p className="text-lg text-text-secondary">
            Not how music executives think artists work.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-text-primary hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Left - Text Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading font-bold text-[28px] lg:text-[36px] text-text-primary leading-tight mb-4">
                  {content[activeTab].headline}
                </h3>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
                  {content[activeTab].description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.03]">
                    Get Early Access
                  </button>
                  <button className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:scale-[1.03]">
                    See how it works
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - DAW Image */}
          <div className="relative">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/daw-interface.png" 
                alt="Music production interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Decorative shadow/glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl -z-10 blur-2xl opacity-50" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
