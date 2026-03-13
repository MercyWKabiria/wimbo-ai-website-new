'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { artists } from '@/lib/artists'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ArtistsPage() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<'all' | 'praise-worship' | 'heart-vibe'>('all')

  useEffect(() => {
    const category = searchParams.get('category') as 'praise-worship' | 'heart-vibe'
    if (category === 'praise-worship' || category === 'heart-vibe') {
      setActiveCategory(category)
    }
  }, [searchParams])

  const filteredArtists = activeCategory === 'all' 
    ? artists 
    : artists.filter(artist => artist.category === activeCategory)

  return (
    <main className="min-h-screen" style={{ background: '#FBF7F2' }}>
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          
          {/* Page Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-black text-[40px] lg:text-[56px] text-primary leading-tight mb-4">
              {activeCategory === 'praise-worship' && 'Praise & Worship'}
              {activeCategory === 'heart-vibe' && 'Heart & Vibe'}
              {activeCategory === 'all' && 'All Artists'}
            </h1>
            
            {/* Category Tabs */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-primary hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCategory('praise-worship')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'praise-worship'
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-primary hover:bg-gray-100'
                }`}
              >
                Praise & Worship
              </button>
              <button
                onClick={() => setActiveCategory('heart-vibe')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'heart-vibe'
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-primary hover:bg-gray-100'
                }`}
              >
                Heart & Vibe
              </button>
            </div>
          </motion.div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/artists/${artist.slug}`}>
                  <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-2xl text-primary mb-2">
                        {artist.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {artist.tagline}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {artist.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
