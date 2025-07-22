# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for CARAUKTION Direct - a car auction platform that connects dealers with private sellers through 24-hour auctions. Built with Astro 4.15.3, it's a multi-language static website supporting German, English, French, and Italian.

## Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev
# or
npm start

# Build for production (outputs to ./dist/)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Technology Stack
- **Framework**: Astro 4.15.3 (static site generator)
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript
- **State Management**: Nanostores 0.9.5 with persistent storage for language selection

### Key Directories
- `/src/components/` - Reusable Astro components (Hero, Navbar, Footer, Pricing, FAQ, etc.)
- `/src/content/` - Internationalization files (de.ts, en.ts, fr.ts, it.ts)
- `/src/pages/` - Single index.astro page (SPA structure)
- `/src/layouts/` - Layout wrapper component
- `/src/store/` - Language state management with Nanostores
- `/public/` - Static assets (logo, favicon)

### Important Configuration Files
- `astro.config.mjs` - Astro configuration with Tailwind integration
- `tailwind.config.mjs` - Custom colors (primary red: #d81825) and fonts
- `tsconfig.json` - TypeScript configuration extending Astro's base

### Internationalization
The site supports 4 languages with translations stored in `/src/content/`. Language selection is persisted using Nanostores with localStorage. To add translations, modify the corresponding language file in the content directory.

### Component Architecture
Components follow Astro's `.astro` format combining markup, styles, and scripts. The site uses a component-based architecture with reusable UI elements that accept props for content customization.

## Development Notes

- No testing framework is currently configured
- No linting or code formatting tools are set up
- The project uses ES modules (type: "module" in package.json)
- Client-side language switching is handled through the language store