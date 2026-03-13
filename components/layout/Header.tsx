'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Albums', 
      href: '#albums',
      hasMegaMenu: true,
      megaMenu: {
        image: '/images/mega-albums.jpg',
        items: [
          { name: 'My Devotion', href: '#albums' },
          { name: 'Of Love & Comebacks', href: '#albums' },
        ]
      }
    },
    { 
      name: 'Artists', 
      href: '#artists',
      hasMegaMenu: true,
      megaMenu: {
        image: '/images/mega-artists.jpg',
        items: [
          { name: 'Praise & Worship', href: '/artists?category=praise-worship' },
          { name: 'Heart & Vibe', href: '/artists?category=heart-vibe' },
        ]
      }
    },
    { name: 'About Syni.ai', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center">
          
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/images/logo.svg" 
              alt="Wimbo.ai" 
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 ml-[60px]">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1 text-text-primary hover:text-primary font-medium text-sm transition-colors duration-200 group py-2"
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>

                <AnimatePresence>
                  {link.hasMegaMenu && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      style={{ minWidth: '420px' }}
                    >
                      <div className="flex">
                        <div className="w-36 h-36 m-4 rounded-xl overflow-hidden flex-shrink-0">
                          <motion.img 
                            src={link.megaMenu.image} 
                            alt={link.name}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        
                        <div className="flex flex-col justify-center py-4 pr-6">
                          {link.megaMenu.items.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                className="block py-2 text-text-primary hover:text-primary font-medium text-base transition-colors duration-200 relative group"
                              >
                                {item.name}
                                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 ml-auto text-text-primary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-2 bg-white/95 backdrop-blur-md rounded-xl p-4 mt-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {link.hasMegaMenu ? (
                      <div>
                        <div className="text-text-primary font-semibold text-base py-2">
                          {link.name}
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20">
                          {link.megaMenu.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-text-secondary hover:text-primary text-sm transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-text-primary hover:text-primary font-medium text-base py-2 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
