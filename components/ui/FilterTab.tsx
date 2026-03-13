'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface FilterTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(
  ({ className, active = false, children, ...props }, ref) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-200"
    
    const activeStyles = active 
      ? "bg-coral-600 text-white" 
      : "border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white"

    return (
      <button
        className={cn(
          baseStyles,
          activeStyles,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

FilterTab.displayName = 'FilterTab'

export default FilterTab
