---
change-id: refactor-glow-sidemenu-dx
title: Refactor GlowDrawer for DRY, Reusability, and DX
status: complete
author: Gemini CLI
date: 2026-04-11
---

# Proposal: Refactor GlowDrawer for DRY, Reusability, and DX

## Why
The previous implementation of the side navigation had several issues:
- **Duplication:** Types were redefined in multiple files.
- **Hardcoded Defaults:** Logo and animation constants were rigid.
- **Complexity:** GSAP logic was coupled with UI components.
- **Nomenclature:** "Sidemenu" was a non-standard term compared to "Drawer".
- **UX:** Hover animations felt linear and lacked "pop".

## What Changes
- **Standardized Nomenclature:** Rename "Sidemenu" to "Drawer" across the codebase.
- **Centralize Types:** Shared interfaces moved to `src/types/navigation.ts`.
- **Logic Separation:** Extract animations into `useGlowDrawerAnimation`.
- **Improve Reusability:** Convert `GlowDrawer` to a slot-based container.
- **Refined UX:** Implement premium `cubic-bezier` hover transitions and scale effects for navigation links.
- **Apply Best Practices:** Portals, Scroll Locking, and Focus management.

## Scope
- `src/components/organisms/GlowDrawer.tsx`
- `src/components/organisms/GlowNavigationDrawer.tsx`
- `src/components/molecules/GlowDrawerToggle.tsx`
- `src/types/navigation.ts`
- `src/hooks/useGlowDrawerAnimation.ts`
- `src/hooks/useScrollLock.ts`
