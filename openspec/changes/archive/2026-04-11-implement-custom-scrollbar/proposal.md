# Proposal: Implement Custom Scrollbar

## Problem
The default browser scrollbar is visually inconsistent with the project's modern, "Gym Bros Community" dark-themed aesthetic (specifically the `halloween` theme). It can look clunky and distracting against the immersive animations and interactive components.

## Proposed Solution
Implement a custom CSS scrollbar that:
- Uses the project's existing primary accent color (`var(--primary)`) and background variables.
- Does not modify any theme colors or introduce new color variables.
- Is thin (10px) and unobtrusive.
- Features fully rounded corners for a modern "capsule" aesthetic.
- Adapts automatically to the `halloween` theme by utilizing theme-specific variables.
- Ensures cross-browser compatibility (Webkit and Firefox).

## Benefits
- Improved visual consistency across the application.
- Enhanced aesthetic appeal.
- Better alignment with the "premium" community feel of the project.

## Scope
- Global styles in `src/styles/global.css`.
- Applies to the `html` and `body` elements, and any scrollable containers that inherit these styles.
