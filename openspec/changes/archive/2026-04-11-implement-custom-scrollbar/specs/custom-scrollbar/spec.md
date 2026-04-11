# Capability: Custom Scrollbar

## ADDED Requirements

### Requirement: The application SHALL use a branded custom scrollbar.
The default browser scrollbar MUST be replaced with a custom-styled version that uses the project's primary accent color.

#### Scenario: Global scrollbar styling
- **Given** the application is running.
- **When** the user scrolls on the `html` or `body` elements.
- **Then** the scrollbar should be thin (8px-12px width).
- **And** the scrollbar thumb should have rounded corners.
- **And** the scrollbar thumb color should match `var(--primary)`.
- **And** the scrollbar track should be transparent or match the theme's background.

### Requirement: Cross-browser scrollbar consistency MUST be maintained.
The custom scrollbar SHALL be implemented for both Webkit-based browsers (Chrome, Safari, Edge) and Firefox.

#### Scenario: Webkit-based browsers
- **Given** a user is on Chrome or Safari.
- **When** they view any scrollable content.
- **Then** the scrollbar should use the `::-webkit-scrollbar` pseudo-elements.

#### Scenario: Firefox support
- **Given** a user is on Firefox.
- **When** they view any scrollable content.
- **Then** the scrollbar should use `scrollbar-width` and `scrollbar-color`.
