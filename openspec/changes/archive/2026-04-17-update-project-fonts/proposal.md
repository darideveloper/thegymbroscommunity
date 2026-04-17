# Proposal: Update Project Fonts

The user wants to refresh the project's typography by using `Libre Baskerville` for headings and `Noto Serif` for body text, both sourced from Fontsource. Additionally, all unused font packages will be removed to keep the project clean.

## Problem
The current font selection (Pinyon Script for headings and Lato for body) no longer matches the desired aesthetic. There are also several unused font dependencies in `package.json`.

## Solution
- Replace `Pinyon Script` with `Libre Baskerville` for all headings.
- Replace `Lato` with `Noto Serif` for all body text.
- Standardize on Fontsource packages for better performance and reliability.
- Remove all unused `@fontsource` packages.

## Impact
- **Visuals:** A more classic and elegant serif-based typography system.
- **Performance:** Reduced bundle size by removing unused font imports and dependencies.
- **Maintainability:** Clearer font configuration in `global.css`.
