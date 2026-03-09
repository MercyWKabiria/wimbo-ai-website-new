# Wimbo.ai - AI Music Pre-Production Studio

A modern, responsive React landing page for East Africa's first AI music pre-production studio.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org/)
- npm or yarn package manager

### Installation

1. **Install Node.js** (if not already installed):
   ```bash
   # Download and install from https://nodejs.org/
   # Or use Homebrew (macOS):
   brew install node
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
windsurf-project/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.jsx     # Button with variants and states
│   │   │   ├── Card.jsx       # Card with hover effects
│   │   │   ├── Input.jsx      # Input with floating labels
│   │   │   ├── Badge.jsx      # Badges and filters
│   │   │   ├── MusicPlayer.jsx # Floating music player
│   │   │   ├── Navigation.jsx # Navigation component
│   │   │   ├── Layout.jsx     # Layout utilities
│   │   │   └── index.js       # Export all UI components
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx     # Sticky header with mobile menu
│   │   │   ├── Footer.jsx     # Footer with links and newsletter
│   │   │   ├── MainLayout.jsx # Main layout wrapper
│   │   │   └── index.js       # Export layout components
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.jsx       # Hero with CTA and music player
│   │       ├── HowItWorksSection.jsx  # 3-step process
│   │       ├── ArtistsSection.jsx    # Artist cards with filters
│   │       ├── AlbumsSection.jsx     # Album showcases
│   │       ├── ToolsSection.jsx      # Tool filters and content
│   │       ├── NineWaysSection.jsx   # DAW interface
│   │       ├── FinalCTASection.jsx   # Final call-to-action
│   │       └── index.js              # Export all sections
│   ├── styles/
│   │   └── globals.css        # Tailwind + custom styles
│   ├── utils/
│   │   └── helpers.js         # Utility functions
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Custom design tokens
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#FF5C35` (Coral/Orange)
- **Background**: `#FFFFFF` (White)
- **Light Background**: `#FBF7F2` (Warm off-white)
- **Text Primary**: `#1A1A1A` (Near black)
- **Text Secondary**: `#666666` (Gray)

### Typography
- **Headings**: Raleway (Black, 900)
- **Body**: Poppins (Regular, 400)

### Breakpoints
- **Mobile**: 375px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1440px+

## 🎯 Features

### ✅ Components
- **Button**: 4 variants (primary, secondary, outline, ghost) with loading states
- **Card**: Hover effects, multiple variants, sub-components
- **Input**: Floating labels, validation states, password toggle
- **MusicPlayer**: Complete UI with controls and progress bar
- **Navigation**: Responsive with mobile slide-in drawer
- **Badges/Filters**: Interactive toggle buttons and tags

### ✅ Sections
- **Hero**: Headline, sub-headline, CTA buttons, floating music player, sound waves
- **How It Works**: 3-step process with icons and descriptions
- **Artists**: Coral background, filter tabs, artist cards with tilt effects
- **Albums**: Side-by-side album features with overlay effects
- **Tools**: Filter toggles with dynamic content switching
- **Nine Ways**: DAW interface visualization with animated waveforms
- **Final CTA**: Gradient background with watermark and email signup

### ✅ Animations
- **Page Load**: Fade-in + slide-up animations (600ms)
- **Scroll Triggered**: Elements animate when 20% visible
- **Micro-interactions**: Button scale (1.03x hover, 0.98x click)
- **Card Hover**: TranslateY(-4px) with enhanced shadows
- **Navigation**: Animated underline (0% to 100% width)
- **Mobile Menu**: Smooth slide-in drawer (300ms)

### ✅ Responsive Design
- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Flexible Grids**: 1-4 column layouts depending on screen size
- **Adaptive Typography**: Headings scale proportionally

### ✅ Accessibility
- **Semantic HTML**: Proper use of header, nav, main, section, footer
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Focus States**: Visible focus rings for all buttons and links
- **Reduced Motion**: Respects prefers-reduced-motion media query
- **Skip Links**: Skip-to-content link for keyboard users

## 🛠 Technologies Used

- **React 18** - UI framework with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Framer Motion** - Animation library for smooth interactions
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library

## � Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Performance

- **Bundle Size**: Optimized with Vite's tree-shaking
- **Images**: Lazy loading and responsive images
- **Animations**: 60fps smooth animations with GPU acceleration
- **CSS**: Minimal custom CSS, utility-first approach
- **JavaScript**: Modern ES6+ with proper code splitting

## 🎯 Key Interactions

### Header
- Sticky navigation with scroll-based shadow
- Mobile slide-in drawer with backdrop
- Smooth scroll to sections

### Hero Section
- Floating music player with full controls
- Animated sound wave graphics
- CTA buttons with hover effects

### Artists Section
- Filter tabs for different artist categories
- Artist cards with tilt rotation effects
- Tag system for artist characteristics

### Tools Section
- Interactive filter toggles
- Dynamic content switching
- Progress indicators and statistics

### Final CTA
- Gradient background with watermark
- Email signup form
- Animated statistics

## � Development Workflow

1. **Development**: `npm run dev` - Hot reload development server
2. **Linting**: `npm run lint` - Code quality checks
3. **Building**: `npm run build` - Production build
4. **Preview**: `npm run preview` - Preview production build

---

**Built with ❤️ for East Africa's music community**
