# Delta: Center Countdown H1 Title

## MODIFIED Requirements

### Requirement: Integrated H1 Brand Title
The primary brand title (H1, "The Gym Bros Community") MUST be integrated within the countdown's "digital screen" layout, positioned directly below the timer units.

#### Scenario: Integrated brand title
- **WHEN** the countdown component is rendered
- **THEN** it MUST include an `h1` element containing the brand name "The Gym Bros Community".
- **AND** the title MUST be perfectly centered below the row of time units (DÍAS, HORAS, MINS, SEGS).
- **AND** the internal words of the title MUST be centered using `justify-center` or similar alignment to handle wrapping on mobile viewports.
- **AND** the title MUST NOT contain a `<p>` tag within the `<h1>` to ensure valid HTML semantics.
- **AND** the title MUST use the `BlurText` animation component.
- **AND** the title MUST be responsive, using larger font sizes (e.g., `text-2xl` to `text-6xl`) to match the Hero section's prominence.
- **AND** the title color MUST be `white` to ensure high contrast against the dark background.
