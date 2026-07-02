# THIRST TRAP STUDIOS

A premium AI marketing collective website built with React, Vite, and modern CSS.

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx / Nav.css
│   ├── Hero.jsx / Hero.css
│   ├── Services.jsx / Services.css
│   ├── Process.jsx / Process.css
│   ├── CTA.jsx / CTA.css
│   └── Footer.jsx / Footer.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Design System

- **Colors**: Material Design 3 color palette with dark theme
- **Typography**: Syne (headlines), Hanken Grotesk (body), Geist (labels)
- **Layout**: Responsive grid-based with CSS custom properties
- **Animations**: Subtle fade-in effects on scroll
- **Brutalist Aesthetic**: Sharp angles, minimal shadows, high contrast

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Sections

1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero** - Full-viewport hero section with animated orb background
3. **Services** - 4-column grid of service offerings
4. **Process** - 5-step workflow visualization
5. **CTA** - Call-to-action invitation section
6. **Footer** - Navigation links and company information

## Features

- Fully responsive design (mobile-first)
- Smooth scroll navigation between sections
- Mobile menu with hamburger toggle
- Smooth transitions and animations
- Accessible component structure
- Production-ready build optimization

## Color Variables

All colors are defined as CSS custom properties in `:root`:

- `--primary`: #b1c5ff (Cobalt Blue)
- `--background`: #131313 (Matte Black)
- `--on-background`: #e5e2e1 (Warm White)
- `--on-surface-variant`: #c3c6d5 (Subtle Silver)
- ...and 30+ more

Edit `src/index.css` to customize the color palette.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript support required
