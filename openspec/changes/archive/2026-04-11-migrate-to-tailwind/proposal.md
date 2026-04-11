# Proposal: 100% Tailwind Migration

## Why
The Gym Bros Community styling system was a mix of Tailwind, external CSS files, and inline styles, leading to maintenance challenges and inconsistent design. Migrating to 100% Tailwind CSS (v4) centralizes the design system and improves performance.

## What Changes
- **Tailwind Config**: Defined custom "glow" theme tokens and utilities in `global.css`.
- **Component Refactoring**: Migrated `GlowSidemenu.tsx`, `TGCLogo.astro`, `Hero.astro`, `ProductShowcase.astro`, `ErrorBoundary.jsx`, and `Header.astro` to 100% Tailwind.
- **Cleanup**: Removed `GlowSidemenu.css` and all static inline style attributes from custom components.

## Objective
The Gym Bros Community styling system is currently a mix of Tailwind CSS, external CSS files, and inline styles. This proposal outlines a comprehensive migration to 100% Tailwind CSS (v4) to improve maintainability, reduce CSS bundle size, and leverage the power of Tailwind's centralized design system.

## Key Changes
- **Tailwind Config**: Update `src/styles/global.css` with new custom theme tokens for "glow" effects and custom typography.
- **Component Refactoring**:
    - `GlowSidemenu.tsx`: Fully migrate from `GlowSidemenu.css` to Tailwind utilities.
    - `TGCLogo.astro`: Remove inline letter-spacing in favor of Tailwind `tracking-[0.3em]`.
    - `Hero.astro` & `ProductShowcase.astro`: Replace inline container styles with Tailwind utilities.
    - `ErrorBoundary.jsx`: Add Tailwind-based fallback styling.
    - `Countdown.jsx`: Clean up and standardize existing Tailwind usage.
- **Cleanup**: Delete redundant CSS files and remove unused inline style attributes.

## Benefits
- **Consistent Design**: All styling is driven by the Tailwind theme.
- **Improved DX**: Developers only need to look at the component code to understand its appearance.
- **Performance**: Tailwind's utility-first approach minimizes CSS bloat.
- **Maintainability**: Centralized tokens in `global.css` allow for project-wide styling updates in one place.

## Success Criteria
- All custom components are styled exclusively with Tailwind CSS.
- No functional regressions in GSAP animations or UI layout.
- `GlowSidemenu.css` is removed from the project.
- No inline `style` attributes remain in custom components for static styling.

## Risks & Mitigations
- **GSAP Breakdown**: If GSAP selectors are accidentally removed, animations will fail. *Mitigation*: Maintain existing class names as hooks for GSAP while applying styling via Tailwind.
- **UI Deviations**: Complex effects like `text-shadow` might look different. *Mitigation*: Recreate these exactly using Tailwind's arbitrary values or custom theme utilities.
