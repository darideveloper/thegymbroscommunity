# Design: Navigation Reliability and Social Media Update

## Goals
- Ensure all navigation links (internal and external) are functional.
- Centralize social media configuration.
- Standardize anchor ID usage.

## Architecture
- **Constants**: `src/lib/constants.ts` will serve as the single source of truth for social media URLs.
- **Components**: `Header.astro` will dynamically pull social media items from `BUSINESS_DATA`.
- **Navigation**: Use section IDs (`id="products"`, `id="about"`) for smooth scrolling within the single-page layout.

## Decision Log
| Decision | Rationale |
| :--- | :--- |
| **Remove placeholders** | Better user experience by only showing active community channels (Instagram only for now). |
| **Add IDs to Organisms** | Organisms (`ProductShowcase`, `About`) represent the top-level semantic sections of the page. |
| **Keep Spanish labels** | Adheres to brand voice guidelines in `openspec/specs/header/spec.md`. |
