# fonts Specification

## Purpose
Apply the branded "Pinyon Script" font consistently across all headings and titles.

## ADDED Requirements

### Requirement: Global Heading Style
**Description:** The application SHALL apply `Pinyon Script` to all standard heading tags (`h1` through `h6`) by default.
#### Scenario:
In `src/styles/global.css`, add a `@layer base` rule applying `font-heading` to `h1, h2, h3, h4, h5, h6`.

### Requirement: Apply to Header Title (Update)
**Description:** The main header title ("The Gym Bros Community") SHALL use `Pinyon Script`.
#### Scenario:
Update `src/components/organisms/Header.astro` to ensure the `BlurText` container explicitly uses the `font-heading` class.

### Requirement: Apply to Promotional Marquee
**Description:** The "Próximamente" and "Coming Soon" texts in the marquee SHALL use `Pinyon Script`.
#### Scenario:
Update `src/components/molecules/react-bits/ScrollVelocity.css` to set the `.scroller` font-family to `var(--font-heading)`.

### Requirement: Apply to Bento Titles
**Description:** The titles in the Bento section SHALL use `Pinyon Script` and be 32px in size.
#### Scenario:
Update `src/components/organisms/react-bits/MagicBento.css` to set the `.magic-bento-card__title` font-family to `var(--font-heading)` and font-size to 32px.
