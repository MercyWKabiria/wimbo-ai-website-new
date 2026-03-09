import React from 'react'
import { motion } from 'framer-motion'

/**
 * MainLayout wrapper component for consistent page structure
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 */
const MainLayout = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`min-h-screen bg-background ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Skip to content
      </a>

      {/* Main content wrapper */}
      <main id="main-content">
        {children}
      </main>
    </motion.div>
  )
}

/**
 * PageTransition component for animated page transitions
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 */
const PageTransition = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * ScrollToTop component for smooth scroll to top functionality
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full 
        shadow-lg hover:bg-primary-dark transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        z-40
      `}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        transition: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  )
}

/**
 * BackgroundPattern component for decorative backgrounds
 * 
 * @param {Object} props
 * @param {'dots' | 'grid' | 'waves'} props.variant - Pattern type
 * @param {string} props.color - Pattern color
 * @param {string} props.className - Additional CSS classes
 */
const BackgroundPattern = ({ 
  variant = 'dots', 
  color = 'rgba(255, 92, 53, 0.05)', 
  className = '',
  ...props 
}) => {
  const patterns = {
    dots: (
      <div 
        className={`absolute inset-0 ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
        {...props}
      />
    ),
    grid: (
      <div 
        className={`absolute inset-0 ${className}`}
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
        {...props}
      />
    ),
    waves: (
      <svg 
        className={`absolute inset-0 w-full h-full ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <pattern
            id="waves"
            x="0"
            y="0"
            width="100"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 10 Q25 0 50 10 T100 10"
              stroke={color}
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    )
  }

  return patterns[variant] || patterns.dots
}

export { MainLayout, PageTransition, ScrollToTop, BackgroundPattern }
export default MainLayout
