---
change-id: remove-magic-bento-clamping
title: Remove Text Clamping from Magic Bento
description: Eliminate multi-line truncation and fluid typography clamping in the Magic Bento component to ensure full text visibility across all screen sizes.
---

# Proposal: Remove Text Clamping from Magic Bento

## Problem
The `MagicBento` component currently limits titles and descriptions to 2 lines each using `-webkit-line-clamp`. Additionally, it uses fluid typography via `clamp()` and a fixed `aspect-ratio` on cards, which can lead to content being cut off or not being fully legible on all screen sizes.

## Solution
Completely remove the text clamping "feature" from the `MagicBento` component. This involves:
1.  Removing the `textAutoHide` React prop and its associated CSS classes.
2.  Disabling `-webkit-line-clamp` and multi-line truncation logic.
3.  Removing `aspect-ratio: 4/3` from cards and adding a `min-height: 200px` to allow them to expand vertically with content while maintaining a consistent minimum visual weight.
4.  Replacing `clamp()` font-size declarations with static or simpler responsive values to align with the "remove clamp" request.

## Impact
- **UI/UX:** Cards will no longer have a uniform height if content varies significantly, but will maintain a minimum height of 200px. The grid layout will adapt vertically. All text will be readable without truncation.
- **Maintenance:** Simplified component code and CSS.
- **Specifications:** Updates `magic-bento-layout` to reflect that text must be fully visible without line limits.
