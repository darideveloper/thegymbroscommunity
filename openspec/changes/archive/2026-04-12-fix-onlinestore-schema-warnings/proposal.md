# Proposal: Fix OnlineStore Schema Warnings

## Why
Search engine validators (like Google Rich Results Test) report warnings when the `priceRange` property is used on an `OnlineStore` object. This is because `OnlineStore` inherits from `Organization`, which does not support `priceRange` (a property reserved for `LocalBusiness` types). Removing this property resolves the warnings and ensures valid structured data.

## What Changes
We will implement the following:
1.  **Constants Update:** Remove `priceRange` from `BUSINESS_DATA` in `src/lib/constants.ts` since it's not applicable to the global store entity.
2.  **SEO Engine Update:** Remove the `priceRange` mapping from the `organizationJson` object in `src/components/utils/base/BaseSEO.astro`.

## Summary
This proposal fixes schema validation warnings by removing the unsupported `priceRange` property from the `OnlineStore` JSON-LD definition.

## Scope
- **Constants:** `src/lib/constants.ts`.
- **Components:** `src/components/utils/base/BaseSEO.astro`.
- **Documentation:** `openspec/changes/fix-onlinestore-schema-warnings/`.

## Design Decisions
- **E-commerce Hierarchy Alignment:** Since we previously migrated from `ClothingStore` (LocalBusiness) to `OnlineStore` (Organization), we must strictly adhere to the properties supported by the `Organization` hierarchy. Price relevance is already covered at the individual product level within the `ItemList` schema.
