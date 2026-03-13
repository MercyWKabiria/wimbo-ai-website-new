import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'

/**
 * Input component with floating label and validation states
 * 
 * @param {Object} props
 * @param {'text' | 'email' | 'password' | 'tel' | 'number'} props.type - Input type
 * @param {string} props.label - Input label
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler
 * @param {function} props.onBlur - Blur handler
 * @param {boolean} props.error - Error state
 * @param {string} props.errorMessage - Error message
 * @param {boolean} props.success - Success state
 * @param {boolean} props.disabled - Disable input
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.icon - Input icon
 */
const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage,
  success = false,
  disabled = false,
  required = false,
  className = '',
  icon,
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const inputType = type === 'password' && showPassword ? 'text' : type
  const isFloating = label && (focused || hasValue || placeholder)

  const handleFocus = (e) => {
    setFocused(true)
    if (props.onFocus) props.onFocus(e)
  }

  const handleBlur = (e) => {
    setFocused(false)
    if (onBlur) onBlur(e)
  }

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const inputClasses = `
    w-full px-4 py-3 border-2 rounded-button transition-all duration-150
    ${error ? 'border-red-500 focus:border-red-500 focus:shadow-focus' : 
      success ? 'border-green-500 focus:border-green-500 focus:shadow-focus' :
      'border-border-dark focus:border-primary focus:shadow-focus'}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
    ${icon ? 'pl-12' : ''}
  `

  const labelClasses = `
    absolute left-4 transition-all duration-150 pointer-events-none
    ${icon ? 'left-12' : 'left-4'}
    ${focused || hasValue ? 
      '-top-2 left-2 text-xs bg-white px-2 text-primary' : 
      'top-3.5 text-text-secondary'}
    ${error ? 'text-red-500' : success ? 'text-green-500' : ''}
  `

  const containerClasses = `relative ${className}`

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
        
        <motion.input
          type={inputType}
          className={inputClasses}
          placeholder={isFloating ? '' : placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.15 }}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      
      {error && errorMessage && (
        <motion.p
          className="mt-2 text-sm text-red-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          {errorMessage}
        </motion.p>
      )}
      
      {success && (
        <motion.p
          className="mt-2 text-sm text-green-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          ✓ Valid
        </motion.p>
      )}
    </div>
  )
}

export default Input
