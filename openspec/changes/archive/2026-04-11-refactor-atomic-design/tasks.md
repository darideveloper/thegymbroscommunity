## 1. Directory Setup
- [x] 1.1 Create `src/components/atoms`, `src/components/molecules`, and `src/components/organisms` directories.

## 2. Component Migration
- [x] 2.1 Move `Button.tsx`, `TGCLogo.astro`, `GradualBlur.jsx`, `ErrorBoundary.jsx` to `atoms/`.
- [x] 2.2 Move `LaserFlow.jsx`, `ScrollVelocity.jsx`, `CircularGallery.jsx`, `Countdown.jsx` to `molecules/`.
- [x] 2.3 Move `GlowSidemenu/GlowSidemenuToggle.tsx` to `molecules/`.
- [x] 2.4 Move `GlowSidemenu/GlowSidemenu.tsx` to `organisms/`.
- [x] 2.5 Move `GlowSidemenu/GlowSidemenuWrapper.tsx` to `organisms/` and rename to `GlowSidemenuNav.tsx`.
- [x] 2.6 Move `MagicBento.jsx` to `organisms/`.
- [x] 2.7 Update internal imports in moved components (e.g., CSS imports, utility imports).

## 3. Section Organisms Creation
- [x] 3.1 Create `src/components/organisms/Hero.astro` wrapping `LaserFlow` with proper sizing and positioning.
- [x] 3.2 Create `src/components/organisms/ProductShowcase.astro` wrapping `ScrollVelocity` and `CircularGallery`.
- [x] 3.3 Create `src/components/organisms/About.astro` wrapping `MagicBento`.

## 4. Page & Layout Refactor
- [x] 4.1 Refactor `src/pages/index.astro` to use the new organisms.
- [x] 4.2 Update `src/layouts/Layout.astro` to import `GlowSidemenuNav` from the new path.

## 5. Validation
- [x] 5.1 Run `npm run dev` to verify all components render correctly.
- [x] 5.2 Check console for any missing asset or import errors.
