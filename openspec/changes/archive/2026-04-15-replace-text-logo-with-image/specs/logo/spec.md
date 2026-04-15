# logo Specification Delta

## ADDED Requirements

### Requirement: Image-based Logo
The brand logo MUST be displayed using the image file located at `/assets/logo.webp` (source `public/assets/logo.webp`). The text-based "TGC" identifier SHALL only be used as a fallback (alt text) or in contexts where an image is not technically feasible.

#### Scenario: Logo Image Rendering
- **GIVEN** the header or navigation component is rendered
- **WHEN** the browser loads the page
- **THEN** the logo MUST be an image (`<img>`) pointing to `/assets/logo.webp`.
- **AND** the image MUST have `alt="TGC Logo"` for accessibility.

#### Scenario: Responsive Sizing
- **GIVEN** different screen sizes
- **THEN** the logo MUST adjust its height proportionally to maintain clarity and fit within the header layout (e.g., larger on desktop, smaller on mobile).
