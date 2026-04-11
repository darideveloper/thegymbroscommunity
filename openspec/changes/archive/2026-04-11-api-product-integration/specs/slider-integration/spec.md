## ADDED Requirements

### Requirement: Slider Integration
- The `CircularGallery` component SHALL accept an `items` prop.
- The `index.astro` page SHALL pass the result of `getProducts()` to the `CircularGallery`.

#### Scenario: Rendering Dynamic Data
Given a list of products from `getProducts()`, when passed to `CircularGallery`, the component SHALL render the provided images and titles.
