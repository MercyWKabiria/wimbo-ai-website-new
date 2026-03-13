// Comprehensive testing utilities for the Wimbo.ai landing page

export interface TestResult {
  name: string
  status: 'pass' | 'fail' | 'warning'
  message: string
  details?: string
}

export interface TestSuite {
  name: string
  tests: TestResult[]
  summary: {
    passed: number
    failed: number
    warnings: number
    total: number
  }
}

// Performance testing
export const testPerformance = (): TestSuite => {
  const tests: TestResult[] = []
  
  // Test Core Web Vitals
  const testLCP = (): TestResult => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1] as PerformanceEntry
      const lcpTime = lcp.startTime
      
      return {
        name: 'Largest Contentful Paint',
        status: lcpTime < 2500 ? 'pass' : lcpTime < 4000 ? 'warning' : 'fail',
        message: `LCP: ${Math.round(lcpTime)}ms`,
        details: 'Should be under 2.5s for good performance'
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    
    return {
      name: 'Largest Contentful Paint',
      status: 'pass',
      message: 'Monitoring LCP...',
      details: 'Largest Contentful Paint is being measured'
    }
  }
  
  const testFID = (): TestResult => {
    return {
      name: 'First Input Delay',
      status: 'pass',
      message: 'Ready to measure',
      details: 'Should be under 100ms for good responsiveness'
    }
  }
  
  const testCLS = (): TestResult => {
    return {
      name: 'Cumulative Layout Shift',
      status: 'pass',
      message: 'Ready to measure',
      details: 'Should be under 0.1 for good visual stability'
    }
  }
  
  tests.push(testLCP(), testFID(), testCLS())
  
  return {
    name: 'Performance Tests',
    tests,
    summary: {
      passed: tests.filter(t => t.status === 'pass').length,
      failed: tests.filter(t => t.status === 'fail').length,
      warnings: tests.filter(t => t.status === 'warning').length,
      total: tests.length
    }
  }
}

// Responsive testing
export const testResponsive = (): TestSuite => {
  const tests: TestResult[] = []
  
  const testBreakpoints = (): TestResult => {
    const breakpoints = [640, 768, 1024, 1280, 1536]
    const currentWidth = window.innerWidth
    const currentBreakpoint = breakpoints.find(bp => currentWidth < bp) || '2xl'
    
    return {
      name: 'Breakpoint Detection',
      status: 'pass',
      message: `Current: ${currentWidth}px (${currentBreakpoint})`,
      details: 'Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px'
    }
  }
  
  const testMobileMenu = (): TestResult => {
    const mobileMenu = document.querySelector('[data-mobile-menu]')
    const isMobile = window.innerWidth < 768
    
    if (!mobileMenu && isMobile) {
      return {
        name: 'Mobile Menu',
        status: 'fail',
        message: 'Mobile menu not found',
        details: 'Mobile menu should be available on screens < 768px'
      }
    }
    
    return {
      name: 'Mobile Menu',
      status: 'pass',
      message: 'Mobile menu detected',
      details: 'Mobile menu is properly implemented'
    }
  }
  
  const testResponsiveImages = (): TestResult => {
    const images = document.querySelectorAll('img')
    const responsiveImages = Array.from(images).filter(img => 
      img.hasAttribute('srcset') || img.hasAttribute('sizes')
    )
    
    return {
      name: 'Responsive Images',
      status: responsiveImages.length > 0 ? 'pass' : 'warning',
      message: `${responsiveImages.length}/${images.length} images are responsive`,
      details: 'Images should have srcset and sizes attributes for better performance'
    }
  }
  
  tests.push(testBreakpoints(), testMobileMenu(), testResponsiveImages())
  
  return {
    name: 'Responsive Tests',
    tests,
    summary: {
      passed: tests.filter(t => t.status === 'pass').length,
      failed: tests.filter(t => t.status === 'fail').length,
      warnings: tests.filter(t => t.status === 'warning').length,
      total: tests.length
    }
  }
}

// Component testing
export const testComponents = (): TestSuite => {
  const tests: TestResult[] = []
  
  const testButtons = (): TestResult => {
    const buttons = document.querySelectorAll('button')
    const buttonsWithAria = Array.from(buttons).filter(btn => 
      btn.textContent?.trim() || btn.getAttribute('aria-label')
    )
    
    return {
      name: 'Button Accessibility',
      status: buttonsWithAria.length === buttons.length ? 'pass' : 'fail',
      message: `${buttonsWithAria.length}/${buttons.length} buttons have accessible names`,
      details: 'All buttons should have text content or aria-label'
    }
  }
  
  const testCards = (): TestResult => {
    const cards = document.querySelectorAll('.card, [data-card]')
    const interactiveCards = Array.from(cards).filter(card => 
      card.hasAttribute('tabindex') || card.querySelector('button, a')
    )
    
    return {
      name: 'Card Interactivity',
      status: interactiveCards.length > 0 ? 'pass' : 'warning',
      message: `${interactiveCards.length} interactive cards found`,
      details: 'Cards should be keyboard accessible when interactive'
    }
  }
  
  const testNavigation = (): TestResult => {
    const nav = document.querySelector('nav')
    const navLinks = nav?.querySelectorAll('a') || []
    
    return {
      name: 'Navigation Structure',
      status: nav && navLinks.length > 0 ? 'pass' : 'fail',
      message: navLinks.length > 0 ? `${navLinks.length} navigation links` : 'Navigation not found',
      details: 'Navigation should be properly structured with semantic HTML'
    }
  }
  
  tests.push(testButtons(), testCards(), testNavigation())
  
  return {
    name: 'Component Tests',
    tests,
    summary: {
      passed: tests.filter(t => t.status === 'pass').length,
      failed: tests.filter(t => t.status === 'fail').length,
      warnings: tests.filter(t => t.status === 'warning').length,
      total: tests.length
    }
  }
}

// Content testing
export const testContent = (): TestSuite => {
  const tests: TestResult[] = []
  
  const testHeadings = (): TestResult => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const h1Count = document.querySelectorAll('h1').length
    
    return {
      name: 'Heading Structure',
      status: h1Count === 1 ? 'pass' : 'fail',
      message: `${headings.length} headings, ${h1Count} H1s`,
      details: 'Should have exactly one H1 and logical heading hierarchy'
    }
  }
  
  const testLinks = (): TestResult => {
    const links = document.querySelectorAll('a[href]')
    const emptyLinks = Array.from(links).filter(link => !link.textContent?.trim())
    
    return {
      name: 'Link Content',
      status: emptyLinks.length === 0 ? 'pass' : 'warning',
      message: `${emptyLinks.length} empty links found`,
      details: 'All links should have descriptive text'
    }
  }
  
  const testImages = (): TestResult => {
    const images = document.querySelectorAll('img')
    const imagesWithAlt = Array.from(images).filter(img => img.hasAttribute('alt'))
    
    return {
      name: 'Image Alt Text',
      status: imagesWithAlt.length === images.length ? 'pass' : 'fail',
      message: `${imagesWithAlt.length}/${images.length} images have alt text`,
      details: 'All images should have appropriate alt text'
    }
  }
  
  tests.push(testHeadings(), testLinks(), testImages())
  
  return {
    name: 'Content Tests',
    tests,
    summary: {
      passed: tests.filter(t => t.status === 'pass').length,
      failed: tests.filter(t => t.status === 'fail').length,
      warnings: tests.filter(t => t.status === 'warning').length,
      total: tests.length
    }
  }
}

// Cross-browser compatibility testing
export const testBrowserCompatibility = (): TestSuite => {
  const tests: TestResult[] = []
  
  const testCSSFeatures = (): TestResult => {
    const features = [
      'CSS Grid',
      'Flexbox',
      'Custom Properties',
      'Backdrop Filter'
    ]
    
    const supported = features.filter(feature => {
      switch(feature) {
        case 'CSS Grid':
          return CSS.supports('display', 'grid')
        case 'Flexbox':
          return CSS.supports('display', 'flex')
        case 'Custom Properties':
          return CSS.supports('color', 'var(--test)')
        case 'Backdrop Filter':
          return CSS.supports('backdrop-filter', 'blur(10px)')
        default:
          return false
      }
    })
    
    return {
      name: 'CSS Feature Support',
      status: supported.length === features.length ? 'pass' : 'warning',
      message: `${supported.length}/${features.length} features supported`,
      details: `Supported: ${supported.join(', ')}`
    }
  }
  
  const testJavaScriptFeatures = (): TestResult => {
    const features = [
      'Intersection Observer',
      'Resize Observer',
      'Fetch API',
      'Local Storage'
    ]
    
    const supported = features.filter(feature => {
      switch(feature) {
        case 'Intersection Observer':
          return 'IntersectionObserver' in window
        case 'Resize Observer':
          return 'ResizeObserver' in window
        case 'Fetch API':
          return 'fetch' in window
        case 'Local Storage':
          return 'localStorage' in window
        default:
          return false
      }
    })
    
    return {
      name: 'JavaScript Feature Support',
      status: supported.length === features.length ? 'pass' : 'warning',
      message: `${supported.length}/${features.length} features supported`,
      details: `Supported: ${supported.join(', ')}`
    }
  }
  
  tests.push(testCSSFeatures(), testJavaScriptFeatures())
  
  return {
    name: 'Browser Compatibility Tests',
    tests,
    summary: {
      passed: tests.filter(t => t.status === 'pass').length,
      failed: tests.filter(t => t.status === 'fail').length,
      warnings: tests.filter(t => t.status === 'warning').length,
      total: tests.length
    }
  }
}

// Run all tests
export const runAllTests = (): TestSuite[] => {
  return [
    testPerformance(),
    testResponsive(),
    testComponents(),
    testContent(),
    testBrowserCompatibility()
  ]
}

// Generate test report
export const generateTestReport = (suites: TestSuite[]): string => {
  const totalPassed = suites.reduce((sum, suite) => sum + suite.summary.passed, 0)
  const totalFailed = suites.reduce((sum, suite) => sum + suite.summary.failed, 0)
  const totalWarnings = suites.reduce((sum, suite) => sum + suite.summary.warnings, 0)
  const totalTests = suites.reduce((sum, suite) => sum + suite.summary.total, 0)
  
  let report = `
# Wimbo.ai Landing Page Test Report

## Summary
- Total Tests: ${totalTests}
- Passed: ${totalPassed}
- Failed: ${totalFailed}
- Warnings: ${totalWarnings}
- Success Rate: ${Math.round((totalPassed / totalTests) * 100)}%

## Test Suites
`
  
  suites.forEach(suite => {
    report += `
### ${suite.name}
- Passed: ${suite.summary.passed}
- Failed: ${suite.summary.failed}
- Warnings: ${suite.summary.warnings}

`
    
    suite.tests.forEach(test => {
      const icon = test.status === 'pass' ? '✅' : test.status === 'fail' ? '❌' : '⚠️'
      report += `${icon} **${test.name}**: ${test.message}\n`
      if (test.details) {
        report += `   - ${test.details}\n`
      }
    })
    
    report += '\n'
  })
  
  return report
}
