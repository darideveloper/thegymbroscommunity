# Spec Delta: glow-sidemenu

## MODIFIED Requirements

### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. The menu MUST be renamed to "GlowDrawer" and rendered via a React Portal to the `document.body`. When the drawer is open, the body scroll MUST be locked. **The component MUST wait for initial client-side mount before rendering the Portal to ensure hydration stability.**

#### Scenario: Hydration Stability
-   **Given**: `GlowDrawer` is included in an Astro page as a Client Component.
-   **When**: The page is initially loaded (SSR) and hydrated on the client.
-   **Then**: The component MUST NOT render any Portal content during the first client-side pass (it returns `null`).
-   **Then**: The component MUST ONLY render the Portal after the `useEffect` hook has triggered on the client (it returns `createPortal`).
-   **Then**: No "Hydration failed" or "mismatch" errors appear in the browser console.
