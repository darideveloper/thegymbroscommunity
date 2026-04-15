---
change-id: use-pinyon-script-for-titles
title: Apply Pinyon Script font to headings and titles
description: Use the already installed Pinyon Script font for the header title, coming soon texts, and bento section titles, ensuring consistency with the logo font.
---

# Proposal: Apply Pinyon Script font to headings and titles

## Problem
The "The Gym Bros Community" title in the header, the "COMING SOON" marquee, and the bento section titles are currently using the default sans-serif font (Lato) instead of the branded cursive font (Pinyon Script).

## Solution
Apply the already installed `font-heading` (which is set to Pinyon Script in `global.css`) to the following specific elements:
1. Header title "The Gym Bros Community"
2. "PRÓXIMAMENTE" and "COMING SOON" marquee
3. Bento section titles

The logo (TGC) already uses this font, so its appearance will be maintained.

## Scope
- `src/components/organisms/Header.astro`: Add `font-heading` class to the header title container.
- `src/components/organisms/react-bits/MagicBento.css`: Set `.magic-bento-card__title` font to `var(--font-heading)`.
- `src/components/molecules/react-bits/ScrollVelocity.css`: Set `.scroller` font-family to `var(--font-heading)`.
- `src/styles/global.css`: Ensure all standard heading tags (`h1-h6`) default to `font-heading`.
