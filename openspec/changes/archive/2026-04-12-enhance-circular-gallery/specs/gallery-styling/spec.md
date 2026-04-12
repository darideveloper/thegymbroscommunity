# gallery-styling Specification

## Purpose
Define the visual styling requirements for the `CircularGallery` images, including constant blur and edge treatment.

## ADDED Requirements

### Requirement: Constant Image Blur
- The `CircularGallery` SHALL apply a constant blur effect to all gallery images by default.
- The blur SHALL be implemented as a multi-sample box blur in the `Media` fragment shader.
- The blur effect SHALL remain active regardless of the hover state.

#### Scenario: Persistent Blur
- **GIVEN** a `CircularGallery` component rendering a set of images
- **WHEN** the component is in any state (idle or hovered)
- **THEN** all images SHALL appear with a consistent 1.5% blur.

### Requirement: Shape Preservation (Hidden Overflow)
- The `CircularGallery` SHALL maintain its rounded rectangular shape for all images.
- All visual effects (blur, hover overlay, title) SHALL be clipped by the same rounded shape boundaries to maintain a "hidden overflow" effect.

#### Scenario: Rounded Edges with Effects
- **GIVEN** an image with a blur and/or hover overlay
- **WHEN** rendered on its 3D plane
- **THEN** the effects SHALL NOT bleed outside the rounded corners defined by the `uBorderRadius` uniform.
