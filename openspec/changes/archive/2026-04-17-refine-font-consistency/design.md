# Design: Refine Font Consistency

## Component-Specific Refinements

### 1. Circular Gallery (WebGL Text)
The `CircularGallery` component renders text to a canvas to create WebGL textures. These canvas contexts must be explicitly told which font to use, as they don't inherit CSS variables directly.
- **Default Font Prop:** Change from `bold 30px Figtree` to `bold 30px "Libre Baskerville"`.
- **Title Class:** Update the fallback from `30px sans-serif` to `30px "Libre Baskerville"`.
- **Canvas Context:** Ensure the font string is correctly formatted for the 2D canvas API.

### 2. Label Legibility (CSS)
Serif fonts (Noto Serif) can appear "lighter" or "busier" at small sizes compared to clean sans-serif fonts like Lato.
- **Countdown Labels:** Review the weight of "DÍAS", "HORAS", etc. in `Countdown.jsx`. If they appear too thin or cluttered, increase `font-weight` or add `letter-spacing`.
- **Bento Labels:** Review `.magic-bento-card__label` in `MagicBento.css`.

## Technical Strategy
- Search and replace all literal strings of old font names.
- Use explicit font family names in JS/JSX where CSS variables cannot be accessed (e.g., Canvas 2D API).

## Verification
- Visual inspection of the `CircularGallery` to confirm the serif font is used for product titles.
- Visual inspection of `Countdown` and `MagicBento` to ensure labels are crisp and legible.
