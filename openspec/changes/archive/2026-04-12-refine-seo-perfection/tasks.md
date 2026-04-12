# Tasks: Refine SEO Architecture

## Phase 1: Constants Refinement
- [x] Add trailing slash to `BUSINESS_DATA.url` in `src/lib/constants.ts`.

## Phase 2: BaseSEO Logic Perfection
- [x] Implement `normalizeCanonical` helper in `src/components/utils/base/BaseSEO.astro`.
- [x] Migrate all image and canonical URLs in `BaseSEO.astro` to use the `URL` constructor.
- [x] Add explicit `<meta name="robots" />` and `<meta name="theme-color" />` tags.

## Phase 3: Validation
- [x] Build the site and verify canonical URLs in `dist/index.html`.
- [x] Ensure all JSON-LD image URLs are absolute.
- [x] Verify `robots` and `theme-color` tags are correctly rendered.
