# glow-sidemenu Specification

## Purpose
TBD - created by archiving change implement-glow-sidemenu. Update Purpose after archive.
## Requirements
### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. The menu MUST be renamed to "GlowDrawer" and rendered via a React Portal to the `document.body`. When the drawer is open, the body scroll MUST be locked. The component MUST wait for initial client-side mount before rendering the Portal to ensure hydration stability. **The GSAP animations MUST NOT be initialized until after the component has mounted and the target elements are confirmed to be present in the DOM.**

#### Scenario: GSAP Initialization
-   **Given**: `GlowDrawer` is included in an Astro page as a Client Component.
-   **When**: The component mounts and `isMounted` transitions from `false` to `true`.
-   **Then**: The custom hook `useGlowDrawerAnimation` runs its initialization.
-   **And**: GSAP correctly queries the newly rendered DOM elements and successfully builds the timeline, allowing the animation to play upon toggle.

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
A menu toggle button MUST be integrated into the `Header.astro` component on the right-most section of the header. The component MUST be refactored to support flexible, position-agnostic placement while remaining functional on both mobile and desktop resolutions. The toggle button MUST display the text label "MENU".

#### Scenario: Header Toggle Presence
- **GIVEN** the user navigates to any page
- **WHEN** the header is rendered
- **THEN** the menu toggle MUST be visible and functional in the right-most section of the header.

### Requirement: Integrated New Logo
The `GlowDrawer` MUST use a logo in its header. **The logo URL MUST be customizable via a prop, defaulting to `/assets/logo.webp`.**

#### Scenario: Logo Customization
Passing a custom `logoUrl` string to the `GlowDrawer` component updates the rendered image source.

### Requirement: Legacy StaggeredMenu Component Removal
The `StaggeredMenu` component and its associated CSS MUST be removed from the project once the `GlowSidemenu` is fully functional.

#### Scenario: Code Cleanup
Deleting `src/components/StaggeredMenu.jsx` and `src/components/StaggeredMenu.css` does not cause any compilation or runtime errors in the final build.

### Requirement: Flexible Slot-based Content
The `GlowDrawer` component MUST support the `children` pattern (slots), allowing any arbitrary React nodes to be rendered within the panel.

#### Scenario: Custom Content
Using `<GlowDrawer><div>Custom Content</div></GlowDrawer>` successfully renders the div inside the drawer panel.

### Requirement: Premium Hover Transitions
Navigation and social links MUST utilize a non-linear easing function (`cubic-bezier`) and subtle scaling/translation effects to provide a high-end interactive feel.

#### Scenario: Nav Hover
When hovering over a navigation link, it smoothly shifts right by `0.75rem` and scales by `5%` over `500ms`.

