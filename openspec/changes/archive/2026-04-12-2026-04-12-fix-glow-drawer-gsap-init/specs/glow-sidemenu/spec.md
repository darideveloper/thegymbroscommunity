# glow-sidemenu Specification

## MODIFIED Requirements
### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. The menu MUST be renamed to "GlowDrawer" and rendered via a React Portal to the `document.body`. When the drawer is open, the body scroll MUST be locked. The component MUST wait for initial client-side mount before rendering the Portal to ensure hydration stability. **The GSAP animations MUST NOT be initialized until after the component has mounted and the target elements are confirmed to be present in the DOM.**

#### Scenario: GSAP Initialization
-   **Given**: `GlowDrawer` is included in an Astro page as a Client Component.
-   **When**: The component mounts and `isMounted` transitions from `false` to `true`.
-   **Then**: The custom hook `useGlowDrawerAnimation` runs its initialization.
-   **And**: GSAP correctly queries the newly rendered DOM elements and successfully builds the timeline, allowing the animation to play upon toggle.
