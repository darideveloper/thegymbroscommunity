# background-rendering Specification

## Purpose
TBD - created by archiving change fix-liquid-ether-background-visibility. Update Purpose after archive.
## Requirements
### Requirement: Layout support for background layers
The Layout component MUST support placing background elements (like `LiquidEther`) beneath the content and the base background color.

#### Scenario: Base background layer visibility
-   **Given**: `Layout.astro` is used to wrap page content.
-   **Then**: The `body` element background is `transparent` (overriding default opaque backgrounds).
-   **Then**: A fixed `div` with `z-index: -20` is rendered as the first child of `body`.
-   **Then**: This `div` has the hex background color `bg-[#060010]`.

### Requirement: LiquidEther as a home page background
The `LiquidEther` component SHALL be rendered on the home page as a background effect behind all sections. **It MUST be compatible with mobile WebGL implementations by supporting both Float and HalfFloat texture types.**

#### Scenario: Mobile Compatibility
-   **Given**: `LiquidEther` is rendered on a mobile device (Android or iOS).
-   **Then**: The component detects the best available floating-point texture format.
-   **Then**: The background is visible and animated with the specified colors.
-   **Then**: No WebGL context initialization errors occur on mobile.

