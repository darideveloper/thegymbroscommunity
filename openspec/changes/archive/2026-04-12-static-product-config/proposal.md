---
change-id: static-product-config
title: Configure Static Product Data with Custom Names
status: proposed
author: daridev
description: Replaces dynamic image discovery with a static, hardcoded configuration in the product API to support custom titles for each product.
---

# Proposal: Configure Static Product Data with Custom Names

## Why
The current dynamic image discovery in `src/lib/api/products.ts` automatically generates product titles from filenames. This approach is limited because:
1.  **Limited Naming**: Titles like `1-product` or `12-product` are not user-friendly or descriptive.
2.  **Order Sensitivity**: The order of images is determined by the filesystem or the glob resolver, making it difficult to prioritize specific products.
3.  **Branding**: A curated community platform requires specific, intentional naming for its product showcase.

## What Changes
Modify `src/lib/api/products.ts` to:
1.  Define a static configuration object that maps image filenames to descriptive, custom titles.
2.  Maintain the use of `import.meta.glob` (or transition to explicit imports) to ensure Vite continues to process, hash, and optimize the assets in `src/assets/products/`.
3.  Update the `getProducts()` function to return the items with their new custom names and optimized image sources.

## Scope
-   `src/lib/api/products.ts`: Update API logic to use static mapping.
-   `openspec/specs/product-api/spec.md`: Update requirements to reflect static configuration instead of dynamic discovery.

## Technical Approach
We will implement a `PRODUCT_MAP` constant that defines the custom name for each known filename. By keeping the `import.meta.glob` but mapping its results through our custom configuration, we maintain the DRY (Don't Repeat Yourself) principle—we don't have to manually import 12 images if we don't want to, but we still get full control over the output.

**Example Implementation Concept:**
```typescript
const TITLES: Record<string, string> = {
  '1-product': 'Elite Performance Hoodie',
  '2-product': 'Pro Lift Wrist Wraps',
  // ...
};

export async function getProducts() {
  const images = import.meta.glob<{ default: { src: string } }>('/src/assets/products/*.png', { eager: true });
  return Object.entries(images).map(([path, resolver]) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return {
      image: resolver.default.src,
      text: TITLES[filename] || 'Premium Gear', // Fallback
    };
  });
}
```

## Constraints & Limitations
-   Adding new images still requires updating the `TITLES` mapping if a custom name is desired.
-   Assets must remain in `src/assets/products/` for Vite to process them correctly via the glob.
