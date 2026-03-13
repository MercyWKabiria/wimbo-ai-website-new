// Responsive testing utilities and breakpoint helpers

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
  
  // Max-width queries
  'max-sm': `(max-width: ${breakpoints.sm})`,
  'max-md': `(max-width: ${breakpoints.md})`,
  'max-lg': `(max-width: ${breakpoints.lg})`,
  'max-xl': `(max-width: ${breakpoints.xl})`,
  'max-2xl': `(max-width: ${breakpoints['2xl']})`
}

export const getCurrentBreakpoint = (): keyof typeof breakpoints => {
  const width = window.innerWidth
  
  if (width >= 1536) return '2xl'
  if (width >= 1280) return 'xl'
  if (width >= 1024) return 'lg'
  if (width >= 768) return 'md'
  if (width >= 640) return 'sm'
  return 'xs'
}

export const isMobile = (): boolean => {
  return window.innerWidth < 768
}

export const isTablet = (): boolean => {
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = (): boolean => {
  return window.innerWidth >= 1024
}

export const isLargeDesktop = (): boolean => {
  return window.innerWidth >= 1280
}

// Responsive testing component helpers
export const responsiveTestStyles = {
  // Visual indicators for testing
  indicator: `
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 12px;
    z-index: 9999;
    pointer-events: none;
  `,
  
  // Grid overlay for layout testing
  gridOverlay: `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 39px,
      rgba(255, 107, 74, 0.1) 39px,
      rgba(255, 107, 74, 0.1) 40px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 39px,
      rgba(42, 139, 122, 0.1) 39px,
      rgba(42, 139, 122, 0.1) 40px
    );
    pointer-events: none;
    z-index: 9998;
    opacity: 0;
    transition: opacity 0.3s;
  `
}

// Touch device detection
export const isTouchDevice = (): boolean => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  )
}

// Device orientation
export const getOrientation = (): 'portrait' | 'landscape' => {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
}

// Pixel density detection
export const isHighDPI = (): boolean => {
  return window.devicePixelRatio > 1
}

// Viewport height fix for mobile browsers
export const getViewportHeight = (): number => {
  return window.innerHeight
}

export const setViewportHeight = (): void => {
  const vh = getViewportHeight() * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Responsive image helpers
export const getResponsiveImageSrc = (
  baseSrc: string,
  breakpoint: keyof typeof breakpoints
): string => {
  const extension = baseSrc.split('.').pop()
  const name = baseSrc.replace(`.${extension}`, '')
  return `${name}-${breakpoint}.${extension}`
}

export const getSrcSet = (baseSrc: string): string => {
  return Object.entries(breakpoints)
    .filter(([key]) => key !== 'xs')
    .map(([key, width]) => `${getResponsiveImageSrc(baseSrc, key as keyof typeof breakpoints)} ${width}w`)
    .join(', ')
}

// Responsive spacing utilities
export const getResponsiveSpacing = (mobile: number, tablet?: number, desktop?: number): string => {
  return `var(--spacing-${mobile})`
}

// Performance monitoring for responsive behavior
export const monitorResponsivePerformance = () => {
  let resizeTimer: NodeJS.Timeout
  
  const handleResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      const breakpoint = getCurrentBreakpoint()
      console.log(`Current breakpoint: ${breakpoint} (${window.innerWidth}px)`)
      
      // Trigger custom event for responsive changes
      window.dispatchEvent(new CustomEvent('breakpointChange', {
        detail: { breakpoint, width: window.innerWidth }
      }))
    }, 250)
  }
  
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
    clearTimeout(resizeTimer)
  }
}
