---
change-id: replace-text-logo-with-image
title: Replace Text Logo with Image in Header
author: Gemini CLI
---

# Proposal: Replace Text Logo with Image in Header

The current implementation of the site logo in the header uses the text "TGC" styled with 'Pinyon Script'. The project assets already include a brand logo file at `public/assets/logo.webp`, which is currently used in the side menu but not in the main header. This change will replace the text-based logo in the header with the image file to ensure brand consistency across the entire application.

## Goals
- Replace "TGC" text in `TGCLogo.astro` with the `logo.webp` image.
- Maintain responsive behavior and scroll-driven shrinking effect for the image logo.
- Ensure the image has proper accessibility (alt text).

## Affected Components
- `src/components/atoms/TGCLogo.astro`: Primary component for the brand logo.
- `src/components/organisms/Header.astro`: Host component for the header branding, responsible for scroll-based styling.

## Proposed Requirements
- **MODIFIED** `logo`: Update the requirement to prioritize the image over the "TGC" text.
- **MODIFIED** `header`: Ensure the scroll-shrinking logic supports image scaling.
