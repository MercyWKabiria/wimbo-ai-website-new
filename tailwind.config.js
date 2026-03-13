/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['80px', { lineHeight: '1.1', fontWeight: '900' }],
        'h1-mobile': ['48px', { lineHeight: '1.1', fontWeight: '900' }],
        'h2': ['45px', { lineHeight: '1.2', fontWeight: '900' }],
        'h2-mobile': ['32px', { lineHeight: '1.2', fontWeight: '900' }],
        'h3': ['25px', { lineHeight: '1.3', fontWeight: '900' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '900' }],
      },
      colors: {
        primary: {
          DEFAULT: '#FF5C35',
          hover: '#E54D2A',
          light: '#FFF0EC',
        },
        secondary: '#FFF0EC',
        background: {
          DEFAULT: '#FFFFFF',
          light: '#FBF7F2',
          warm: '#FBF7F2',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
          muted: '#999999',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-coral': 'linear-gradient(135deg, #FF6B4A 0%, #FF9A73 100%)',
        'gradient-teal': 'linear-gradient(135deg, #2A8B7A 0%, #4ACFBB 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B4A' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
