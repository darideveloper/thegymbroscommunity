# Proposal: Fix Navigation Links and Social Media

## Purpose
This change addresses broken internal anchor links and updates the project's social media presence to point exclusively to the official Instagram profile.

## Problem Statement
1.  **Broken Anchors**: The "Productos" and "Acerca de" navigation links point to `/#products` and `/#about`, but these IDs are missing in the respective components (`ProductShowcase.astro` and `About.astro`), resulting in a failed scroll experience.
2.  **Generic Socials**: The header currently uses placeholder links for Twitter and Discord, which are not yet active for the community.
3.  **Outdated Instagram**: The Instagram link needs to be updated to the correct official URL: `https://www.instagram.com/the_gymbros_community/`.

## Proposed Changes
1.  **Fix Internal Links**: Add `id="products"` and `id="about"` to the root sections of `ProductShowcase.astro` and `About.astro`.
2.  **Update Constants**: Update `src/lib/constants.ts` to include the correct Instagram URL and remove Twitter/Facebook placeholders.
3.  **Refactor Header**: Update `src/components/organisms/Header.astro` to:
    *   Import social links from `BUSINESS_DATA`.
    *   Remove Twitter and Discord placeholders.
    *   Exclusively show the "EL GRAM" (Instagram) link.

## Impact
- **User Experience**: Improved navigation reliability with functional anchor links.
- **Brand Integrity**: Accurate social media redirection to the primary community platform.
- **Maintainability**: Centralized social media management through constants.
