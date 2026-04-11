## Context
The project currently has a flat `src/components` directory. Page sections are built directly in `index.astro` using individual React components and inline styles/divs.

## Goals
- Establish a clear hierarchy using Atomic Design.
- Clean up `index.astro` to improve readability.
- Standardize how sections are structured.

## Decisions

### Atomic Design Mapping
- **Atoms**: `Button.tsx`, `TGCLogo.astro`, `GradualBlur.jsx`, `ErrorBoundary.jsx`.
- **Molecules**: `LaserFlow.jsx`, `ScrollVelocity.jsx`, `CircularGallery.jsx`, `GlowSidemenuToggle.tsx`, `Countdown.jsx`.
- **Organisms**:
    - `Hero.astro` (wraps `LaserFlow`)
    - `ProductShowcase.astro` (wraps `ScrollVelocity` and `CircularGallery`)
    - `About.astro` (wraps `MagicBento`)
    - `GlowSidemenu.tsx`
    - `GlowSidemenuNav.tsx` (formerly `GlowSidemenuWrapper`)
    - `MagicBento.jsx` (High complexity grid)

### File Structure
```text
src/components/
├── atoms/
├── molecules/
└── organisms/
```

### Index Page Structure
The `index.astro` will now look like:
```astro
<Layout>
  <Hero />
  <ProductShowcase products={products} />
  <About />
</Layout>
```

## Risks / Trade-offs
- **Import Path Breaking**: Moving files will break all existing imports. This requires a systematic search-and-replace or careful manual update.
- **Astro/React Mix**: Organisms will be a mix of Astro (for sections) and React (for interactivity).

## Migration Plan
1. Create new directory structure.
2. Move files and update internal imports.
3. Create new Astro organisms.
4. Refactor `index.astro`.
5. Update `Layout.astro`.
