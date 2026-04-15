# Tasks: Apply Pinyon Script font to headings and titles

- [x] Configure global styles in `src/styles/global.css`:
    - [x] Add `@layer base { h1, h2, h3, h4, h5, h6 { @apply font-heading; } }`.
- [x] Apply to header title in `src/components/organisms/Header.astro`:
    - [x] Add `font-heading` class to the `h1` container.
- [x] Apply to bento section titles in `src/components/organisms/react-bits/MagicBento.css`:
    - [x] Update `.magic-bento-card__title` to use `font-family: var(--font-heading);`.
- [x] Apply to coming soon marquee in `src/components/molecules/react-bits/ScrollVelocity.css`:
    - [x] Update `.scroller` to use `font-family: var(--font-heading);`.
- [x] Validation:
    - [x] Verify that the header title "The Gym Bros Community" uses Pinyon Script.
    - [x] Verify that all standard headings (`h1-h6`) default to Pinyon Script.
    - [x] Verify that the "COMING SOON" marquee uses Pinyon Script.
    - [x] Verify that bento section titles use Pinyon Script.
    - [x] Verify that the logo "TGC" still uses Pinyon Script and remains unchanged.
