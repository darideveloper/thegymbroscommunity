# header Specification

## MODIFIED Requirements

### Requirement: Centered H1 Site Title
The site's main title (H1, "The Gym Bros Community") MUST be prominently displayed in the horizontal center of the global header using a grid-based 3-column layout.

#### Scenario: Title is centered and displayed
- **WHEN** the header is rendered
- **THEN** the H1 MUST display "The Gym Bros Community" using the `BlurText` component, and be positioned exactly in the middle grid cell.

### Requirement: Shrinking Scroll Effect
The header, logo, and H1 font size MUST shrink dynamically when the user scrolls down (e.g., more than 50px).

#### Scenario: Shrink on scroll
- **GIVEN** the user is at the top of the page
- **WHEN** the user scrolls down beyond 50px
- **THEN** the header's height MUST decrease, the logo MUST scale down, and the H1 font size MUST smoothly transition to an approximately 30% smaller size using tailwind classes triggered by a JavaScript scroll event listener.
