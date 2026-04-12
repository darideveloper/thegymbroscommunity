# Capability: Background Rendering

## ADDED Requirements

### Requirement: Layout support for background layers
The Layout component MUST support placing background elements (like `LiquidEther`) beneath the content and the base background color.

#### Scenario: Base background layer visibility
-   **Given**: `Layout.astro` is used to wrap page content.
-   **Then**: The `body` element background is `transparent` (overriding default opaque backgrounds).
-   **Then**: A fixed `div` with `z-index: -20` is rendered as the first child of `body`.
-   **Then**: This `div` has the hex background color `bg-[#060010]`.

### Requirement: LiquidEther as a home page background
The `LiquidEther` component SHALL be rendered on the home page as a background effect behind all sections.

#### Scenario: Visibility and Animation
-   **Given**: `index.astro` is rendered.
-   **Then**: `LiquidEther` is rendered in a fixed `div` with `z-index: -10`.
-   **Then**: `LiquidEther` is visible between the base background layer (`z-[-20]`) and the content (`z-0` or higher).
-   **Then**: `LiquidEther` is instantiated with `client:only='react'` to ensure proper initialization of its WebGL context.
-   **Then**: `LiquidEther` correctly receives and reacts to mouse movements across the whole page.
