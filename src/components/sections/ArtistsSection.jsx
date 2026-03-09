import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Card, CardContent, CardHeader, CardTitle, CardDescription, FilterToggle, Tag } from '../ui'

/**
 * Artists Section with coral background, filter tabs, and artist cards
 */
const ArtistsSection = () => {
  const [activeFilter, setActiveFilter] = useState('praise')

  const filterOptions = [
    { value: 'praise', label: 'Praise & Worship' },
    { value: 'heart', label: 'Heart & Vibe' }
  ]

  const artists = {
    praise: [
      {
        id: 1,
        name: 'Lenase Tendi',
        image: '/api/placeholder/300/400',
        description: 'A warm soprano archetype optimized for contemporary gospel and worship contexts.',
        tags: ['Soprano', 'Swahili', 'Worship'],
        rotation: -2
      },
      {
        id: 2,
        name: 'Janiel Mate',
        image: '/api/placeholder/300/400',
        description: 'A warm soprano archetype optimized for contemporary gospel and worship contexts.',
        tags: ['Soprano', 'Swahili', 'Worship'],
        rotation: 1
      },
      {
        id: 3,
        name: 'Jiroh Malaka',
        image: '/api/placeholder/300/400',
        description: 'A warm soprano archetype optimized for contemporary gospel and worship contexts.',
        tags: ['Soprano', 'Worship'],
        rotation: -1
      }
    ],
    heart: [
      {
        id: 4,
        name: 'Amara Soul',
        image: '/api/placeholder/300/400',
        description: 'A soulful alto voice perfect for R&B and Afro-soul expressions.',
        tags: ['Alto', 'Soul', 'R&B'],
        rotation: 2
      },
      {
        id: 5,
        name: 'Kael Vibe',
        image: '/api/placeholder/300/400',
        description: 'A versatile tenor voice that captures the essence of modern Afrobeat.',
        tags: ['Tenor', 'Afrobeat', 'Modern'],
        rotation: -2
      },
      {
        id: 6,
        name: 'Luna Heart',
        image: '/api/placeholder/300/400',
        description: 'A melodic mezzo-soprano ideal for love songs and emotional ballads.',
        tags: ['Mezzo-Soprano', 'Ballads', 'Love'],
        rotation: 1
      }
    ]
  }

  const currentArtists = artists[activeFilter] || artists.praise

  return (
    <section id="artists" className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nine voices.
            <span className="text-white/90"> Infinite variations.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Each vocal artist is designed for specific East African music contexts — from Nairobi gospel stages to Afrobeat studio sessions.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FilterToggle
            options={filterOptions}
            activeOption={activeFilter}
            onChange={setActiveFilter}
            className="bg-white/20 backdrop-blur-sm"
          />
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: artist.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ rotate: 0, y: -5 }}
            >
              <Card 
                variant="default" 
                hover={true}
                className="h-full bg-white overflow-hidden group"
                style={{ transform: `rotate(${artist.rotation}deg)` }}
              >
                {/* Artist Image with Border Accent */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Coral Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <CardContent className="p-6">
                  {/* Artist Name */}
                  <CardHeader className="mb-4">
                    <CardTitle className="text-2xl text-text-primary">
                      {artist.name}
                    </CardTitle>
                  </CardHeader>

                  {/* Artist Description */}
                  <CardDescription className="text-text-secondary mb-6">
                    {artist.description}
                  </CardDescription>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {artist.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + tagIndex * 0.1 }}
                      >
                        <Tag className="bg-background-light text-text-secondary text-sm">
                          {tag}
                        </Tag>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ArtistsSection
