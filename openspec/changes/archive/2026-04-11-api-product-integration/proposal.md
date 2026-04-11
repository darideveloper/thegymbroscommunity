# Proposal: API Product Integration

## Why
Integrate product images into the index page slider via a simulated API layer to prepare for future backend integration and improve maintainability. The project currently has static product images in `src/assets/products/`. The index page uses a `CircularGallery` slider which lacks dynamic data binding. By creating a service layer (`src/lib/api/products.ts`), we decouple data fetching from the UI.

## What Changes
1.  Create `src/lib/api/products.ts` to simulate API fetching.
2.  Refactor `src/pages/index.astro` to consume product data.
3.  Update `CircularGallery.jsx` to render dynamic items.

## Architectural Reasoning
- **Separation of Concerns:** UI components should not know how data is fetched.
- **Maintainability:** Adding/removing products in the assets folder should not require code changes.
- **Astro Integration:** Use server-side rendering in Astro pages for data fetching.
