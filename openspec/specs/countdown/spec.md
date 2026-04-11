# Capability: Countdown

## Purpose
This specification defines the behavior of the countdown capability, which provides a visual timer counting down to a configurable target date.
## Requirements
### Requirement: Display Remaining Time
The system SHALL display the remaining days, hours, minutes, and seconds until a specified target date.

#### Scenario: Active Countdown
- **WHEN** the target date is in the future
- **THEN** the component displays the accurate remaining time units.

### Requirement: Target Date Configuration
The target date for the countdown MUST be configurable via environment variables.

#### Scenario: Configuration via Environment Variable
- **WHEN** `PUBLIC_COUNTDOWN_TARGET_DATE` is set in the environment
- **THEN** the system uses this value as the target date.

