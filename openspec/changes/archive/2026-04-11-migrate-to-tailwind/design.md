# Design: 100% Tailwind Migration

## Overview
This document outlines the architectural approach for migrating all custom components in "The Gym Bros Community" to a 100% Tailwind CSS styling system. The goal is to eliminate external CSS files and inline styles while maintaining identical UI and high-performance animations.

## Goals
- Eliminate `GlowSidemenu.css` and all inline `style` attributes.
- Centralize custom design tokens (like text-glow and specific tracking) in Tailwind v4 `@theme`.
- Ensure GSAP animations remain functional by using Tailwind classes as selectors.
- Maintain existing performance optimizations (`will-change`, `autoAlpha`).

## Architectural Reasoning

### 1. Tailwind v4 @theme for Custom Effects
Tailwind v4 allows us to define custom utilities and variables directly in the CSS entry point. We will use this to define the "glow" effect as a custom utility or variable.

**Example Implementation in `global.css`:**
```css
@theme inline {
  --text-shadow-glow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);
  --text-shadow-glow-hover: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 45px rgba(255, 255, 255, 0.4);
}

.shadow-glow {
  text-shadow: var(--text-shadow-glow);
}

.hover\:shadow-glow-strong:hover {
  text-shadow: var(--text-shadow-glow-hover);
}
```

### 2. GSAP Selector Maintenance
GSAP currently relies on class names like `.glow-sidemenu-panel` and `.glow-sidemenu-item`. During migration, these classes will be kept on the elements to serve as animation hooks, but their visual styling will be moved to Tailwind utilities.

### 3. Component Updates

#### `GlowSidemenu.tsx`
- Replace all classes from `GlowSidemenu.css` with equivalent Tailwind classes.
- Use `fixed top-0 right-0 w-full max-w-[450px] h-screen bg-black z-100 flex flex-col p-8 invisible` for the panel.
- Use `fixed inset-0 bg-black/70 backdrop-blur-sm z-90 opacity-0 invisible` for the overlay.
- Handle hover transitions specifically for `color`, `text-shadow`, and `transform` as required by the spec.

#### `TGCLogo.astro`
- Replace `style='letter-spacing: 0.3em;'` with `tracking-[0.3em]`.

#### `Hero.astro` & `ProductShowcase.astro`
- Replace inline `style` with `w-screen h-[80vh] relative` and `h-[600px] relative` respectively.

#### `ErrorBoundary.jsx`
- Wrap fallback content in a Tailwind-styled `div` for consistency.

## Performance Considerations
- All `will-change` properties will be applied via Tailwind's `will-change-*` utilities.
- GSAP's `autoAlpha` remains the primary mechanism for visibility animations to prevent layout shifts.

## Alternatives Considered
- **Tailwind Plugins**: Decided against complex plugins for text-shadow since v4 `@theme` is more direct and easier to maintain for a few specific effects.
- **CSS-in-JS**: Rejected to maintain the project's established preference for Tailwind and Astro's static performance.
