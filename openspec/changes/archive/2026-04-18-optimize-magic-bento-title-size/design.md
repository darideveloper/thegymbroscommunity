# Design: Optimize MagicBento Title Size

## Architectural Reasoning
A fixed font size of 32px is too aggressive for small grid items in a bento layout. By using a responsive font size, we can ensure that text adapts to the container's width, reducing the likelihood of truncation while maintaining visual hierarchy.

## Proposed Change
In `src/components/organisms/react-bits/MagicBento.css`, update the `.magic-bento-card__title` class:

```css
.magic-bento-card__title {
  font-family: var(--font-heading);
  font-weight: 400;
  /* Old value: font-size: 32px; */
  font-size: clamp(13px, 1.6vw, 18px);
  line-height: 1.1;
  margin: 0 0 0.25em;
}
```

Using `clamp(13px, 1.6vw, 18px)` provides:
- A minimum size of 13px for mobile/small cards.
- A maximum size of 18px to ensure even the longest titles fit perfectly.
- Fluid scaling between these values.
- `line-height: 1.1` makes multi-line titles more compact and visually appealing.

## Trade-offs
- **Visual Scale:** The titles will be slightly smaller than before at their maximum size, but the gain in readability and consistency outweighs the loss of a few pixels in height.
