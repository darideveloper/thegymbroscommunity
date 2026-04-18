# magic-bento-layout Specification

## Purpose
TBD - created by archiving change fix-magic-bento-title-clamping. Update Purpose after archive.
## Requirements
### Requirement: Title Visibility
The `MagicBento` component titles **SHALL** be fully visible within a maximum of two lines without truncation.

#### Scenario: Long Title Fitting
- **Given** a `MagicBento` card has the title "Sin Descanso. Sin Concesiones."
- **When** the card is rendered in a standard grid position
- **Then** the title should fit within two lines
- **And** no ellipsis should be present.

