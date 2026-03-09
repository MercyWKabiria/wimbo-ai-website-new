/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5C35',
          dark: '#E54A2B',
          light: '#FF7A5C',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#FBF7F2',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
        },
        border: {
          dark: '#1A1A1A',
        },
        overlay: {
          dark: 'rgba(26, 26, 26, 0.7)',
          warm: 'rgba(255, 92, 53, 0.3)',
        }
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '3xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '2xl': ['2rem', { lineHeight: '1.3' }],
        'xl': ['1.5rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        black: '900',
        regular: '400',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
        '2xl': '6rem',
        '3xl': '8rem',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '1rem',
        button: '0.5rem',
      },
      height: {
        header: '80px',
      },
      animation: {
        'fade-in': 'fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-hover': 'scaleHover 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'translate-hover': 'translateHover 250ms ease-out',
        'underline': 'underline 200ms ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
        translateHover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'button-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'focus': '0 0 0 3px rgba(255, 92, 53, 0.2)',
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1024px',
        'large': '1440px',
      },
    },
  },
  plugins: [],
}
