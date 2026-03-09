import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Menu, X } from 'lucide-react'
import { Navigation, Container, Button } from '../ui'
import { scrollToElement } from '../../utils/helpers'

/**
 * Header component with sticky navigation and mobile menu
 * 
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 */
const Header = ({ className = '', ...props }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Menu items configuration
  const menuItems = [
    {
      label: 'How It Works',
      href: '#how-it-works',
      onClick: () => scrollToElement('how-it-works')
    },
    {
      label: 'The Artists',
      href: '#artists',
      onClick: () => scrollToElement('artists')
    },
    {
      label: 'About Syni.ai',
      href: '#about',
      onClick: () => scrollToElement('about')
    },
    {
      label: 'Contact',
      href: '#contact',
      onClick: () => scrollToElement('contact')
    }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden'
  }

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300
          ${isScrolled ? 'shadow-lg' : 'shadow-none'}
          ${className}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        {...props}
      >
        <Container>
          <div className="flex items-center justify-between h-header">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Music size={18} className="text-white" />
              </div>
              <span className="font-heading font-black text-xl text-text-primary">
                wimbo.ai
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <Navigation 
              menuItems={menuItems}
              className="hidden md:block"
            />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-dark/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Music size={18} className="text-white" />
                  </div>
                  <span className="font-heading font-black text-xl text-text-primary">
                    wimbo.ai
                  </span>
                </div>
                <button
                  className="p-2 text-text-primary hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="p-6">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          item.onClick()
                          toggleMobileMenu()
                        }}
                        className="block text-lg font-heading font-black text-text-primary hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">
                  <Button 
                    variant="primary" 
                    fullWidth 
                    onClick={toggleMobileMenu}
                  >
                    Get Early Access
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header spacer */}
      <div className="h-header" />
    </>
  )
}

export default Header
