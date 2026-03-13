// Accessibility utilities and testing helpers

// ARIA label helpers
export const generateAriaLabel = (context: string, action?: string): string => {
  return action ? `${action} ${context}` : context
}

// Focus management
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  )
  const firstFocusable = focusableElements[0] as HTMLElement
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus()
          e.preventDefault()
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  firstFocusable.focus()

  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

// Skip link functionality
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-coral-600 text-white px-4 py-2 rounded'
  
  document.body.insertBefore(skipLink, document.body.firstChild)
  return skipLink
}

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Keyboard navigation
export const setupKeyboardNavigation = () => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Escape key to close modals/menus
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('[data-modal="open"]')
      const activeMenu = document.querySelector('[data-menu="open"]')
      
      if (activeModal) {
        (activeModal as HTMLElement).click()
      } else if (activeMenu) {
        (activeMenu as HTMLElement).click()
      }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation')
    }
  }

  const handleMouseDown = () => {
    document.body.classList.remove('keyboard-navigation')
  }

  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('mousedown', handleMouseDown)

  return () => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('mousedown', handleMouseDown)
  }
}

// Color contrast checking
export const checkColorContrast = (foreground: string, background: string): number => {
  const getLuminance = (hex: string): number => {
    const rgb = parseInt(hex.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff
    
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export const meetsWCAG = (contrast: number, level: 'AA' | 'AAA' = 'AA', size: 'normal' | 'large' = 'normal'): boolean => {
  const thresholds = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 }
  }
  
  return contrast >= thresholds[level][size]
}

// Alt text validation
export const validateAltText = (alt: string, decorative: boolean = false): boolean => {
  if (decorative) {
    return alt === ''
  }
  
  return alt.length > 0 && alt.length < 125 && !alt.includes('image of') && !alt.includes('picture of')
}

// Heading structure validation
export const validateHeadingStructure = (): string[] => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  const errors: string[] = []
  let lastLevel = 0

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1))
    
    // Check for skipped levels
    if (index > 0 && level > lastLevel + 1) {
      errors.push(`Heading level skipped: h${lastLevel} to h${level}`)
    }
    
    // Check for multiple h1s
    if (level === 1 && headings.length > 1) {
      errors.push('Multiple h1 headings found')
    }
    
    lastLevel = level
  })

  return errors
}

// Link text validation
export const validateLinkText = (): string[] => {
  const links = document.querySelectorAll('a[href]')
  const errors: string[] = []
  const linkTexts: string[] = []

  links.forEach(link => {
    const text = link.textContent?.trim() || ''
    
    // Check for empty links
    if (text === '') {
      errors.push('Empty link found')
    }
    
    // Check for "click here" links
    if (text.toLowerCase().includes('click here')) {
      errors.push(`Link with non-descriptive text: "${text}"`)
    }
    
    // Check for duplicate link text
    if (linkTexts.includes(text)) {
      errors.push(`Duplicate link text: "${text}"`)
    }
    
    linkTexts.push(text)
  })

  return errors
}

// Form validation
export const validateFormAccessibility = (form: HTMLElement): string[] => {
  const errors: string[] = []
  
  // Check for form labels
  const inputs = form.querySelectorAll('input, textarea, select')
  inputs.forEach(input => {
    const label = form.querySelector(`label[for="${input.id}"]`) || 
                 (input as HTMLElement).closest('label')
    
    if (!label) {
      errors.push(`Input without label: ${input.id || 'unnamed'}`)
    }
  })
  
  // Check for required field indicators
  const required = form.querySelectorAll('[required]')
  required.forEach(field => {
    const label = form.querySelector(`label[for="${field.id}"]`) || 
                 (field as HTMLElement).closest('label')
    
    if (label && !label.textContent?.includes('*')) {
      errors.push(`Required field not indicated: ${field.id || 'unnamed'}`)
    }
  })
  
  return errors
}

// Accessibility testing checklist
export const runAccessibilityAudit = (): {
  passed: number
  failed: number
  errors: string[]
  warnings: string[]
} => {
  const errors: string[] = []
  const warnings: string[] = []
  
  // Check heading structure
  const headingErrors = validateHeadingStructure()
  errors.push(...headingErrors)
  
  // Check link text
  const linkErrors = validateLinkText()
  errors.push(...linkErrors)
  
  // Check forms
  const forms = document.querySelectorAll('form')
  forms.forEach(form => {
    const formErrors = validateFormAccessibility(form as HTMLElement)
    errors.push(...formErrors)
  })
  
  // Check for alt text
  const images = document.querySelectorAll('img')
  images.forEach(img => {
    const alt = (img as HTMLImageElement).alt
    if (alt === '' && img.getAttribute('role') !== 'presentation') {
      warnings.push('Image missing alt text (should be decorative or have description)')
    }
  })
  
  // Check for ARIA labels
  const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
  buttons.forEach(button => {
    if (!button.textContent?.trim()) {
      errors.push('Button without accessible name')
    }
  })
  
  return {
    passed: warnings.length,
    failed: errors.length,
    errors,
    warnings
  }
}

// Focus visible enhancement
export const enhanceFocusVisible = () => {
  const style = document.createElement('style')
  style.textContent = `
    .keyboard-navigation *:focus {
      outline: 2px solid #FF6B4A !important;
      outline-offset: 2px !important;
    }
    
    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
    
    .focus\\:not-sr-only:focus {
      position: static !important;
      width: auto !important;
      height: auto !important;
      padding: inherit !important;
      margin: inherit !important;
      overflow: visible !important;
      clip: auto !important;
      white-space: normal !important;
    }
  `
  document.head.appendChild(style)
}
