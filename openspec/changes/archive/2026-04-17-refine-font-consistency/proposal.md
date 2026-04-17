# Proposal: Refine Font Consistency

This proposal addresses hardcoded and inconsistent font references across the project that were left over or exposed after the global font update to `Libre Baskerville` and `Noto Serif`.

## Problem
- `CircularGallery.jsx` contains hardcoded references to "Figtree", "monospace", and "sans-serif", which do not align with the new project aesthetic.
- Specific UI labels in `Countdown` and `MagicBento` may need weight or style adjustments to maintain legibility with the new serif fonts.

## Solution
- Update `CircularGallery.jsx` to use `Libre Baskerville` for item titles.
- Adjust UI labels in key components to ensure they remain professional and legible with the serif typography.
- Remove any remaining traces of old font names from the codebase.

## Impact
- **Visual Harmony:** Every component, including WebGL-rendered text, will consistently use the project's chosen typography.
- **Polish:** Ensures that small details like countdown labels and bento headers are optimized for the new serif font families.
