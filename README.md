# Wimbo.ai Landing Page

A modern, single-page scrolling landing page for Wimbo.ai - East Africa's first AI music pre-production studio.

## Design System

### Colors
- **Primary Coral**: `#FF6B4A` - Main accent color
- **Secondary Teal**: `#2A8B7A` - Supporting color
- **Text Primary**: `#1A1A1A` - Near black for headings
- **Text Secondary**: `#666666` - Gray for body text
- **Background**: `#FFFFFF` - White
- **Light Background**: `#FFF9F5` - Warm off-white

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Custom buttons (primary/secondary variants)
- Artist cards with hover effects
- Filter tabs with active/inactive states
- Gradient backgrounds and text effects

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind utilities
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main landing page
├── components/              # React components for each section
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Artists.tsx
│   ├── Albums.tsx
│   ├── Tools.tsx
│   ├── NineWays.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Scrolling**: Native browser smooth scrolling
- **Hover Effects**: Interactive elements with transitions
- **Animations**: Subtle animations for enhanced UX
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS

## Build

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.
