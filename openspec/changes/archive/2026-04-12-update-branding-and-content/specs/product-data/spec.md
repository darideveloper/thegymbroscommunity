## MODIFIED Requirements

### Requirement: Static Product Configuration
- The `getProducts()` function SHALL return a collection of product data in Spanish including optimized image sources and branded titles.
- The system SHALL provide "force-oriented" Spanish names for each product that align with the "Gym Bros" brand voice.

#### Scenario: Retrieval with Spanish Branded Names
- **WHEN** the `getProducts()` function is called
- **THEN** it SHALL return an array where all product titles are "Coming Soon".
