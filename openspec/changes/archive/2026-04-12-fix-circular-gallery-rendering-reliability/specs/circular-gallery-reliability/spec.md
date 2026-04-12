# circular-gallery-reliability Specification Delta

## MODIFIED Requirements
### Requirement: CircularGallery Rendering
- The `CircularGallery` component SHALL handle image loading such that the `onload` handler is registered before loading begins.
- The `CircularGallery` component SHALL update the WebGL texture immediately upon image load completion.
- The `CircularGallery` component SHALL NOT use `crossOrigin='anonymous'` for local assets to avoid CORS issues.
- The `CircularGallery` component SHALL NOT generate mipmaps for image textures to prevent driver crashes with NPOT dimensions.

#### Scenario: Robust Loading
- **GIVEN** a `CircularGallery` component rendering a set of images
- **WHEN** those images are already in the browser cache or loaded fresh
- **THEN** all images SHALL be correctly displayed on their respective 3D planes without loading race conditions or driver panics.

## ADDED Requirements
### Requirement: Title Font Propagation
- The `CircularGallery` SHALL pass the `font` property correctly to the `Title` constructor.
- The `CircularGallery` SHALL safely extract numeric font sizes from CSS font shorthand strings using regular expressions to prevent `NaN` canvas dimensions.

#### Scenario: Consistent Typography
- **GIVEN** a `CircularGallery` with a custom `font` prop (e.g., "bold 30px Figtree")
- **WHEN** product titles are rendered
- **THEN** the titles SHALL use the specified font and avoid triggering `INVALID_VALUE: texImage2D: no canvas` errors.
