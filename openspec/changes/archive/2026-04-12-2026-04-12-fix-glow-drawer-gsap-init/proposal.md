# Fix GlowDrawer GSAP Initialization

## Summary
The `GlowDrawer` animation was failing to play when the menu toggle was clicked. This proposal details the fix for the GSAP timeline initialization within the `useGlowDrawerAnimation` hook, ensuring it only runs after the component has mounted on the client and the portal elements are present in the DOM.

## Motivation
The `GlowDrawer` component uses a React Portal attached to `document.body`. To avoid hydration mismatches in Astro, it uses an `isMounted` state and returns `null` on the first server/client render. However, the custom hook `useGlowDrawerAnimation` was trying to initialize the GSAP timeline on that exact first render, when the DOM elements did not exist. This resulted in an empty GSAP timeline that did nothing when `isOpen` changed. By deferring the GSAP initialization until `isMounted` is true, the animations bind to the actual DOM nodes and play as expected.
