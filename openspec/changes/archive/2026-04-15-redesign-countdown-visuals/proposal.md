# Proposal: Redesign Countdown Visuals (Classic Digital Clock)

## Goal
Transform the Hero section countdown into a high-impact, **Classic Digital Clock** display. The redesign will move away from individual boxes and left-aligned positioning to a centered, full-screen, cohesive "digital screen" that uses a professional digital-style font and semi-transparent layers to integrate deeply with the Hero visuals.

## Key Changes
- **Digital Clock Aesthetic:** Use a professional digital font (e.g., `@fontsource/orbitron`) to capture the classic LED/mechanical timer look.
- **Single "Clock Screen" Background:** Flatten individual boxes into a single, large, semi-transparent black container that acts as the clock's face.
- **Premium Transitions:** Maintain the existing Framer Motion ("popLayout") animations for a smooth, high-end feel when numbers change.
- **Centered & Full-Width Layout:** Remove all negative margins and width constraints to allow the clock to breathe and center itself on all screen sizes.
- **Responsive Optimization:** Ensure the clock scales perfectly from mobile to wide-screen monitors, maintaining its "digital dashboard" presence.

## Affected Components
- `src/components/molecules/Countdown.jsx`: Core redesign of the background, unit layout, and font application.
- `src/components/organisms/Hero.astro`: Removal of current offset-based layout and implementation of a centered, responsive container.
- `src/styles/global.css`: Global registration of the digital font.

## Impact
- **UX:** Clearer focus and professional presentation of the launch event.
- **Aesthetic:** More consistent with the modern, high-tech "Gym Bros Community" brand.
- **Accessibility:** Continues to support Spanish localization and ARIA standards.
