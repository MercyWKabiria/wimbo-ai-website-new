'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function Albums() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const albums = [
    {
      title: 'My Devotion',
      description: 'A praise and worship album rooted in surrender. Songs built for the moments when words run out and all you have left is a lifted hand.',
      image: '/images/album-devotion.jpg',
      gradient: 'from-purple-600/90 via-purple-600/50 to-transparent',
      hoverBg: 'hover:bg-purple-700',
    },
    {
      title: 'Of Love & Comebacks',
      description: 'A record about the push and pull of relationships — falling in, falling apart, and finding your way back. Raw, honest, and deeply human.',
      image: '/images/album-love.jpg',
      gradient: 'from-orange-500/90 via-orange-500/50 to-transparent',
      hoverBg: 'hover:bg-orange-600',
    },
  ]

  return (
    <section id="albums" ref={ref} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {albums.map((album, index) => (
          <motion.div
            key={album.title}
            className="relative min-h-[100vh] md:min-h-[100vh] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${album.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${album.gradient}`} />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <h3 className="font-heading font-bold text-[32px] text-white mb-4">
                {album.title}
              </h3>
              
              <p className="text-white/90 text-base leading-relaxed mb-6 max-w-md">
                {album.description}
              </p>
              
              <div>
                <Link href={`/albums/${album.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/of\s+/g, '').replace(/&\s+/g, 'and').replace(/[^a-zA-Z0-9]/g, '')}`}>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-gray-900">
                    Listen to Album
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
