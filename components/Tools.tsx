'use client'

import { useState } from 'react'

export default function Tools() {
  const [activeTool, setActiveTool] = useState('vocals')

  const tools = [
    { id: 'vocals', name: 'Test Vocals' },
    { id: 'dialect', name: 'Dialect Intelligence' },
    { id: 'report', name: 'Advisory Report' }
  ]

  const toolContent = {
    vocals: {
      title: "Test Your Vocals Before Studio Time",
      description: "Hear how different AI vocal artists interpret your song. Find the perfect voice, range, and emotional tone before investing in expensive studio sessions.",
      features: [
        "9 AI vocal artists with unique characteristics",
        "Multiple emotional registers and styles",
        "Real-time vocal testing and comparison",
        "Export-ready vocal samples"
      ]
    },
    dialect: {
      title: "Master East African Dialects",
      description: "Test your lyrics in authentic East African dialects. From Sheng street slang to traditional Swahili, ensure your message resonates with your target audience.",
      features: [
        "Sheng, Swahili, Kikuyu, Luo dialects",
        "Cultural context and pronunciation guides",
        "Regional dialect variations",
        "Audience reach analysis"
      ]
    },
    report: {
      title: "Get Your Music Roadmap",
      description: "Comprehensive analysis of your song's potential. Melody strength, arrangement gaps, market positioning, and success patterns.",
      features: [
        "Melody and harmony analysis",
        "Market positioning insights",
        "Arrangement optimization suggestions",
        "Success pattern matching"
      ]
    }
  }

  const currentContent = toolContent[activeTool as keyof typeof toolContent]

  return (
    <section id="tools" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Tools built for how artists actually work.
          </h2>
          <p className="text-lg text-text-secondary">
            Not how music executives think artists work.
          </p>
        </div>

        {/* Tool Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 rounded-full p-1">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`filter-tab ${
                  activeTool === tool.id 
                    ? 'filter-tab-active' 
                    : 'filter-tab-inactive'
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tool Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-coral-50 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              {/* Title and Description */}
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {currentContent.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3"
                    style={{ '--stagger': index } as React.CSSProperties}
                  >
                    <div className="w-6 h-6 bg-coral-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-text-secondary">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center lg:text-left">
                <button className="btn-primary">
                  Try This Tool
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
