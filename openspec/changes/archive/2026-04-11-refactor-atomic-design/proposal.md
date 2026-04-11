# Change: Refactor Components to Atomic Design

## Why
The current component structure is flat and lacks clear separation of concerns, making it difficult to maintain and scale. The `index.astro` page is cluttered with direct React component imports and raw `div` wrappers, which obscures the logical structure of the page sections.

## What Changes
- **Atomic Design Structure**: Move existing components into `atoms`, `molecules`, and `organisms` subdirectories.
- **Organism Sections**: Create high-level Astro organisms (`Hero`, `ProductShowcase`, `About`) to encapsulate page sections.
- **Index Refactor**: Simplify `index.astro` by using the new organisms instead of raw component bits and `div` wrappers.

## Impact
- Affected specs: `component-library` (new), `logo` (modified).
- Affected code: `src/components/*`, `src/pages/index.astro`, `src/layouts/Layout.astro`.
