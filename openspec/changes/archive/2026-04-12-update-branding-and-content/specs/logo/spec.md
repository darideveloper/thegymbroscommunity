## MODIFIED Requirements

### Requirement: Top-left logo placement
The logo from `src/assets/logo.webp` MUST be displayed in the left-most grid cell of the sticky global header (`Header.astro`) and MUST NOT be fixed separately in the layout body. The text-based fallback or companion text (if any) SHALL display "TGC".

#### Scenario: Logo presence in header
- **GIVEN** the user navigates to any page
- **WHEN** the sticky header renders
- **THEN** the logo MUST be visible in the left-most section of the header and the brand text MUST be "TGC".
