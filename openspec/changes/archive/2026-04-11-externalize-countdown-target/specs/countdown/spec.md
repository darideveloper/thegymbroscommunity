## MODIFIED Requirements

### Requirement: Target Date Configuration
The target date for the countdown MUST be configurable via environment variables.

#### Scenario: Configuration via Environment Variable
- **WHEN** `PUBLIC_COUNTDOWN_TARGET_DATE` is set in the environment
- **THEN** the system uses this value as the target date.
