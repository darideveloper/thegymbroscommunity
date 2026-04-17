# fonts Specification Delta (Refinement)

## MODIFIED Requirements

### Requirement: Global font configuration
**Description:** The application SHALL use Libre Baskerville and Noto Serif consistently across all rendering methods, including WebGL canvas textures.
#### Scenario:
Update `CircularGallery.jsx` to use `"Libre Baskerville"` as the default font for product titles rendered on the 3D plane.

## ADDED Requirements

### Requirement: Label legibility
**Description:** Small UI labels SHALL be optimized for legibility when using the Noto Serif font family.
#### Scenario:
Adjust `font-weight` or `letter-spacing` in `Countdown.jsx` and `MagicBento.css` if necessary to maintain clarity for uppercase labels.
