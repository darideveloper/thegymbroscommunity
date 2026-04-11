# Design: Glow Sidemenu Component

## Architecture
The `GlowSidemenu` will be a standalone React component in `src/components/GlowSidemenu/`. It will use GSAP for all animations to ensure high performance and complex timing control. It will include a logo header using `src/assets/logo.webp`.

### Component Structure
- `GlowSidemenu.tsx`: Main component logic, handles the logo image from `src/assets/logo.webp`.
- `GlowSidemenu.css`: Component-specific styles (Glow effect, layout, logo sizing).
- `GlowSidemenuToggle.tsx`: The trigger button (separate to allow placement in headers/layouts).

## Visual Identity
- **Logo**: Integration of `src/assets/logo.webp` in the top-left area of the menu header, styled for clarity against the black background.
- **Background**: Solid black (`#000`) with a configurable opacity fade or a blur backdrop.
- **Typography**: High contrast white text with a customizable glow (using `text-shadow` or `drop-shadow`).
- **Animations**: 
  - Menu Panel: `xPercent` or `opacity` fade.
  - Menu Items: Staggered `y` and `opacity` entrance.
  - Glow Effect: Pulsing or subtle intensity animation on hover.

## Interaction Design
- **Trigger**: A button that toggles the `isOpen` state.
- **Overlay**: Clicking the background overlay (if visible) or the menu panel's "outside" area closes the menu.
- **Keyboard**: ESC key support to close the menu.

## Dependencies
- `gsap`: For animations.
- `clsx` & `tailwind-merge`: For styling.
- `lucide-react`: For icons (Close, Menu).
