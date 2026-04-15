# Design Documentation: Move H1 to Countdown

This change involves shifting the primary heading from the layout-level header to a feature-level component within the `Hero` section.

## Architectural Reasoning

### From Header to Feature
The `h1` represents the core brand identity. Placing it within the countdown (a temporary but central feature) creates a more dynamic and "event-driven" feel. The header will remain functional for navigation, but the `Hero` section will own the primary brand presence.

### Hydration & SEO Strategy
Currently, `Countdown` uses `client:only="react"`. By placing the `h1` inside it, the `h1` will also be part of the client-side hydration. To mitigate potential SEO impact, we should ensure that the `h1` is clearly accessible to crawlers.

## Visual Considerations

### Layout Shift
The countdown's container (`backdrop-blur-3xl`) will expand to accommodate the new title. The gap between the timer units and the title should be significant enough to distinguish them but small enough to feel like a single unit.

### Typography
- **Header:** Used `Pinyon Script` at `0.7875rem` (mobile) to `3xl` (desktop).
- **Countdown Integration:** The title will be larger inside the countdown (`2xl` to `6xl`) and will likely use `white` to match the timer's high-contrast style.

## Interaction Design
The `BlurText` animation will remain, but since it's now part of the `Countdown` (which renders immediately on the client), the animation will trigger alongside the countdown's appearance.
