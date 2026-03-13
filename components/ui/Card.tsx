'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'artist' | 'tool' | 'album'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = "rounded-2xl transition-all duration-300"
    
    const variants = {
      default: 'bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300',
      artist: 'bg-white rounded-xl shadow-card hover:shadow-card-hover transition-transform duration-300 transform hover:rotate-1',
      tool: 'bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300',
      album: 'relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300',
    }

    const hoverStyles = hover ? "hover:shadow-card-hover" : ""

    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          hoverStyles,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
