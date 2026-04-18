# Capability: MagicBento Layout

## ADDED Requirements

### Requirement: Title Visibility
The `MagicBento` component titles **SHALL** allow at least two lines of text before applying truncation.

#### Scenario: Multi-line Title Support
- **Given** a `MagicBento` card has a long title (e.g., "Forjada para Ganar")
- **When** the card width is narrow
- **Then** the title should wrap to a second line instead of truncating at the first line.
