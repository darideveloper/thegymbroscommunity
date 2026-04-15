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
The logo MUST scale down to approximately 75% of its original size using a CSS transition triggered by the header's scrolled state (`data-scrolled="true"`).

#### Scenario: Logo scaling on scroll
- **GIVEN** the header is at the top of the viewport
- **WHEN** the user scrolls down beyond 50px
- **THEN** the logo MUST smoothly scale down by ~25% from its unscrolled height using a Tailwind `scale` transformation.
- **AND** the transformation MUST maintain the left-aligned origin (`origin-left`) to preserve alignment with the site title.

### Requirement: Thematic Navigation Labels
Navigation labels MUST use high-energy Spanish terminology that reflects the "Gym Bros" brand voice.

#### Scenario: Primary navigation labels
- **GIVEN** the header or side menu is rendered
- **THEN** the primary links MUST be labeled "Inicio" (Home), "Productos" (Products), and "Acerca de" (About).

