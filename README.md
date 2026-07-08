# Creative Agency Portfolio

A modern, high-end portfolio website for a creative agency built with Next.js 15, React 19, and TypeScript.

## Features

- 🎨 Bold, Swiss-inspired design with deep red color palette
- 📱 Fully responsive (desktop-first approach)
- ⚡ Next.js 15 App Router for optimal performance
- 🎯 TypeScript for type safety
- 🎭 CSS Modules for scoped styling
- 🚀 Zero external dependencies (except Next.js/React)

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

1. **Hero** - Full-viewport landing with massive "CREATE" typography
2. **Intro** - Brand statement with 4 gradient cards
3. **FourWays** - Services showcase in poster-style layout
4. **SelectedWorks** - Portfolio grid with scattered card layout
5. **CTA** - Call-to-action with contact button
6. **Footer** - Contact info, navigation, and social links

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All Rights Reserved

## Contact

contact.thirsttrapstudios@gmail.com
