# Tasks: Remove Text Clamping from Magic Bento

## Preparations
- [x] Review `src/components/organisms/react-bits/MagicBento.jsx` and `MagicBento.css` to confirm all occurrences of line-clamping logic.

## CSS Refactoring
- [x] Remove line-clamping logic and variables from `src/components/organisms/react-bits/MagicBento.css`.
- [x] Update card styles to use `height: auto` instead of `aspect-ratio: 4/3` and add a `min-height: 200px`.
- [x] Replace `clamp()` font-size declarations with static or simpler responsive values.

## React Component Cleanup
- [x] Remove `textAutoHide` prop and associated logic from `src/components/organisms/react-bits/MagicBento.jsx`.

## Validation
- [x] Verify that cards in the `MagicBento` component expand vertically with content on all screen sizes.
- [x] Confirm no ellipsis or truncated text is present in any card.
- [x] Ensure the spotlight and border glow effects still function correctly with variable heights.
