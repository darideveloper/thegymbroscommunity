## ADDED Requirements

### Requirement: Simulated Product API
- The system SHALL provide a function `getProducts()` that returns an array of product objects.
- The product objects SHALL contain at least an `image` reference and a `text` title.

#### Scenario: Dynamic Image Loading
Given images exist in `src/assets/products/`, when `getProducts()` is called, it shall return a list containing all discovered images.
