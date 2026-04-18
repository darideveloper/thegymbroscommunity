# Proposal: Optimize MagicBento Title Size

## Why
Despite increasing the allowed lines for titles to two, some long titles (e.g., "Sin Descanso. Sin Concesiones.") are still being truncated because the font size (32px) is too large for the available width in small bento cards. Reducing the font size or making it responsive will ensure that all titles fit within the two-line limit across different screen sizes.

## What Changes
Modify the `font-size` of the `.magic-bento-card__title` class in `src/components/organisms/react-bits/MagicBento.css`. We will transition from a fixed 32px size to a responsive size using the `clamp()` function.

## Scope
- Modify `src/components/organisms/react-bits/MagicBento.css`.
- Update `.magic-bento-card__title` font properties.
