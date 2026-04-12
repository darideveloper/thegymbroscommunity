# gallery-hover Specification

## Purpose
Define the interaction and visual feedback requirements for the `CircularGallery` hover effects.

## ADDED Requirements

### Requirement: Dark Hover Overlay
- The `CircularGallery` SHALL implement an 80% black overlay effect that is triggered when a user hovers over an image.
- The black overlay SHALL transition smoothly (lerp) from 0% opacity to 80% upon hover.

#### Scenario: Hover Feedback
- **WHEN** a user hovers their mouse over a specific image in the `CircularGallery`
- **THEN** that image SHALL darken with an 80% black overlay effect.

### Requirement: Title Display & Visibility
- The image titles in the `CircularGallery` SHALL be hidden by default (zero opacity).
- The image titles SHALL appear centered in the middle of the image when the image is hovered.
- The image titles SHALL be rendered in white color.
- The titles SHALL use `depthTest: false` and a Z-offset of `0.5` to ensure they are visible over the 3D plane.

#### Scenario: Reveal Centered Title
- **WHEN** a user hovers over an image
- **THEN** the title SHALL become visible in white color.
- **AND** the title SHALL be positioned at the exact center of the image.

### Requirement: Interaction Accuracy
- The `CircularGallery` SHALL use container-relative mouse coordinates to detect hover accurately regardless of component positioning.

#### Scenario: Accurate Hover in Layout
- **GIVEN** a `CircularGallery` positioned within a complex page layout
- **WHEN** the mouse moves over a specific image
- **THEN** the component SHALL accurately trigger the hover state for that image.
