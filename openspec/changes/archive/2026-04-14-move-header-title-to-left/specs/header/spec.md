# Spec Delta: Move Header Title to Left

## REMOVED Requirements
### Requirement: Centered H1 Site Title
The site's main title (H1, "The Gym Bros Community") MUST be prominently displayed in the horizontal center of the global header using a grid-based 3-column layout.

#### Scenario: Title is centered and displayed
- **WHEN** the header is rendered
- **THEN** the H1 MUST display "The Gym Bros Community" using the `BlurText` component, and be positioned exactly in the middle grid cell.

## ADDED Requirements
### Requirement: Left-Aligned Site Title next to Logo
The site's main title (H1, "The Gym Bros Community") MUST be displayed on the left side of the global header, positioned immediately to the right of the `TGCLogo` with a clear horizontal gap.

#### Scenario: Title is positioned next to logo
- **WHEN** the header is rendered
- **THEN** the H1 MUST be logically grouped with the `TGCLogo` in a left-aligned container (e.g., `flex` or `grid` column) with a `gap-4` or equivalent spacing.
- **AND** the title MUST NOT be centered in the header.

## MODIFIED Requirements
### Requirement: Shrinking Scroll Effect
The header, logo, and H1 font size MUST shrink dynamically when the user scrolls down (e.g., more than 50px). Additionally, the font sizes for both the logo and the H1 MUST be explicitly reduced by ~30% for mobile devices in both scrolled and unscrolled states, while maintaining larger text sizes on desktop (sm breakpoint and above).

#### Scenario: Shrink on scroll
- **GIVEN** the user is at the top of the page
- **WHEN** the user scrolls down beyond 50px
- **THEN** the header's height MUST decrease, the logo MUST scale down, and the H1 font size MUST smoothly transition to a smaller size using tailwind classes triggered by a JavaScript scroll event listener. On mobile devices, these text sizes MUST be 30% smaller than their previous defaults in all states.
- **AND** the relative positioning (Left-Aligned next to Logo) MUST be maintained during the transition.
