# CLAUDE.md
Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FutureIT Landing Page - A high-end, cyber-luxury landing page for an IT consultancy built with React, Tailwind CSS, and Framer Motion.

## Technology Stack

- **Framework**: React 19.2.3
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS 4.1.18 + PostCSS (CSS-first configuration)
- **Animations**: Framer Motion 12.23.26
- **Linting**: ESLint 9.39.2 with React plugins
- **Language**: JavaScript (ES Modules)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Architecture

### Component Structure
```
src/
├── components/
│   ├── Layout.jsx          # Main container with scroll behavior
│   ├── Navbar.jsx          # Sticky header with backdrop-blur
│   ├── Hero.jsx            # Hero section with animations
│   ├── Services.jsx        # Services grid (6 services)
│   ├── Technology.jsx      # Tech stack + 6-step process
│   ├── AboutUs.jsx         # Company history and team
│   ├── ContactForm.jsx     # Contact form with validation
│   ├── FloatingActions.jsx # WhatsApp + Chat widgets
│   └── Footer.jsx          # Footer with links and social
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles + Tailwind
```

### Design System

**Color Palette** (defined in src/index.css @theme block):
- Base Background: `#0B0D17` (cyber-base)
- Accent: `#A855F7` (cyber-violet)
- Surface/Cards: `#1A1D2B` (cyber-surface)
- Footer Background: `#0a071c`
- Primary Text: `#FFFFFF` (cyber-text-primary)
- Secondary Text: `#94A3B8` (cyber-text-secondary)

**Typography**:
- Headings: Orbitron (futuristic) - font-display
- Body: Manrope (modern sans-serif) - font-body
- Loaded from Google Fonts in index.css

**Design Patterns**:
- Glassmorphism: Cards use backdrop-blur-xl and semi-transparent backgrounds
- Scroll Animations: All sections use Framer Motion's `whileInView` for reveal animations
- Mobile-First: Responsive design with Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Glow Effects: Services cards have neon glow on hover

## Key Implementation Details

### Branding
- Logo location: `/public/logo.png`
- Navbar: Logo image only (h-14)
- Footer: Logo image only, centered, large size (h-32 md:h-40 lg:h-48)

### Animations
- All section animations use `whileInView` with `once: true` to trigger on scroll
- Stagger children animations for cards and grid items
- Framer Motion variants defined inline in each component

### FloatingActions Component
- WhatsApp button (right side) with infinite pulse animation
- Chat widget (left side) - currently placeholder
- WhatsApp link format: `https://wa.me/TU_NUMERO_AQUI` (needs configuration)

### ContactForm Component
- Client-side validation (email format, phone, message length)
- Currently shows alert on submit (needs backend integration)
- Located around line 57 in ContactForm.jsx for API integration

### Responsive Behavior
- Navbar: Collapses to mobile menu on smaller screens
- Grid layouts: Adjust columns based on breakpoints
- Text sizes: Scale down on mobile using responsive Tailwind classes

## Configuration Files

- **vite.config.js**: Vite 7 configuration with React plugin
- **tailwind.config.js**: Legacy config file (still present for reference, but theme defined in CSS)
- **postcss.config.js**: PostCSS with @tailwindcss/postcss plugin (v4 syntax)
- **src/index.css**: Tailwind v4 CSS-first configuration using @theme directive
  - Custom colors defined as CSS variables (--color-*)
  - Custom fonts (--font-family-*)
  - Custom animations (--animate-*)
  - Keyframes for glow, float, and shimmer effects
- **index.html**: Meta tags, SEO, and Open Graph configured

## Important Notes

- **No Backend**: Form submissions need backend integration
- **No Testing**: No test suite configured yet
- **Static Assets**: All assets in `/public/` directory
- **SEO Ready**: Meta tags and Open Graph configured in index.html
- **Performance**: Uses lazy loading patterns and optimized builds

## Customization Points

When modifying this project:
1. **Colors**: Edit `src/index.css` @theme block with CSS variables (--color-*)
2. **Content**: Each component is self-contained in `src/components/`
3. **Logo**: Replace `/public/logo.png`
4. **WhatsApp**: Update number in `FloatingActions.jsx:15`
5. **Form Backend**: Implement in `ContactForm.jsx` handleSubmit function
6. **Fonts**: Change in `src/index.css` @theme block (--font-family-*) and Google Fonts import
7. **Animations**: Define in `src/index.css` @theme block (--animate-*) and @keyframes

## Tailwind CSS v4 Migration Notes

This project uses Tailwind CSS v4 with CSS-first configuration:
- Configuration moved from `tailwind.config.js` to `src/index.css` @theme directive
- No longer requires autoprefixer (handled automatically)
- Uses `@tailwindcss/postcss` plugin instead of legacy tailwindcss plugin
- Custom properties use CSS variable format: `--color-name`, `--font-family-name`, etc.
- Import syntax: `@import "tailwindcss";` instead of `@tailwind base/components/utilities;`

## Deployment

Optimized for static hosting (Vercel, Netlify, GitHub Pages):
1. Run `npm run build`
2. Deploy `/dist` directory
3. Ensure proper routing for SPA (may need redirect rules)
