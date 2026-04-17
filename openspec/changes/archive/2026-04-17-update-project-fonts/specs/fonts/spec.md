# fonts Specification Delta

## MODIFIED Requirements

### Requirement: Global font configuration
**Description:** The application SHALL set Noto Serif as the default font and Libre Baskerville as the heading font.
#### Scenario:
Import the fonts in `src/styles/global.css` and configure CSS variables to use Libre Baskerville for headings (h1, h2, h3, h4, h5, h6) and Noto Serif for the body.

### Requirement: Global Heading Style
**Description:** The application SHALL apply `Libre Baskerville` to all standard heading tags (`h1` through `h6`) by default.
#### Scenario:
In `src/styles/global.css`, add a `@layer base` rule applying `font-heading` to `h1, h2, h3, h4, h5, h6`.

### Requirement: Apply to Header Title (Update)
**Description:** The main header title ("The Gym Bros Community") SHALL use `Libre Baskerville`.
#### Scenario:
Update `src/components/organisms/Header.astro` and other components ensuring the `font-heading` class is used for the main title.

### Requirement: Apply to Promotional Marquee
**Description:** The "Próximamente" and "Coming Soon" texts in the marquee SHALL use `Libre Baskerville`.
#### Scenario:
Update `src/components/molecules/react-bits/ScrollVelocity.css` or the scroller component to ensure it uses `var(--font-heading)`.

### Requirement: Apply to Bento Titles
**Description:** The titles in the Bento section SHALL use `Libre Baskerville`.
#### Scenario:
Update `src/components/organisms/react-bits/MagicBento.css` to ensure the `.magic-bento-card__title` uses `var(--font-heading)`.

## REMOVED Requirements

### Requirement: Apply Pinyon Script to Title
**Description:** The application SHALL apply Pinyon Script to the main title.
#### Scenario:
(Removed as Pinyon Script is being replaced by Libre Baskerville via the global heading style).
