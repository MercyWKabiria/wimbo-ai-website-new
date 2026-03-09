import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Container, Button, Input } from '../ui'

/**
 * Final CTA Section with coral gradient background and watermark
 */
const FinalCTASection = () => {
  return (
    <section id="final-cta" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary/90" />
      
      {/* Large Watermark Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white transform -rotate-6">
          WIMBO.AI
        </h1>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your next hit
            <span className="block text-white/90">starts here.</span>
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join selected artists, songwriters, and producers for early access to East Africa's first AI music pre-production studio.
          </motion.p>

          {/* Email Signup Form */}
          <motion.div
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-white/60 focus:border-white focus:bg-white/30"
              />
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark"
              >
                Get Early Access
              </Button>
            </div>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '500+', label: 'Artists Waiting' },
              { number: '1000+', label: 'Songs Tested' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>hello@wimbo.ai</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <span>Nairobi, Kenya</span>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTASection
