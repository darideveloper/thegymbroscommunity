---
id: 2026-04-11-fix-circular-gallery-title-overflow
title: Fix Product Name Overflow in CircularGallery
status: implemented
author: Gemini CLI
---

# Proposal: Fix Product Name Overflow in CircularGallery

## Why
In the `CircularGallery.jsx` component, product names (titles) are rendered as textures on a mesh. The width of this mesh is calculated by multiplying a fixed percentage (25%) of the image plane's height by the text's aspect ratio. This results in the text width growing indefinitely with the length of the product name, causing it to overflow the image boundaries.

## What Changes
Modify the `Title.createMesh` method in `src/components/molecules/react-bits/CircularGallery.jsx` to clamp the text width to a maximum of 80% of the parent image plane's width. If the text width exceeds this limit, scale down both dimensions proportionally to maintain the aspect ratio and ensure the text fits within the card.

## Expected Outcomes
- Prevent product names from overflowing the gallery item boundaries.
- Maintain text legibility by scaling it down proportionally.
- Ensure the fix is applied dynamically during mesh creation.

## Affected Components
- `src/components/molecules/react-bits/CircularGallery.jsx`

## Verification
- Manual verification in the browser with long product names.
- Verify that short names remain unaffected.
