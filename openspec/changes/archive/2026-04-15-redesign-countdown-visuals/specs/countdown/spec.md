# Capability: Countdown

## ADDED Requirements

### Requirement: Classic Digital Clock Visual Style
The countdown SHALL be styled as a cohesive "digital clock" screen with a single background and professional digital typography.

#### Scenario: Centered Digital Clock Layout
- **WHEN** the Hero section is rendered
- **THEN** the countdown MUST be horizontally centered and full-width on the screen.
- **AND** the countdown MUST use a professional digital font (e.g., Orbitron).
- **AND** all time units MUST be contained within a single semi-transparent black background ("digital screen").
- **AND** the numbers MUST use `tabular-nums` to ensure a consistent digital spacing.
- **AND** the layout MUST be responsive, scaling the clock face according to the viewport width.
