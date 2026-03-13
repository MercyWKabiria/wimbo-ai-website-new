'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { albums } from '@/lib/albums'

export default function AlbumsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'gospel' | 'pop'>('all')

  const filteredAlbums = activeCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === activeCategory)

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="font-heading font-black text-[48px] lg:text-[64px] text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Albums
          </motion.h1>
          <motion.p 
            className="text-text-secondary text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Complete projects showcasing the full capabilities of wimbo.ai vocal archetypes across gospel worship and contemporary African pop.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['all', 'gospel', 'pop'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'all' | 'gospel' | 'pop')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All' : category === 'gospel' ? 'Gospel' : 'Pop & Soul'}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/albums/${album.slug}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-[16/10] relative">
                      <Image
                        src={album.image}
                        alt={album.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="font-heading font-bold text-2xl text-text-primary mb-2">
                        {album.title}
                      </h2>
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {album.tagline}
                      </p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-primary font-semibold">{album.trackCount}</span>
                          <span className="text-text-secondary ml-1">Tracks</span>
                        </div>
                        <div>
                          <span className="text-primary font-semibold">{album.artists.length}</span>
                          <span className="text-text-secondary ml-1">Artists</span>
                        </div>
                        <div>
                          <span className="text-primary font-semibold">{album.releaseYear}</span>
                        </div>
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
