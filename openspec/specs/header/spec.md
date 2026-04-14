# header Specification

## Purpose
TBD - created by archiving change add-sticky-header. Update Purpose after archive.
## Requirements
### Requirement: Sticky Global Header
The project MUST have a sticky, global navigation bar (`Header.astro`) that remains fixed at the top of the viewport. It MUST feature a "liquid crystal" (glassmorphism) background effect achieved through `backdrop-filter: blur()`, semi-transparent backgrounds, and subtle borders.

#### Scenario: Header is fixed
- **GIVEN** the user scrolls down any page
- **WHEN** the scroll position changes
- **THEN** the header MUST remain pinned at the top (`fixed top-0`) and exhibit a glass-like transparency.

### Requirement: Shrinking Scroll Effect
The header, logo, and H1 font size MUST shrink dynamically when the user scrolls down (e.g., more than 50px). Additionally, the font sizes for both the logo and the H1 MUST be explicitly reduced by ~30% for mobile devices in both scrolled and unscrolled states, while maintaining larger text sizes on desktop (sm breakpoint and above).

#### Scenario: Shrink on scroll
- **GIVEN** the user is at the top of the page
- **WHEN** the user scrolls down beyond 50px
- **THEN** the header's height MUST decrease, the logo MUST scale down, and the H1 font size MUST smoothly transition to a smaller size using tailwind classes triggered by a JavaScript scroll event listener. On mobile devices, these text sizes MUST be 30% smaller than their previous defaults in all states.
- **AND** the relative positioning (Left-Aligned next to Logo) MUST be maintained during the transition.

### Requirement: Thematic Navigation Labels
Navigation labels MUST use high-energy Spanish terminology that reflects the "Gym Bros" brand voice.

#### Scenario: Primary navigation labels
- **GIVEN** the header or side menu is rendered
- **THEN** the primary links MUST be labeled "Inicio" (Home), "Productos" (Products), and "Acerca de" (About).

### Requirement: Left-Aligned Site Title next to Logo
The site's main title (H1, "The Gym Bros Community") MUST be displayed on the left side of the global header, positioned immediately to the right of the `TGCLogo` with a clear horizontal gap.

#### Scenario: Title is positioned next to logo
- **WHEN** the header is rendered
- **THEN** the H1 MUST be logically grouped with the `TGCLogo` in a left-aligned container (e.g., `flex` or `grid` column) with a `gap-4` or equivalent spacing.
- **AND** the title MUST NOT be centered in the header.

