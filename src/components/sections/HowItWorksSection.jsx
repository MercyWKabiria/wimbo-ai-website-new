import React from 'react'
import { motion } from 'framer-motion'
import { Music, MessageSquare, FileText, ArrowRight, Play } from 'lucide-react'
import { Container, Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui'

/**
 * How It Works Section with three steps, icons, and CTAs
 */
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Music className="w-8 h-8" />,
      number: '01',
      title: 'Drop Your Song',
      description: 'Submit your original, human-written composition. Any stage — rough demo, arrangement, or concept. We take it from there.',
      features: ['Any format accepted', 'Rough demos welcome', 'Concept to completion']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      number: '02',
      title: 'Hear It Every Way',
      description: '9 AI vocal artists interpret your song across styles, dialects, and emotional registers. Hear Sheng, Swahili, Kikuyu, Luo — find what hits.',
      features: ['9 vocal artists', 'Multiple dialects', 'Style variations']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: '03',
      title: 'Get Your Roadmap',
      description: 'Melody strength, arrangement gaps, market positioning, success patterns — everything you need to go into the studio with confidence.',
      features: ['Melody analysis', 'Market insights', 'Success patterns']
    }
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-background">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Three steps.
            <span className="text-primary"> Zero wasted budget.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Know your song is ready before you step into the studio.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card 
                variant="elevated" 
                hover={true}
                className="h-full group"
              >
                <CardContent className="p-8">
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </motion.div>
                    <span className="text-4xl font-heading font-black text-primary/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <CardHeader className="mb-4">
                    <CardTitle className="text-2xl mb-3">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HowItWorksSection
