# Delta: Header Specification

## REMOVED Requirements

### Requirement: Left-Aligned Site Title next to Logo
The site's main title (H1, "The Gym Bros Community") MUST be displayed on the left side of the global header, positioned immediately to the right of the `TGCLogo` with a clear horizontal gap.

#### Scenario: Title is positioned next to logo
- **WHEN** the header is rendered
- **THEN** the H1 MUST be logically grouped with the `TGCLogo` in a left-aligned container (e.g., `flex` or `grid` column) with a `gap-4` or equivalent spacing.
- **AND** the title MUST NOT be centered in the header.
