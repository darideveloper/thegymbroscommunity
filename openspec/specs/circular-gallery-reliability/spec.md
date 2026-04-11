# circular-gallery-reliability Specification

## Purpose
TBD - created by archiving change fix-circular-gallery-image-loading. Update Purpose after archive.
## Requirements
### Requirement: CircularGallery Rendering
- The `CircularGallery` component SHALL handle image loading such that the `onload` handler is registered before loading begins.
- The `CircularGallery` component SHALL update the WebGL texture immediately upon image load completion.
- The `CircularGallery` component SHALL NOT use `crossOrigin='anonymous'` for local assets to avoid CORS issues.

#### Scenario: Robust Loading
- **GIVEN** a `CircularGallery` component rendering a set of images
- **WHEN** those images are already in the browser cache or loaded fresh
- **THEN** all images SHALL be correctly displayed on their respective 3D planes without loading race conditions.

### Requirement: Shader Robustness
- The `CircularGallery` shader SHALL be robust against division by zero in aspect ratio calculations by using a small epsilon (e.g., 0.001) for dimensions.
- The `CircularGallery` uniforms for image and plane sizes SHALL be initialized to non-zero values (e.g., `[1, 1]`) to prevent `NaN` during startup.

#### Scenario: Smooth Startup
- **WHEN** the `CircularGallery` first mounts and before all image dimensions are fully calculated
- **THEN** the component SHALL NOT produce WebGL errors or render `NaN`-filled fragments.

