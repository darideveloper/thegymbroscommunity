# Design: Unify 'cn' Utility

## Overview
This document outlines the architectural and implementation decisions for centralizing the `cn` utility to ensure reliable Tailwind CSS class management across the project.

## Architectural Reasoning

### 1. Conflict Resolution (The `tailwind-merge` Benefit)
Standard string concatenation and the `clsx` library do not account for Tailwind's utility categories. For example, `class="p-4 p-2"` results in two padding utilities. The browser's application of these depends on the order they appear in the final CSS bundle, not their order in the HTML `class` attribute.

The `cn` utility combines:
- **`clsx`**: For conditional logic and joining strings, arrays, or objects.
- **`tailwind-merge`**: For resolving conflicting Tailwind classes (e.g., `p-4 p-2` becomes `p-2`).

By standardizing on `cn`, we ensure that component consumers can reliably override default styles by passing a `className` prop.

### 2. Single Source of Truth
Currently, `src/lib/utils.ts` is the central location for common utilities. Redefining `cn` in components like `GlowDrawerToggle.tsx` leads to code duplication and potential drift in implementation.

## Implementation Strategy

### Path Aliasing
We will use the `@/lib/utils` alias (already defined in `tsconfig.json`) to import the `cn` function.

### Component Refactoring
- **`GlowDrawerToggle.tsx`**: 
  - Remove local `function cn(...)`.
  - Import `import { cn } from '@/lib/utils'`.
- **`GlowNavigationDrawer.tsx`**:
  - Update usage of the `className` prop to use `cn` when wrapping the toggle or other elements to ensure consumer-provided classes override defaults correctly.
- **`Countdown.jsx` & `BlurText.jsx`**:
  - Replace `import clsx from 'clsx'` with `import { cn } from '@/lib/utils'`.
  - Replace `clsx(...)` with `cn(...)`.


## Quality Assurance
After the changes, we will verify:
- Components still render correctly.
- Dynamic classes are correctly applied.
- The `cn` function reliably resolves conflicts where relevant.
