# Proposal: Implement Comprehensive SEO Architecture

## Summary
This proposal outlines the implementation of a complete SEO and metadata architecture for "The Gym Bros Community" project, following the "Slot-and-Injection" pattern described in `@docs/seo.md`. This includes a centralized SEO engine and comprehensive structured data generation (JSON-LD).

## Problem
The current codebase lacks a structured SEO strategy. Metadata (titles, descriptions) is hardcoded or missing, there is no support for structured data (JSON-LD), and the project does not have a sitemap or dynamic robots.txt. This limits the site's visibility and search engine ranking.

## Proposed Solution
We will implement a modular SEO system consisting of:
1.  **Infrastructure:** Configuring `@astrojs/sitemap` and dynamic `robots.txt.ts`.
2.  **SEO Engine (`BaseSEO.astro`):** A core component to resolve metadata from multiple sources (props, constants) and inject standard, social (Open Graph & Twitter Cards), and comprehensive `@graph` structured data (JSON-LD) including `ClothingStore`, `WebSite`, and `ItemList` (Product Catalog) into the layout.
3.  **Layout Refactoring:** Updating `Layout.astro` to provide an injection point (`<slot name="seo" />`).

## Scope
- **Configuration:** `astro.config.mjs`, `package.json`, `src/pages/robots.txt.ts`.
- **Core Components:** `src/components/utils/base/BaseSEO.astro`.
- **Constants & Data:** `src/lib/constants.ts` (refined branding, business data, and social links).
- **Layout & Pages:** `src/layouts/Layout.astro`, `src/pages/index.astro`.

## Design Decisions
- **Slot-and-Injection Pattern:** Pages are responsible for providing their own SEO data via a named slot in the layout. This ensures flexibility and prevents layout bloat.
- **Fallback Hierarchy:** Metadata resolution follows: **Prop > Constant > Default**. This ensures that every page has at least basic SEO coverage.
- **Social Media Support:** Explicit support for Twitter Cards and advanced Open Graph tags for better social sharing.
- **Advanced JSON-LD (@graph):** Implements a multi-entity graph structure for brand identity and search features.
- **Product Catalog Schema:** Automatically generates `ItemList` and `Product` schemas for showcase sections to enable Google Rich Results.
- **Performance:** Preloading critical fonts is integrated into the SEO workflow.
