# Design: Fix LiquidEther Background Visibility

## Overview
The issue is a classic CSS stacking context problem combined with SSR hydration constraints. 

### Stacking Context Challenge
In CSS, an element with `z-index: -1` (or lower) is placed behind its parent's content and its parent's background. If the `body` or `html` has an opaque background, any child with a negative `z-index` will be invisible.

### Solution Stacking
1.  `html`/`body`: Set background to `transparent` to avoid obscuring negative `z-index` layers.
2.  `BackgroundLayer` (`z-[-20]`, `bg-[#060010]`): A fixed `div` that handles the base color.
3.  `LiquidEtherEffect` (`z-[-10]`, `fixed inset-0`): The animated component sits between the base and the content.
4.  `Content` (`z-0`+): All components like `Hero`, `ProductShowcase`, and `About`.

### Hydration Strategy
The `LiquidEther` component uses `THREE.js` and requires access to browser APIs like `window` and `document`. Using `client:load` can cause hydration mismatches or SSR errors if it starts executing too early or during the server phase. 

**Update**: `client:only='react'` is used to ensure the component is exclusively handled by React in the browser environment.

## Implementation Details

### `src/layouts/Layout.astro`
Remove the `bg-[#060010]` from the `body` tag and replace it with `bg-transparent`. Add the base background layer as the first child of the body.

```astro
  <body class='relative min-h-screen bg-transparent'>
    <!-- Base background layer -->
    <div class="fixed inset-0 z-[-20] bg-[#060010]" aria-hidden="true"></div>
    <Header />
    <slot />
  </body>
```

### `src/pages/index.astro`
Configure the `LiquidEther` wrapper with `fixed inset-0` and `z-[-10]`. Use `client:only='react'` for instantiation.

```astro
  <div class='fixed inset-0 z-[-10]'>
    <LiquidEther ... client:only='react' />
  </div>
```

## Verification
1.  **Background Color**: Confirm that the `#060010` color is correctly visible across all pages.
2.  **Animation**: Confirm `LiquidEther` is animating and interactive on the Home page.
3.  **Content Accessibility**: Verify that Hero, Products, and About sections are visible and clickable (not obscured by the background layer).
