import React from 'react'
import { motion } from 'framer-motion'

/**
 * Card component with hover effects and multiple variants
 * 
 * @param {Object} props
 * @param {'default' | 'bordered' | 'elevated' | 'glass'} props.variant - Card style variant
 * @param {'sm' | 'md' | 'lg'} props.padding - Card padding
 * @param {boolean} props.hover - Enable hover effects
 * @param {boolean} props.interactive - Make card clickable
 * @param {React.ReactNode} props.children - Card content
 * @param {function} props.onClick - Click handler for interactive cards
 * @param {string} props.className - Additional CSS classes
 */
const Card = ({
  variant = 'default',
  padding = 'md',
  hover = true,
  interactive = false,
  children,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-card transition-all duration-250'
  
  const variantClasses = {
    default: 'shadow-lg',
    bordered: 'border-2 border-border-dark',
    elevated: 'shadow-xl',
    glass: 'bg-white/80 backdrop-blur-xs border border-white/20'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const motionProps = hover ? {
    whileHover: { 
      y: -4,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      transition: { duration: 0.25, ease: 'easeOut' }
    },
    whileTap: interactive ? { scale: 0.98 } : {}
  } : {}

  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hover ? 'hover:shadow-card-hover' : ''}
    ${interactive ? 'cursor-pointer' : ''}
    ${className}
  `

  const Component = interactive || onClick ? motion.button : motion.div

  return (
    <Component
      className={cardClasses}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * CardHeader component for card titles and subtitles
 */
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
)

/**
 * CardTitle component for card headings
 */
export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-heading font-black text-text-primary ${className}`} {...props}>
    {children}
  </h3>
)

/**
 * CardDescription component for card text
 */
export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-text-secondary mt-2 ${className}`} {...props}>
    {children}
  </p>
)

/**
 * CardContent component for card body content
 */
export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
)

/**
 * CardFooter component for card actions
 */
export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-6 pt-4 border-t border-border-dark/10 ${className}`} {...props}>
    {children}
  </div>
)

export default Card
