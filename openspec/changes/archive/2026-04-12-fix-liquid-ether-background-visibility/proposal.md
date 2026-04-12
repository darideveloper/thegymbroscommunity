---
change-id: fix-liquid-ether-background-visibility
title: Fix LiquidEther Background Visibility
goal: Ensure LiquidEther renders as a background beneath page content without being hidden or overlapping.
---

# Proposal: Fix LiquidEther Background Visibility

## Context
The `LiquidEther` component, when used in `index.astro`, was either invisible or covering the content depending on its `z-index`. 

- At `z-index: -1`, it was hidden behind the `body`'s background color.
- At `z-index: 0` (or higher), it overlapped the content because it is `fixed` and appeared later in the DOM than the content sections.

## Objective
To correctly render `LiquidEther` as a full-page background by adjusting the stacking context, background positioning, and client-side rendering strategy.

## Strategy
1.  **Transparency**: Set the `body` background to transparent in `Layout.astro` to allow `z-index < 0` elements to be visible (overriding default opaque backgrounds from CSS).
2.  **Layering**: Add a dedicated base background layer `div` in `Layout.astro` at `z-index: -20` to preserve the default background color (`#060010`) for all pages.
3.  **Background Effect**: Position the `LiquidEther` wrapper in `index.astro` at `z-index: -10`, placing it between the base background and the page content.
4.  **Client-Only Rendering**: Use `client:only='react'` for the `LiquidEther` component to ensure it correctly initializes its WebGL/THREE.js context only in the browser, avoiding SSR issues.

## Impact
- **Visuals**: The `LiquidEther` effect is now correctly visible behind all page sections (Hero, ProductShowcase, About).
- **Architecture**: Moves the background color from a hardcoded `body` class to a layered `div`, allowing for more complex multi-layered background effects.
- **Reliability**: Ensures WebGL components are only loaded in the browser environment.
