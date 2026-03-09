import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, BarChart3, Headphones, Volume2 } from 'lucide-react'
import { Container, Button } from '../ui'

/**
 * Nine Ways Section with DAW interface image
 */
const NineWaysSection = () => {
  return (
    <section id="nine-ways" className="py-20 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hear your song sung
                <span className="text-primary"> 9 different ways.</span>
              </motion.h2>
              
              <motion.p
                className="text-lg md:text-xl text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Before you commit to a direction, hear how your composition sounds across 9 AI vocal archetypes — soprano to baritone, gospel to secular, contemporary to traditional.
              </motion.p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: <Headphones size={20} />, text: '9 Vocal Archetypes' },
                { icon: <Volume2 size={20} />, text: 'Multiple Dialects' },
                { icon: <BarChart3 size={20} />, text: 'Style Variations' },
                { icon: <Play size={20} />, text: 'Instant Preview' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background-light rounded-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <span className="text-text-secondary font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Get Early Access
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={<Play size={20} />}
              >
                See how it works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - DAW Interface */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main DAW Interface */}
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* DAW Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-gray-400 text-sm font-mono">wimbo_daw.pro</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 text-xs">120 BPM</div>
                  <div className="text-gray-400 text-xs">4/4</div>
                </div>
              </div>

              {/* DAW Main Interface */}
              <div className="p-6 space-y-4">
                {/* Track Headers */}
                <div className="flex gap-4">
                  {['Vocal 1', 'Vocal 2', 'Vocal 3', 'Vocal 4'].map((track, index) => (
                    <motion.div
                      key={track}
                      className="flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="bg-gray-800 rounded-lg p-3 mb-2">
                        <div className="text-white text-sm font-medium mb-1">{track}</div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-gray-400 text-xs">Active</span>
                        </div>
                      </div>
                      
                      {/* Waveform Visualization */}
                      <div className="h-20 bg-gray-800 rounded-lg overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 200 80">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <motion.rect
                              key={i}
                              x={i * 5}
                              y={20 + Math.random() * 40}
                              width={3}
                              height={20 + Math.random() * 20}
                              fill="#FF5C35"
                              initial={{ height: 0, y: 40 }}
                              animate={{ 
                                height: 20 + Math.random() * 20, 
                                y: 20 + Math.random() * 40 
                              }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.5 + i * 0.02,
                                repeat: Infinity,
                                repeatType: 'reverse'
                              }}
                            />
                          ))}
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Controls */}
                <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.button
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={20} className="ml-1" />
                    </motion.button>
                    <div className="text-white text-sm font-mono">00:00 / 03:24</div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-gray-400 text-sm">Master: -6dB</div>
                    <div className="text-gray-400 text-sm">9 Tracks</div>
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="grid grid-cols-4 gap-2">
                  {['Soprano', 'Alto', 'Tenor', 'Baritone'].map((voice, index) => (
                    <motion.div
                      key={voice}
                      className="bg-gray-800 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-700 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-sm font-medium">{voice}</div>
                      <div className="text-gray-400 text-xs mt-1">Active</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default NineWaysSection
