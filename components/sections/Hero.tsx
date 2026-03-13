'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient - FIXED */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at 80% 100%, #FFF0EC 19%, #FBF7F2 57%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 
              className={`font-heading font-black text-[48px] lg:text-[80px] text-text-primary leading-[1.1] transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Test first.<br />
              Release Hits.<br />
              Every time.
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-lg text-text-secondary max-w-[450px] leading-relaxed transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Test vocals, dialects, and arrangements AI vocal artists, before you spend a single shilling in the studio.
            </p>

            {/* CTA Buttons - HORIZONTAL */}
            <div 
              className={`flex flex-row flex-wrap gap-4 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
                Get Early Access
              </button>
              <button className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:scale-[1.03]">
                See how it works
              </button>
            </div>

            {/* Social Proof Row */}
            <div 
              className={`flex items-center gap-3 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex -space-x-3">
                <img src="/images/avatar-1.png" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-2.png" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-3.png" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/images/avatar-4.png" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <span className="font-medium text-text-primary">5+ AI Vocal Artists</span>
            </div>
          </div>

          {/* RIGHT COLUMN - Image Composition */}
          <div className="relative w-full h-[500px] lg:h-[700px]">
            
            {/* Woman in green suit - Top right, starts from very top */}
            <div className="absolute -top-16 lg:-top-20 right-0 lg:-right-8 z-30">
              <img 
                src="/images/hero-woman.png" 
                alt="Artist"
                className="w-40 sm:w-48 lg:w-64 xl:w-72 h-auto object-contain"
              />
            </div>
            
            {/* Music Player Card - Overlaps woman, upper left area */}
            <div className="absolute top-20 lg:top-28 right-[15%] lg:right-[20%] z-40 animate-float">
              <img 
                src="/images/music-player.png" 
                alt="Music Player"
                className="w-36 sm:w-44 lg:w-56 h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Purple Arch - Center, behind the man */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10"
              style={{
                width: 'clamp(200px, 45vw, 320px)',
                height: 'clamp(300px, 55vw, 450px)',
                background: 'linear-gradient(180deg, #8B89E8 0%, #6366F1 100%)',
                borderRadius: '160px 160px 0 0',
              }}
            />
            
            {/* Man in purple hoodie - In front of arch, bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20">
              <img 
                src="/images/hero-man.png" 
                alt="Artist"
                className="w-48 sm:w-56 lg:w-72 xl:w-80 h-auto object-contain"
              />
            </div>
            
            {/* Waveform - Bottom, extends right */}
            <div className="absolute bottom-16 lg:bottom-20 left-1/3 z-30">
              <img 
                src="/images/waveform.svg" 
                alt="Waveform"
                className="w-48 sm:w-64 lg:w-80 h-auto"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
