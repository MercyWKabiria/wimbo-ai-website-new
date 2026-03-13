import React from 'react'
import { motion } from 'framer-motion'

/**
 * Badge component for tags and status indicators
 * 
 * @param {Object} props
 * @param {'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'} props.variant - Badge style
 * @param {'sm' | 'md'} props.size - Badge size
 * @param {boolean} props.pill - Pill shape (rounded)
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.className - Additional CSS classes
 */
const Badge = ({
  variant = 'default',
  size = 'md',
  pill = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium'
  
  const variantClasses = {
    default: 'bg-gray-100 text-text-secondary',
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-background-light text-text-primary',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  const badgeClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${pill ? 'rounded-full' : 'rounded-button'}
    ${className}
  `

  return (
    <motion.span
      className={badgeClasses}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.span>
  )
}

/**
 * FilterToggle component for tab-style filters
 */
export const FilterToggle = ({
  options,
  activeOption,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`inline-flex bg-background-light rounded-button p-1 ${className}`} {...props}>
      {options.map((option, index) => (
        <motion.button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            px-4 py-2 text-sm font-medium rounded-button transition-all duration-200
            ${activeOption === option.value 
              ? 'bg-primary text-white shadow-button-hover' 
              : 'text-text-secondary hover:text-text-primary'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  )
}

/**
 * Tag component for artist tags and categories
 */
export const Tag = ({
  children,
  removable = false,
  onRemove,
  className = '',
  ...props
}) => {
  return (
    <motion.span
      className={`
        inline-flex items-center gap-1 px-3 py-1 bg-background-light text-text-secondary text-sm rounded-button
        ${removable ? 'pr-2' : ''}
        ${className}
      `}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 text-text-secondary hover:text-text-primary transition-colors"
        >
          ×
        </button>
      )}
    </motion.span>
  )
}

export default Badge
