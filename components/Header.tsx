'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
              </svg>
            </div>
            <span className="font-serif text-xl font-bold text-text-primary">wimbo.ai</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">How It Works</a>
            <a href="#artists" className="text-text-secondary hover:text-text-primary transition-colors">The Artists</a>
            <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">About Syni.ai</a>
            <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">How It Works</a>
              <a href="#artists" className="text-text-secondary hover:text-text-primary transition-colors">The Artists</a>
              <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">About Syni.ai</a>
              <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
