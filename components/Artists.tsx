'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Artists() {
  const [activeFilter, setActiveFilter] = useState('praise')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const artists = [
    {
      name: 'Lenase Tendi',
      image: '/images/artist-lenase.png',
      description: 'A warm soprano archetype optimised for contemporary gospel and worship contexts.',
      tags: ['Soprano', 'Swahili', 'Worship'],
    },
    {
      name: 'Janiel Mate',
      image: '/images/artist-janiel.png',
      description: 'A warm soprano archetype optimised for contemporary gospel and worship contexts.',
      tags: ['Soprano', 'Swahili', 'Worship'],
    },
    {
      name: 'Jiroh Malaka',
      image: '/images/artist-jiroh.png',
      description: 'A warm soprano archetype optimised for contemporary gospel and worship contexts.',
      tags: ['Soprano', 'Swahili', 'Worship'],
    },
  ]

  return (
    <section 
      id="artists" 
      ref={ref}
      className="py-24 lg:py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Header - Two columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8">
          {/* Left - Headline */}
          <motion.h2 
            className="font-heading font-black text-[32px] lg:text-[45px] text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            Nine voices.<br />
            Infinite variations.
          </motion.h2>

          {/* Right - Subtext */}
          <motion.p 
            className="text-lg text-white/90 max-w-[400px] lg:text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each vocal artist is designed for specific East African music contexts — from Nairobi gospel stages to Afrobeat studio sessions.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex bg-white rounded-full p-1">
            <button
              onClick={() => setActiveFilter('praise')}
              className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                activeFilter === 'praise'
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-text-primary hover:bg-gray-100'
              }`}
            >
              Praise & Worship
            </button>
            <button
              onClick={() => setActiveFilter('vibe')}
              className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                activeFilter === 'vibe'
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-text-primary hover:bg-gray-100'
              }`}
            >
              Heart & Vibe
            </button>
          </div>
        </motion.div>

        {/* Artist Cards Carousel */}
        <div className="relative">
          <div 
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                className="flex-shrink-0 w-[320px] lg:w-[380px] snap-start"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <div className="group border-2 border-white/30 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-white/60 hover:shadow-2xl cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-5">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-bold text-[28px] text-white mb-2">
                    {artist.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/85 text-base leading-relaxed mb-4">
                    {artist.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {artist.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-4 py-2 border border-white rounded-full text-white text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
