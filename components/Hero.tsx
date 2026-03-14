'use client'

import { Play, Volume2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-gradient section-padding pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content 1 */}
          <div className="space-y-8">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
              Test first. Release Hits. Every time.
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary max-w-lg">
              Test vocals, dialects, and arrangements with AI vocal artists, before you spend a single shilling in the studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get Early Access
              </button>
              <button className="btn-secondary">
                See how it works
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Sound Wave Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-32 bg-gradient-to-r from-coral-400 to-coral-600 rounded-full blur-xl"></div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Person Image Placeholder */}
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Volume2 className="w-12 h-12" />
                    </div>
                    <p className="text-xl font-medium">Hero Image</p>
                    <p className="text-sm opacity-80">Person with headphones</p>
                  </div>
                </div>

                {/* Floating Music Player Card */}
                <div className="absolute top-8 right-8 w-64 bg-white rounded-xl shadow-card-hover p-4 float-animation">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-coral-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Narben</p>
                      <p className="text-xs text-text-secondary">Afrobeat</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="h-1 bg-neutral-200 rounded-full">
                      <div className="h-1 bg-coral-600 rounded-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-text-secondary mt-1">
                      <span>1:23</span>
                      <span>3:45</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center space-x-4">
                    <button className="p-1 hover:text-coral-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-8a1 1 0 00-1.555-.832L3 9.168V6a1 1 0 00-2 0v8a1 1 0 002 0v-3.168l5.445 4z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-coral-600 text-white rounded-full hover:bg-coral-700 transition-colors">
                      <Play className="w-4 h-4" fill="currentColor" />
                    </button>
                    <button className="p-1 hover:text-coral-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 10.832V14a1 1 0 002 0V6a1 1 0 00-2 0v3.168L4.555 5.168z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
