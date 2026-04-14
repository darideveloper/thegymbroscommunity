# Design: Move Header Title to Left

## Architectural Reasoning
The change involves moving from a 3-column grid to a 2-column flex or grid layout. The `h1` component will be logically grouped with the `TGCLogo` in a flex container on the left side of the header. This improves the logical grouping of branding elements.

## Component Changes

### `src/components/organisms/Header.astro`
- **Current:** `grid grid-cols-3`
  - Col 1: `TGCLogo`
  - Col 2: `h1` (centered)
  - Col 3: `GlowNavigationDrawer`
- **Target:** `flex justify-between items-center`
  - Left Flex Group: `TGCLogo` + `h1` (gap-4)
  - Right: `GlowNavigationDrawer`

## CSS Refinement
- Remove `text-center` from `h1` container.
- Update `BlurText` prop `className` to remove `justify-center`.
- Ensure the `h1` still shrinks correctly on scroll by keeping its existing responsive font-size classes.

## Performance Considerations
- No impact on performance as these are pure layout/CSS changes.
- Layout remains responsive.
