# magic-bento-layout Spec Delta

## MODIFIED Requirements

### Requirement: Title Visibility
The `MagicBento` component titles **SHALL** be fully visible without truncation or line limits.

#### Scenario: Long Title Fitting
- **Given** a `MagicBento` card has a very long title
- **When** the card is rendered
- **Then** the title should wrap naturally and remain fully visible
- **And** no line limit or ellipsis should be present.

## ADDED Requirements

### Requirement: Description Visibility
The `MagicBento` component descriptions **SHALL** be fully visible without truncation or line limits on all screen sizes.

#### Scenario: Long Description Fitting
- **Given** a `MagicBento` card has a very long description
- **When** the card is rendered on a small screen
- **Then** the card container should expand vertically to accommodate the text
- **And** the text should remain fully visible.

### Requirement: Minimum Card Height
The `MagicBento` cards **SHALL** maintain a minimum height of `200px` regardless of content length.

#### Scenario: Short Content Minimum Height
- **Given** a `MagicBento` card has very short content (e.g., only a label and one-word title)
- **When** the card is rendered
- **Then** the card height should be at least `200px`.
