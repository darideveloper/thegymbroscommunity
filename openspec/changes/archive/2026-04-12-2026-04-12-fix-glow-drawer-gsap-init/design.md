# Design Document: GlowDrawer GSAP Initialization

## Context
The `GlowDrawer` component is rendered inside an Astro page (`Header.astro`) using the `client:load` directive. The component renders its content using a React Portal.

## Architecture

### The Hydration Problem
To prevent React from throwing hydration errors (server HTML vs client HTML mismatch), `GlowDrawer` uses an `isMounted` state pattern. It initially renders `null` and sets `isMounted` to true via a `useEffect`.

### The GSAP Race Condition
GSAP requires DOM nodes to exist when building a timeline, especially when querying elements by class name (e.g., `.glow-sidemenu-panel`). 

Since `GlowDrawer` initially renders `null`, the elements do not exist on the first render. `useGlowDrawerAnimation` runs its `useEffect` immediately, resulting in GSAP not finding any elements to bind the animations to. Furthermore, since the `useEffect` dependency array only tracked `containerRef` (a stable object reference), it never re-ran when the component actually mounted and the HTML elements were created.

### Solution
We extend `useGlowDrawerAnimation` to accept the `isMounted` state from its parent component. We use this state as both a guard (preventing GSAP from initializing) and a dependency (triggering GSAP initialization once `isMounted` flips to `true`).

See `specs/glow-sidemenu/spec.md` for the updated requirements.
