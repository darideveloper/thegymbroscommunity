# glow-sidemenu Specification Delta

## MODIFIED Requirements
### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. The menu MUST be renamed to "GlowDrawer" and rendered via a React Portal to the `document.body`. When the drawer is open, the body scroll MUST be locked. **The component MUST wait for initial client-side mount before rendering the Portal to ensure hydration stability.**

#### Scenario: Hydration Stability
-   **Given**: `GlowDrawer` is included in an Astro page as a Client Component.
-   **When**: The page is initially loaded (SSR) and hydrated on the client.
-   **Then**: The component does not render any Portal content during the first client-side pass.
-   **Then**: No "Hydration failed" or "mismatch" errors appear in the browser console.
