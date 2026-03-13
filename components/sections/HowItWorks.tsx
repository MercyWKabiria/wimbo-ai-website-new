'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      id="how-it-works" 
      ref={ref}
      className="py-32 lg:py-40"
      style={{ background: '#FBF7F2' }}
    >
      <div className="container mx-auto px-6">
        
        {/* Headline */}
        <motion.div 
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-[32px] lg:text-[45px] text-text-primary leading-tight mb-6">
            Three steps.<br />
            Zero wasted budget.
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary">
            Know your song is ready before you step into the studio.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between relative px-16">
              
              {/* Connecting Gradient Lines - positioned at vertical center of circles */}
              <div className="absolute top-[50px] left-[calc(16.67%+50px)] right-[calc(16.67%+50px)] flex z-0">
                {/* Line 1: Step 1 to Step 2 - Gradient */}
                <motion.div 
                  className="flex-1 h-[2px] origin-left mr-[50px]"
                  style={{
                    background: 'linear-gradient(90deg, #FF5C35 100%, #FFB8A8 50%, #FF5C35 0%)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Line 2: Step 2 to Step 3 - Gradient */}
                <motion.div 
                  className="flex-1 h-[2px] origin-left mr-[50px]"
                  style={{
                    background: 'linear-gradient(90deg, #FF5C35 100%, #FFB8A8 50%, #FF5C35 0%)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>

              {/* Step 1 - Drop Your Song */}
              <motion.div 
                className="flex flex-col items-center text-center w-1/3 relative z-10 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="w-[100px] h-[100px] rounded-full border-2 border-primary bg-[#FBF7F2] flex items-center justify-center mb-8 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <img src="/images/icon-drop-song.svg" alt="" className="w-9 h-9" />
                </div>
                <h3 className="font-heading font-bold text-[25px] text-text-primary mb-4">Drop Your Song</h3>
                <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                  Submit your original, human-written composition. Any stage — rough demo, arrangement, or concept. We take it from there.
                </p>
              </motion.div>

              {/* Step 2 - Hear It Every Way */}
              <motion.div 
                className="flex flex-col items-center text-center w-1/3 relative z-10 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-[100px] h-[100px] rounded-full bg-primary flex items-center justify-center mb-6">
                  <img src="/images/icon-hear-it.svg" alt="" className="w-9 h-9" />
                </div>
                <h3 className="font-heading font-bold text-[25px] text-text-primary mb-4">Hear It Every Way</h3>
                <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                  9 AI vocal artists interpret your song across styles, dialects, and emotional registers. Hear Sheng, Swahili, Kikuyu, Luo — find what hits.
                </p>
              </motion.div>

              {/* Step 3 - Get Your Roadmap */}
              <motion.div 
                className="flex flex-col items-center text-center w-1/3 relative z-10 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-[100px] h-[100px] rounded-full border-2 border-primary bg-[#FBF7F2] flex items-center justify-center mb-8 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <img src="/images/icon-roadmap.svg" alt="" className="w-9 h-9" />
                </div>
                <h3 className="font-heading font-bold text-[25px] text-text-primary mb-4">Get Your Roadmap</h3>
                <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                  Melody strength, arrangement gaps, market positioning, success pathway — everything you need to go into the studio with confidence.
                </p>
              </motion.div>

            </div>
          </div>

          {/* MOBILE LAYOUT - Stacked, no lines */}
          <div className="lg:hidden space-y-16">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="w-[90px] h-[90px] rounded-full border-2 border-primary bg-[#FBF7F2] flex items-center justify-center mb-6">
                <img src="/images/icon-drop-song.svg" alt="" className="w-9 h-9" />
              </div>
              <h3 className="font-heading font-bold text-[22px] text-text-primary mb-3">Drop Your Song</h3>
              <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                Submit your original, human-written composition. Any stage — rough demo, arrangement, or concept. We take it from there.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-[90px] h-[90px] rounded-full bg-primary flex items-center justify-center mb-6">
                <img src="/images/icon-hear-it.svg" alt="" className="w-9 h-9" />
              </div>
              <h3 className="font-heading font-bold text-[22px] text-text-primary mb-3">Hear It Every Way</h3>
              <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                9 AI vocal artists interpret your song across styles, dialects, and emotional registers. Hear Sheng, Swahili, Kikuyu, Luo — find what hits.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-[90px] h-[90px] rounded-full border-2 border-primary bg-[#FBF7F2] flex items-center justify-center mb-6">
                <img src="/images/icon-roadmap.svg" alt="" className="w-9 h-9" />
              </div>
              <h3 className="font-heading font-bold text-[22px] text-text-primary mb-3">Get Your Roadmap</h3>
              <p className="text-text-secondary text-base max-w-[320px] leading-relaxed">
                Melody strength, arrangement gaps, market positioning, success pathway — everything you need to go into the studio with confidence.
              </p>
            </motion.div>
          </div>

        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
            Get Early Access
          </button>
          <button className="w-full sm:w-auto border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:scale-[1.03]">
            See how it works
          </button>
        </motion.div>

      </div>
    </section>
  )
}
