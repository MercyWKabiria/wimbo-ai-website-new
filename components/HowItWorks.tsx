'use client'

import { Music, MessageCircle, FileText } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Music,
      title: "Drop Your Song",
      description: "Submit your original, human-written composition. Any stage — rough demo, arrangement, or concept. We take it from there."
    },
    {
      icon: MessageCircle,
      title: "Hear It Every Way",
      description: "9 AI vocal artists interpret your song across styles, dialects, and emotional registers. Hear Sheng, Swahili, Kikuyu, Luo — find what hits."
    },
    {
      icon: FileText,
      title: "Get Your Roadmap",
      description: "Melody strength, arrangement gaps, market positioning, success patterns — everything you need to go into the studio with confidence."
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Three steps. Zero wasted budget.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Know your song is ready before you step into the studio.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={index}
                className="text-center space-y-6"
                style={{ '--stagger': index } as React.CSSProperties}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-coral-600" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Get Early Access
          </button>
          <button className="btn-secondary">
            See how it works
          </button>
        </div>
      </div>
    </section>
  )
}
