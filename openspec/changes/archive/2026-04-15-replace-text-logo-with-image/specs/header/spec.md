# header Specification Delta

## MODIFIED Requirements

### Requirement: Shrinking Scroll Effect
The logo MUST scale down to approximately 75% of its original size using a CSS transition triggered by the header's scrolled state (`data-scrolled="true"`).

#### Scenario: Logo scaling on scroll
- **GIVEN** the header is at the top of the viewport
- **WHEN** the user scrolls down beyond 50px
- **THEN** the logo MUST smoothly scale down by ~25% from its unscrolled height using a Tailwind `scale` transformation.
- **AND** the transformation MUST maintain the left-aligned origin (`origin-left`) to preserve alignment with the site title.
