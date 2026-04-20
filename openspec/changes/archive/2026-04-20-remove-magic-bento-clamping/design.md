# Design: Remove Text Clamping from Magic Bento

## Architectural Context
The `MagicBento` component is an interactive React component using GSAP for effects and CSS for layout. It currently relies on a fixed `aspect-ratio` and line-clamping to maintain its "bento-style" look. Removing these features shifts the responsibility of height management from a fixed ratio to the content itself.

## Proposed Changes

### 1. React Component Changes (`MagicBento.jsx`)
- **Prop Removal:** Remove the `textAutoHide` prop from the `MagicBento` component signature.
- **Class Logic:** Simplify the `baseClassName` construction by removing the conditional check for `textAutoHide`.

### 2. Style Changes (`MagicBento.css`)

#### Layout Changes
- **Remove Fixed Aspect Ratio:** In `.magic-bento-card`, replace `aspect-ratio: 4/3` with `height: auto`. This ensures the card container grows with its text content.
- **Maintain Minimum Height:** Set a `min-height: 200px` (or similar) to preserve the visual weight of cards even with minimal text.

#### Typography Changes
- **Remove Line Clamping Variables:** Delete `--clamp-title` and `--clamp-desc` custom properties.
- **Disable Line Clamp CSS:** Remove the entire `.magic-bento-card--text-autohide` block that applies `-webkit-line-clamp`, `display: -webkit-box`, `overflow: hidden`, and `text-overflow: ellipsis`.
- **Static Font Sizes:** Re-evaluate `font-size: clamp(...)` calls. To comply with "removing clamping," replace them with fixed values (e.g., `18px` for titles, `14px` for labels) or simpler `rem` values.

### 3. Grid Integrity
Removing the aspect ratio in a grid with `grid-column: span 2` and `grid-row: span 2` (desktop) may lead to uneven row heights if some cards have significantly more text. This is acceptable given the requirement to "show the full texts, always."

## Trade-offs
- **Consistency vs. Content:** The "perfect" grid alignment might be lost if content length varies significantly. However, content accessibility is prioritized.
