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

### Requirement: Centered H1 Site Title
The site's main title (H1, "The Gym Bros Community") MUST be prominently displayed in the horizontal center of the global header using a grid-based 3-column layout.

#### Scenario: Title is centered and displayed
- **WHEN** the header is rendered
- **THEN** the H1 MUST display "The Gym Bros Community" using the `BlurText` component, and be positioned exactly in the middle grid cell.

### Requirement: Shrinking Scroll Effect
The header, logo, and H1 font size MUST shrink dynamically when the user scrolls down (e.g., more than 50px). Additionally, the font sizes for both the logo and the H1 MUST be explicitly reduced by ~30% for mobile devices in both scrolled and unscrolled states, while maintaining larger text sizes on desktop (sm breakpoint and above).

#### Scenario: Shrink on scroll
- **GIVEN** the user is at the top of the page
- **WHEN** the user scrolls down beyond 50px
- **THEN** the header's height MUST decrease, the logo MUST scale down, and the H1 font size MUST smoothly transition to a smaller size using tailwind classes triggered by a JavaScript scroll event listener. On mobile devices, these text sizes MUST be 30% smaller than their previous defaults in all states.

### Requirement: Thematic Navigation Labels
Navigation labels MUST use high-energy Spanish terminology that reflects the "Gym Bros" brand voice.

#### Scenario: Primary navigation labels
- **GIVEN** the header or side menu is rendered
- **THEN** the primary links MUST be labeled "Inicio" (Home), "Productos" (Products), and "Acerca de" (About).

