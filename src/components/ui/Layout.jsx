import React from 'react'
import { motion } from 'framer-motion'

/**
 * Container component for consistent layout spacing
 * 
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'full'} props.size - Container max width
 * @param {boolean} props.centered - Center the container
 * @param {boolean} props.padding - Apply default padding
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS classes
 */
const Container = ({
  size = 'lg',
  centered = true,
  padding = true,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-container',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }

  const containerClasses = `
    ${sizeClasses[size]}
    ${centered ? 'mx-auto' : ''}
    ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
    ${className}
  `

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  )
}

/**
 * Section component for consistent section spacing
 * 
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg' | 'xl'} props.spacing - Section padding size
 * @param {string} props.background - Background color
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 */
const Section = ({
  spacing = 'lg',
  background = 'bg-background',
  children,
  className = '',
  ...props
}) => {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24'
  }

  const sectionClasses = `
    ${spacingClasses[spacing]}
    ${background}
    ${className}
  `

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  )
}

/**
 * Grid component for consistent layouts
 * 
 * @param {Object} props
 * @param {number} props.cols - Number of columns (1-6)
 * @param {number} props.mdCols - Columns on medium screens
 * @param {number} props.lgCols - Columns on large screens
 * @param {string} props.gap - Gap between items
 * @param {React.ReactNode} props.children - Grid content
 * @param {string} props.className - Additional CSS classes
 */
const Grid = ({
  cols = 1,
  mdCols,
  lgCols,
  gap = 'gap-6',
  children,
  className = '',
  ...props
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }

  const mdColsClasses = mdCols ? {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6'
  }[mdCols] : ''

  const lgColsClasses = lgCols ? {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6'
  }[lgCols] : ''

  const gridClasses = `
    grid
    ${colsClasses[cols]}
    ${mdColsClasses}
    ${lgColsClasses}
    ${gap}
    ${className}
  `

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  )
}

/**
 * Flex component for flexible layouts
 * 
 * @param {Object} props
 * @param {'row' | 'col'} props.direction - Flex direction
 * @param {'start' | 'center' | 'end' | 'between' | 'around'} props.align - Alignment
 * @param {'start' | 'center' | 'end'} props.justify - Justification
 * @param {string} props.gap - Gap between items
 * @param {boolean} props.wrap - Allow wrapping
 * @param {React.ReactNode} props.children - Flex content
 * @param {string} props.className - Additional CSS classes
 */
const Flex = ({
  direction = 'row',
  align = 'start',
  justify = 'start',
  gap = 'gap-4',
  wrap = false,
  children,
  className = '',
  ...props
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col'
  }

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  }

  const flexClasses = `
    flex
    ${directionClasses[direction]}
    ${alignClasses[align]}
    ${justifyClasses[justify]}
    ${gap}
    ${wrap ? 'flex-wrap' : ''}
    ${className}
  `

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  )
}

export { Container, Section, Grid, Flex }
