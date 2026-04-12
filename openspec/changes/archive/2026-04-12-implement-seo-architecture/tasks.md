# Tasks: Implement SEO Architecture

## Phase 1: Infrastructure
- [x] Install `@astrojs/sitemap` dependency.
- [x] Update `astro.config.mjs` with `site` and `sitemap()`.
- [x] Create `src/pages/robots.txt.ts` for dynamic robots file.

## Phase 2: Core Data & Constants
- [x] Create `src/lib/constants.ts` with site and business metadata.
- [x] Refine `src/lib/constants.ts` with e-commerce keywords and social links.

## Phase 3: SEO Components
- [x] Create `src/components/utils/base/BaseSEO.astro` (the SEO engine).
- [x] Update `src/components/utils/base/BaseSEO.astro` to include Twitter Cards and advanced OG tags.

## Phase 4: Layout & Page Integration
- [x] Refactor `src/layouts/Layout.astro` to include `<slot name="seo" />` and Spanish lang.
- [x] Update `src/pages/index.astro` to use `BaseSEO` component.
- [x] Update `src/pages/index.astro` to use `ClothingStore` jsonType.

## Validation
- [x] Verify `sitemap-index.xml` is generated during build.
- [x] Check `robots.txt` output.
- [x] Validate JSON-LD structured data on the home page.
- [x] Validate Twitter Cards and Open Graph Site Name in the final build.
