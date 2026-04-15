# Capability: Countdown

## Purpose
This specification defines the behavior of the countdown capability, which provides a visual timer counting down to a configurable target date.
## Requirements
### Requirement: Display Remaining Time
The system SHALL display the remaining days, hours, minutes, and seconds until a specified target date using Spanish labels ("DÍAS", "HORAS", "MINS", "SEGS").

#### Scenario: Spanish Countdown Labels
- **WHEN** the countdown is rendered
- **THEN** the time unit labels MUST be "DÍAS", "HORAS", "MINS", and "SEGS".

### Requirement: Target Date Configuration
The target date for the countdown MUST be configurable via environment variables.

#### Scenario: Configuration via Environment Variable
- **WHEN** `PUBLIC_COUNTDOWN_TARGET_DATE` is set in the environment
- **THEN** the system uses this value as the target date.

### Requirement: Localized Accessibility Strings
The countdown component MUST provide descriptive accessibility strings (aria-labels) in Spanish that match the brand voice.

#### Scenario: Countdown screen reader label
- **GIVEN** a screen reader is active
- **WHEN** focusing the countdown
- **THEN** it MUST be announced as "PRÓXIMO LANZAMIENTO: [Date]".

### Requirement: Classic Digital Clock Visual Style
The countdown SHALL be styled as a cohesive "digital clock" screen with a single background and professional digital typography.

#### Scenario: Centered Digital Clock Layout
- **WHEN** the Hero section is rendered
- **THEN** the countdown MUST be horizontally centered and full-width on the screen.
- **AND** the countdown MUST use a professional digital font (e.g., Orbitron).
- **AND** all time units MUST be contained within a single semi-transparent black background ("digital screen") with 80% opacity.
- **AND** the numbers MUST use `tabular-nums` to ensure a consistent digital spacing.
- **AND** the layout MUST be responsive, scaling the clock face according to the viewport width.
- **AND** the clock size MUST be optimized for a balanced Hero section footprint.

