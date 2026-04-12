# product-data Specification

## Purpose
TBD - created by archiving change static-product-config. Update Purpose after archive.
## Requirements
### Requirement: Static Product Configuration
- The `getProducts()` function SHALL return a hardcoded collection of product data including optimized image sources and custom titles.
- The `getProducts()` function SHALL NOT rely solely on filenames for generating user-visible titles.
- The system SHALL provide descriptive, human-readable names for each of the 12 primary products.

#### Scenario: Retrieval with Custom Names
- **WHEN** the `getProducts()` function is called
- **THEN** it SHALL return an array where each object has a unique `image` path and a specific `text` title (e.g., "Elite Tech Tee" instead of "1-product").

