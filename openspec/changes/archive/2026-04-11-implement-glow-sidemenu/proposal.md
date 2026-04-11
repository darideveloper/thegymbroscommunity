# Proposal: Implement Glow Sidemenu Component

## Why
The current `StaggeredMenu` component is complex and its GSAP animations are difficult to modify for specific visual requirements like a black background fade and glowing text effects.

## What Changes
Implement a new, more flexible `GlowSidemenu` component that focuses on a dark aesthetic with glowing text and smooth GSAP-powered transitions. Once the new menu is fully integrated and verified, the legacy `StaggeredMenu` component and its associated styles will be removed to maintain a clean codebase.

## Scope
- New `GlowSidemenu` React component.
- Custom CSS for the glow effect and dark theme.
- GSAP animations for opening, closing, and item staggering.
- Click-outside and close button interactions.
- Responsive design for mobile and desktop.
- Removal of `src/components/StaggeredMenu.jsx` and `src/components/StaggeredMenu.css`.

## Success Criteria
- The menu opens with a black fade effect.
- Menu items have a visible "glow" (text-shadow).
- The menu can be toggled by a button on both mobile and desktop.
- The menu closes when clicking outside or on a close button.
- Smooth animations at 60fps.
