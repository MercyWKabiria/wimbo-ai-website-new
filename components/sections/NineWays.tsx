'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NineWays() {
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    { icon: '🎵', title: 'Melody Strength Analysis', description: "AI-powered analysis of your song's melodic structure, hook potential, and memorability factors." },
    { icon: '🎼', title: 'Arrangement Optimization', description: 'Get intelligent suggestions for instrumentation, layering, and structural improvements to enhance your production.' },
    { icon: '📊', title: 'Market Positioning', description: 'Understand where your song fits in current music landscape and identify target audience opportunities.' },
    { icon: '🎧', title: 'Genre Compatibility', description: 'Check how your track performs across different genres and streaming platforms with genre-specific scoring.' },
    { icon: '🎤', title: 'Vocal Range Mapping', description: 'Discover optimal vocal ranges and emotional delivery methods for your specific song style and message.' },
    { icon: '🔧', title: 'Production Readiness', description: "Comprehensive assessment of your song's technical quality and commercial viability before release." },
    { icon: '👥', title: 'Audience Engagement', description: 'Predict listener engagement patterns and social media virality potential based on sonic characteristics.' },
    { icon: '💰', title: 'Revenue Potential', description: 'Forecast streaming royalties, licensing opportunities, and monetization strategies for your music.' },
    { icon: '📈', title: 'Trend Alignment', description: 'Align your sound with current market trends and emerging musical movements for maximum relevance.' },
  ]

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 280
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="nine-ways" 
      ref={ref}
      className="py-20 lg:py-32 overflow-hidden"
      style={{ background: '#FFF0EC' }}
    >
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-[28px] lg:text-[42px] text-text-primary leading-tight mb-4">
            Nine ways to turn your<br className="hidden sm:block" /> song into a hit.
          </h2>
          <p className="text-text-secondary text-lg">
            AI-powered insights that transform your music from good to great.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-4 -mx-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex-shrink-0 w-[260px] snap-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 3) }}
              >
                <div className="bg-white rounded-2xl p-5 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <h3 className="font-heading font-bold text-base text-text-primary leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className="w-2 h-2 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
