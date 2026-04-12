# Capability: Title Scaling

## ADDED Requirements

### Requirement: Title Scaling in CircularGallery
- The `CircularGallery` component SHALL scale titles proportionally such that they do not exceed 80% of the image plane's width.
- The `CircularGallery` component SHALL maintain the aspect ratio of the title when scaling it down to fit within the `maxWidth` constraint.

#### Scenario: Product Name fits inside the card
- **GIVEN** a `CircularGallery` with a product name "Apple"
- **WHEN** the title mesh is created
- **THEN** the title mesh SHALL be scaled to its default height (25% of the plane height) and its width SHALL be calculated based on the text's aspect ratio.

#### Scenario: Product Name is too long for the card
- **GIVEN** a `CircularGallery` with a product name "Organic Extra Virgin Olive Oil from Greece"
- **WHEN** the title mesh is created and the calculated width exceeds 80% of the image plane width
- **THEN** the title mesh width SHALL be clamped to 80% of the image plane width and its height SHALL be scaled down proportionally to preserve the aspect ratio.
