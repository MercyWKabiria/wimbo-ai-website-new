import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

/**
 * Navigation component with mobile menu
 * 
 * @param {Object} props
 * @param {Array} props.menuItems - Menu items array
 * @param {boolean} props.mobileMenuOpen - Mobile menu state
 * @param {function} props.onMobileMenuToggle - Mobile menu toggle handler
 * @param {string} props.className - Additional CSS classes
 */
const Navigation = ({
  menuItems = [],
  mobileMenuOpen = false,
  onMobileMenuToggle,
  className = '',
  ...props
}) => {
  const handleLinkClick = (item) => {
    if (item.onClick) {
      item.onClick()
    }
    if (mobileMenuOpen && onMobileMenuToggle) {
      onMobileMenuToggle()
    }
  }

  return (
    <nav className={`${className}`} {...props}>
      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {menuItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a
              href={item.href}
              onClick={() => handleLinkClick(item)}
              className="nav-link relative text-text-primary hover:text-primary transition-colors duration-150"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
        onClick={onMobileMenuToggle}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6"
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: mobileMenuOpen ? index * 0.1 : 0 }}
            >
              <a
                href={item.href}
                onClick={() => handleLinkClick(item)}
                className="text-xl font-heading font-black text-text-primary hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navigation
