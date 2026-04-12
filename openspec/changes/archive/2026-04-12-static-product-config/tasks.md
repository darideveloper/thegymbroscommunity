# Tasks: Static Product Configuration

## Implementation
- [x] **Define Mapping**: Create a `TITLE_MAP` constant in `src/lib/api/products.ts` with custom names for the 12 primary products.
- [x] **Update Resolver**: Modify the `getProducts()` function to use the `TITLE_MAP` instead of dynamic title parsing.
- [x] **DRY Optimization**: Ensure new images that aren't in the mapping still fall back to a reasonable default.

## Validation
- [x] **Verify Count**: Confirm `getProducts()` still returns all 12 images.
- [x] **Check Names**: Validate that the titles (e.g., "Elite Tech Tee") are correctly applied to the corresponding images.
- [x] **Console Verification**: Add a temporary `console.log` in `index.astro` to inspect the results of `await getProducts()` during dev.
