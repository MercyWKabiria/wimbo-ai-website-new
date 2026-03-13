// Animation utilities for smooth scroll animations and micro-interactions

export const animateOnScroll = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with stagger animation
  document.querySelectorAll('.stagger-animation > *').forEach((el) => {
    observer.observe(el)
  })

  // Observe individual animate elements
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })
}

export const staggerAnimation = (elements: NodeListOf<Element>, delay = 100) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate-fade-in')
    }, index * delay)
  })
}

export const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId)
  if (element) {
    const headerHeight = 80 // Account for fixed header
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

export const parallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]')
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-parallax') || '0.5')
      const yPos = -(scrolled * speed)
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}

export const floatingAnimation = (element: HTMLElement, duration = 3000) => {
  let startTime: number | null = null
  let animationId: number | null = null

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = (elapsed % duration) / duration

    const y = Math.sin(progress * Math.PI * 2) * 10
    element.style.transform = `translateY(${y}px)`

    animationId = requestAnimationFrame(animate)
  }

  animationId = requestAnimationFrame(animate)

  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  }
}

export const typewriterEffect = (element: HTMLElement, text: string, speed = 50) => {
  let i = 0
  element.textContent = ''

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

export const countUpAnimation = (element: HTMLElement, target: number, duration = 2000) => {
  const startTime = performance.now()
  const startValue = 0

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const currentValue = Math.floor(startValue + (target - startValue) * progress)
    element.textContent = currentValue.toString()

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
