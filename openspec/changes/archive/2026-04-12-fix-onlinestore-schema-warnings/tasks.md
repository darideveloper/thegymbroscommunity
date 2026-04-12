# Tasks: Fix OnlineStore Schema Warnings

## Phase 1: Code Cleanup
- [x] Remove `priceRange` from `BUSINESS_DATA` in `src/lib/constants.ts`.
- [x] Remove `priceRange` property from `organizationJson` in `src/components/utils/base/BaseSEO.astro`.

## Phase 2: Validation
- [x] Build the site and verify that `priceRange` is no longer present in the `OnlineStore` object in `dist/index.html`.
