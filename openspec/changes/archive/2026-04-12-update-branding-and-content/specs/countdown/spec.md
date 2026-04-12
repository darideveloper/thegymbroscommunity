## MODIFIED Requirements

### Requirement: Display Remaining Time
The system SHALL display the remaining days, hours, minutes, and seconds until a specified target date using Spanish labels ("DÍAS", "HORAS", "MINS", "SEGS").

#### Scenario: Spanish Countdown Labels
- **WHEN** the countdown is rendered
- **THEN** the time unit labels MUST be "DÍAS", "HORAS", "MINS", and "SEGS".

## ADDED Requirements

### Requirement: Localized Accessibility Strings
The countdown component MUST provide descriptive accessibility strings (aria-labels) in Spanish that match the brand voice.

#### Scenario: Countdown screen reader label
- **GIVEN** a screen reader is active
- **WHEN** focusing the countdown
- **THEN** it MUST be announced as "PRÓXIMO LANZAMIENTO: [Date]".
