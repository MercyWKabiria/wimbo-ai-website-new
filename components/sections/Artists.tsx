'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Artists() {
  const [activeFilter, setActiveFilter] = useState('praise')
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth || 400
      const gap = 24
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      })
    }
  }

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = Math.min(artists.length - 1, currentIndex + 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth || 400
      const gap = 24
      const scrollLeft = carouselRef.current.scrollLeft
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      id="artists" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6">
        
        {/* Header - Two columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8">
          <motion.h2 
            className="font-heading font-black text-[32px] lg:text-[45px] text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            Nine voices.<br />
            Infinite variations.
          </motion.h2>

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

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Left Arrow - Always visible if not at start */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-200 ${
              currentIndex === 0 
                ? 'opacity-40 cursor-not-allowed' 
                : 'hover:scale-110 hover:shadow-xl cursor-pointer'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Right Arrow - Always visible if not at end */}
          <button
            onClick={handleNext}
            disabled={currentIndex === artists.length - 1}
            className={`absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-200 ${
              currentIndex === artists.length - 1 
                ? 'opacity-40 cursor-not-allowed' 
                : 'hover:scale-110 hover:shadow-xl cursor-pointer'
            }`}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Artist Cards Carousel */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-8 lg:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] snap-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <div className="group border-2 border-white/30 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-white/60 hover:shadow-2xl cursor-pointer h-full bg-primary/20 backdrop-blur-sm">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-bold text-[22px] lg:text-[24px] text-white mb-2">
                    {artist.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/85 text-sm leading-relaxed mb-4">
                    {artist.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {artist.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 border border-white rounded-full text-white text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {artists.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  scrollToIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
