import React from 'react'
import { motion } from 'framer-motion'
import { Music, Play, ArrowRight } from 'lucide-react'
import { Container, Button, MusicPlayer } from '../ui'

/**
 * Hero Section with headline, sub-headline, CTA buttons, floating music player, and sound wave graphic
 */
const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>

      {/* Sound Wave Graphic - Background */}
      <motion.div
        className="absolute right-0 top-1/2 transform translate-x-0 translate-y-[-50%] w-96 h-96 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <g transform="translate(200, 200)">
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 0,${-150 + i * 25} Q ${50 + i * 8},${-140 + i * 25} ${100 + i * 16},${-150 + i * 25}`}
                stroke="#FF5C35"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Test first.
              <br />
              <span className="text-primary">Release Hits.</span>
              <br />
              Every time.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Test vocals, dialects, and arrangements with AI vocal artists, before you spend a single shilling in the studio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* Right Content - Image and Music Player */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Person Image */}
            <div className="relative">
              <motion.img
                src="/api/placeholder/600/700"
                alt="Person with headphones enjoying music"
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Floating Music Player Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 right-8 md:right-auto md:w-80"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <MusicPlayer
                  artist="Narben"
                  title="Afrobeat"
                  albumArt="/api/placeholder/60/60"
                  isPlaying={true}
                  progress={45}
                  duration={210}
                  currentTime={94}
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-text-secondary/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
