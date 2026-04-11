# Change: Add Sticky Global Header with Centered H1

## Why
The site needed a consistent, professional navigation and branding experience across all pages. Moving the site title (H1) to a sticky header ensures brand visibility regardless of scroll position, while adding a "liquid crystal" effect and shrinking animation enhances the premium, high-interactivity aesthetic of the project.

## What Changes
- **MODIFIED** `logo` capability: Moved logo from fixed layout div to the new `Header` organism and added a shrinking scroll effect.
- **ADDED** `header` capability: Introduced a sticky, global navigation bar with a glassmorphism (liquid crystal) background.
- **MODIFIED** `glow-sidemenu` capability: Refactored toggle to be position-agnostic and integrated into the header.
- **MODIFIED** `component-library` capability: Added `Header.astro` as a primary organism for site-wide use.
- **MODIFIED** `index.astro`: Removed the large H1 from the Hero section as it was moved to the header.

## Impact
- Affected specs: `specs/logo/spec.md`, `specs/glow-sidemenu/spec.md`, `specs/component-library/spec.md`, `specs/header/spec.md` (New)
- Affected code: `src/components/organisms/Header.astro`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `src/components/organisms/GlowSidemenuNav.tsx`
