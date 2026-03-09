import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Container, Button } from '../ui'

/**
 * Albums Section with two side-by-side album features
 */
const AlbumsSection = () => {
  const albums = [
    {
      id: 1,
      title: 'My Devotion',
      description: 'A praise and worship album rooted in surrender. Songs built for the moments when words run out and all you have left is a lifted hand.',
      backgroundImage: '/api/placeholder/800/600',
      overlay: 'dark',
      buttonVariant: 'secondary',
      buttonStyle: 'border-white text-white hover:bg-white hover:text-text-primary'
    },
    {
      id: 2,
      title: 'Of Love & Comebacks',
      description: 'A record about the push and pull of relationships — falling in, falling apart, and finding your way back. Raw, honest, and deeply human.',
      backgroundImage: '/api/placeholder/800/600',
      overlay: 'warm',
      buttonVariant: 'secondary',
      buttonStyle: 'border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
    }
  ]

  return (
    <section id="albums" className="py-20 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${album.backgroundImage})` }}
              />

              {/* Overlay */}
              <motion.div
                className={`
                  absolute inset-0 transition-all duration-500
                  ${album.overlay === 'dark' 
                    ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                    : 'bg-gradient-to-t from-primary/80 via-primary/40 to-transparent'
                  }
                  group-hover:from-black/90 group-hover:via-black/50
                `}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {/* Album Title */}
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
                    {album.title}
                  </h3>

                  {/* Album Description */}
                  <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-lg">
                    {album.description}
                  </p>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant={album.buttonVariant}
                      size="lg"
                      icon={<Play size={20} />}
                      className={album.buttonStyle}
                    >
                      Listen to the Album
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.2, rotate: 180 }}
              >
                <Play size={20} className="text-white ml-1" />
              </motion.div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AlbumsSection
