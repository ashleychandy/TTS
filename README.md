# Creative Agency Portfolio

A modern, high-end portfolio website for a creative agency built with Next.js 15, React 19, and TypeScript. **Now fully optimized for mobile with enhanced accessibility!**

## Features

- 🎨 Bold, Swiss-inspired design with deep red color palette
- 📱 **Mobile-first responsive design** with optimized breakpoints
- ⚡ Next.js 15 App Router for optimal performance
- 🎯 TypeScript for type safety
- 🎭 CSS Modules for scoped styling
- ♿ **WCAG-compliant accessibility** with semantic HTML and ARIA labels
- 🖼️ **Touch-friendly interactions** with image galleries and modals
- 🚀 Zero external dependencies (except Next.js/React)
- 🎪 **Smooth animations** with reduced motion support

## 📱 Mobile Optimizations

### Responsive Breakpoints
- **< 480px**: Mobile portrait (ultra-compact layout)
- **480px - 767px**: Mobile landscape
- **768px - 1023px**: Tablet (adjusted layouts)
- **1024px+**: Desktop (full layout)

### Mobile Enhancements
- ✅ Touch-friendly tap targets (minimum 44px)
- ✅ Click-to-open dropdown menus on mobile
- ✅ Smooth scrolling and transitions
- ✅ Image modal viewer with body scroll lock
- ✅ Optimized typography scaling for small screens
- ✅ Single-column layouts on mobile
- ✅ Improved spacing and padding
- ✅ Keyboard navigation support
- ✅ Focus indicators for accessibility

### Performance
- Image optimization with Next.js Image component
- Responsive image sizing with `sizes` attribute
- Lazy loading for below-the-fold content
- Efficient viewport-based sizing
- Smooth font rendering on all devices

## Project Structure

```
TTS/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page combining all sections
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Landing hero section
│   ├── Hero.module.css
│   ├── Intro.tsx        # Brand statement section
│   ├── Intro.module.css
│   ├── FourWays.tsx     # Services showcase
│   ├── FourWays.module.css
│   ├── SelectedWorks.tsx # Portfolio grid
│   ├── SelectedWorks.module.css
│   ├── CTA.tsx          # Call-to-action section
│   ├── CTA.module.css
│   ├── Footer.tsx       # Site footer
│   └── Footer.module.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (you have v24.10.0)
- npm 8+ (you have v11.6.1)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Sections Overview

The single-page layout consists of 6 sections stacked vertically:

1. **Hero** - Full-viewport landing with dynamic "CREATE" typography
2. **Intro** - Brand statement with 4 gradient cards (responsive grid)
3. **FourWays** - Services showcase in poster-style layout
4. **SelectedWorks** - Portfolio grid with scattered card layout (stacks on mobile)
5. **CTA** - Call-to-action with contact button (image above text on mobile)
6. **Footer** - Contact info, navigation, and social links (responsive columns)

### Additional Pages
- **Product Pages** - Interactive image galleries with modal viewers
- **Contact** - Dedicated contact page with CTA section

## Design System

### Colors
- Primary Red Dark: `#6e0505`
- Primary Red Medium: `#8a0000`
- Brand Red: `#a80015`
- Background: `#fdfdfd`
- Text Dark: `#333333`

### Typography
- Font: Helvetica Neue
- Scales: 0.7vw → 26.8vw (viewport-based)
- All uppercase for impact

### Spacing
- Page padding: 3vw
- Component gaps: 2-4vw
- Consistent viewport units

## ♿ Accessibility Features

- Semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)
- ARIA labels and roles for enhanced screen reader support
- Keyboard navigation with visible focus indicators
- Descriptive alt text for all images
- Touch-friendly minimum tap targets (44px)
- Reduced motion support for users with vestibular disorders
- Proper heading hierarchy
- Color contrast compliance

## Browser Support

- Chrome (latest) - Desktop & Mobile
- Firefox (latest) - Desktop & Mobile
- Safari (latest) - Desktop & iOS
- Edge (latest)
- iOS Safari 12+
- Android Chrome 80+

## License

Private - All Rights Reserved

## Contact

contact.thirsttrapstudios@gmail.com
