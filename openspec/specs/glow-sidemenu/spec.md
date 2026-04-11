# glow-sidemenu Specification

## Purpose
TBD - created by archiving change implement-glow-sidemenu. Update Purpose after archive.
## Requirements
### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. It MUST NOT use `box-shadow` to avoid repaint performance issues during translation, and MUST utilize `will-change: transform, opacity` for hardware acceleration.

#### Scenario: Menu Open
When the user clicks the menu toggle button, the black panel smoothly slides and fades into view without frame drops.

### Requirement: Glowing Menu Items
Menu text items SHALL feature a "glow" effect, achieved through CSS text-shadow, making them stand out against the black background.

#### Scenario: Visual Inspection
When the menu is open, the text links (e.g., "Home", "About") display a soft, white or neon glow that enhances their visibility and aesthetic.

### Requirement: GSAP Staggered Entrance
Menu items SHALL animate into view sequentially (staggered) after the main panel has faded in, using snappy timings (e.g., 0.3s duration, 0.05s stagger) and MUST utilize `will-change: transform, opacity` to ensure 60fps performance. They MUST use `autoAlpha` instead of `opacity` in GSAP for performance.

#### Scenario: Staggered Loading
When the menu opens, the links animate rapidly from `autoAlpha: 0` to `autoAlpha: 1` and `y: 20` to `y: 0`, feeling immediately responsive. Also, the `.glow-sidemenu-link` hover transitions MUST use specific CSS properties instead of `all`.

### Requirement: Close Interaction (Click Outside & Close Button)
The menu SHALL close when the user interacts with the close button or clicks any area outside the main content of the menu. The overlay MUST use a solid semi-transparent background color, MUST NOT use `backdrop-filter: blur`, and MUST use `will-change: opacity` to prevent GPU bottlenecks during opacity animations.

#### Scenario: Click Outside
Clicking on the dark background overlay triggers the closing animation, which executes smoothly without causing browser layout thrashing.

### Requirement: Responsive Toggle Button
A menu toggle button MUST be integrated into the `Header.astro` component on the right-most section of the header. The component MUST be refactored to support flexible, position-agnostic placement while remaining functional on both mobile and desktop resolutions.

#### Scenario: Header Toggle Presence
- **GIVEN** the user navigates to any page
- **WHEN** the header is rendered
- **THEN** the menu toggle MUST be visible and functional in the right-most section of the header.

### Requirement: Integrated New Logo
The `GlowSidemenu` MUST use the new logo from `src/assets/logo.webp` in its header, replacing the old logo reference.

#### Scenario: Logo Presence in Menu
When the menu is open, the logo `src/assets/logo.webp` should be clearly visible in the top-left area of the menu header.

### Requirement: Legacy StaggeredMenu Component Removal
The `StaggeredMenu` component and its associated CSS MUST be removed from the project once the `GlowSidemenu` is fully functional.

#### Scenario: Code Cleanup
Deleting `src/components/StaggeredMenu.jsx` and `src/components/StaggeredMenu.css` does not cause any compilation or runtime errors in the final build.

