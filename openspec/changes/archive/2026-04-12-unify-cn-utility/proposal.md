---
id: unify-cn-utility
title: Unify 'cn' Utility Across Project
status: proposed
---

## Summary
Centralize the `cn` (class name merging) utility into a single source (`src/lib/utils.ts`) and ensure its consistent use throughout the project. This change replaces redundant local definitions and transitions from basic `clsx` to `cn` for more reliable Tailwind CSS class conflict resolution.

## Problem Statement
Currently, the `cn` function is defined in two places: `src/lib/utils.ts` and locally in `src/components/molecules/GlowDrawerToggle.tsx`. Additionally, some components use `clsx` directly or simple string concatenation for props like `className`, which handles joining but fails to resolve Tailwind utility conflicts (e.g., `p-4` vs `p-2`). This inconsistency leads to unpredictable styling behavior and maintains redundant code.

## Proposed Solution
1.  **Single Source of Truth:** Establish `src/lib/utils.ts` as the exclusive provider of the `cn` utility.
2.  **Refactor Redundancies:** Remove the local `cn` definition in `GlowDrawerToggle.tsx` and import it from `@/lib/utils`.
3.  **Standardize Class Merging:** Replace direct `clsx` calls with `cn` in `Countdown.jsx` and `BlurText.jsx` to ensure Tailwind conflicts are merged correctly.
4.  **Enhance Dynamic Prop Handling:** Update components that accept `className` as a prop (like `GlowNavigationDrawer.tsx`) to use `cn` when applying that prop to ensure overrides work as expected.
5.  **Audit & Align:** Briefly audit other core components to ensure they follow this pattern when handling dynamic or conditional classes.

## Alternatives Considered
- **Direct `clsx` and `!`:** Using `clsx` for joining and `!` (important) for overrides was considered but rejected because it increases CSS specificity unnecessarily and creates harder-to-maintain styles.
- **Manual String Template Literals:** Rejected as it doesn't handle conditional logic or conflict resolution, leading to messy and bug-prone code.

## Impact
- **Developer Experience:** Clear, consistent pattern for class management.
- **Maintainability:** DRY (Don't Repeat Yourself) implementation of core utilities.
- **Visual Correctness:** Predictable styling where the last-applied Tailwind class reliably overrides previous ones.
