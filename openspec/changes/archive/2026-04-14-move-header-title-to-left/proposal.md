---
id: move-header-title-to-left
title: Move Header Title to Left
status: applied
author: daridev
date: 2026-04-14
---

# Proposal: Move Header Title to Left

## Goal
The goal of this change is to relocate the site title (`h1`) from the center of the header to the left side, positioned immediately next to the logo. This will create a more compact and modern layout, improving the visual hierarchy of the global header.

## Context
Currently, the header uses a 3-column grid layout where the logo is on the left, the title is in the center, and the navigation drawer is on the right. This change will move the title into the same container as the logo and update the grid to a 2-column or flex layout.

## Scope
- Modify `src/components/organisms/Header.astro` layout structure.
- Update Tailwind CSS classes for alignment.
- Refactor the `Requirement: Centered H1 Site Title` into a new layout requirement.

## Benefits
- Improved use of space in the header.
- More traditional and recognizable brand positioning (Logo + Name).
- Better alignment on smaller screens.
