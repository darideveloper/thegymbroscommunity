---
id: standardize-cn-usage
title: Standardize 'cn' Utility Usage
status: proposed
---

## Summary
Unify and standardize the use of the `cn` (class name merging) utility across all React components in the project. This involves centralizing the definition in `src/lib/utils.ts`, removing redundant local definitions, and replacing all direct `clsx` or manual string concatenations with the `cn` function to ensure reliable Tailwind CSS class conflict resolution.

## Problem Statement
The project currently has inconsistent class management patterns:
1.  **Redundant Definitions:** `src/components/molecules/GlowDrawerToggle.tsx` redefines the `cn` function locally instead of importing it.
2.  **Limited Conflict Resolution:** Components like `Countdown.jsx` and `BlurText.jsx` use `clsx` directly, which does not resolve Tailwind CSS utility conflicts.
3.  **Unreliable Prop Overrides:** Multiple components (e.g., `ScrollVelocity.jsx`, `GlowNavigationDrawer.tsx`, `MagicBento.jsx`, `LaserFlow.jsx`, `LiquidEther.jsx`, and `GradualBlur.jsx`) use simple string concatenation or direct assignment for the `className` prop, making it impossible for consumers to reliably override internal styles.

## Proposed Solution
- **Centralize:** Ensure `src/lib/utils.ts` is the single source of truth for the `cn` function.
- **Refactor Definitions:** Remove local `cn` in `GlowDrawerToggle.tsx` and import from `@/lib/utils`.
- **Upgrade to `cn`:** Replace all `clsx(...)` calls with `cn(...)` in `Countdown.jsx` and `BlurText.jsx`.
- **Secure Prop Merging:** Wrap all `className` prop applications in `cn()` across all components (including `MagicBento`, `LaserFlow`, `LiquidEther`, and `GradualBlur`) to allow for predictable style overrides.
- **Comprehensive Audit:** Perform a final audit of the `src` directory to ensure no `clsx` or manual merges remain.

## Impact
- **Predictability:** The "last class wins" rule will work reliably for all components.
- **Maintainability:** Cleaner, DRYer codebase with a single, project-wide pattern for class management.
- **Developer Experience:** Consistent API for styling components.
