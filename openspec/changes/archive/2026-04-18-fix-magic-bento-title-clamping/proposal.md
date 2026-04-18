# Proposal: Fix MagicBento Title Clamping

## Why
Currently, titles in the `MagicBento` component are truncated to a single line (e.g., "Forjada para..."). This hides important messaging and prevents the brand's voice from being fully communicated. Allowing titles to wrap to a second line ensures readability while maintaining the bento grid aesthetics.

## What Changes
Modify the CSS variable controlling line-clamping for titles in `src/components/organisms/react-bits/MagicBento.css`. Increase the allowed lines from 1 to 2.

## Scope
- Modify `src/components/organisms/react-bits/MagicBento.css`.
- Update `--clamp-title` value.
