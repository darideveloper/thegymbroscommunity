# Design: Fix MagicBento Title Clamping

## Architectural Reasoning
The `MagicBento` component uses CSS variables to control line clamping via `-webkit-line-clamp`. This is an efficient way to manage text truncation across different screen sizes.

## Proposed Change
In `src/components/organisms/react-bits/MagicBento.css`, the current configuration is:

```css
.magic-bento-card__title,
.magic-bento-card__description {
  --clamp-title: 1;
  --clamp-desc: 2;
}
```

Updating `--clamp-title` to `2` will allow the text to wrap to the next line before truncating.

## Trade-offs
- **Vertical Space:** Allowing a second line for titles will reduce the available space for the description or padding within the card. However, the current `aspect-ratio: 4/3` and `min-height: 200px` should accommodate this change without breaking the layout.
- **Consistency:** If some cards have 1-line titles and others have 2-line titles, the visual balance might shift slightly, but this is a standard behavior in bento grids.
