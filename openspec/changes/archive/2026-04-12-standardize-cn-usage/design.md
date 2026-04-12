# Design: Standardize 'cn' Utility Usage

## Overview
This design doc outlines the technical approach to centralizing and standardizing the project's class name management.

## Architectural Reasoning

### 1. Conflict Resolution via `tailwind-merge`
Standard string concatenation (e.g., `className={baseClasses + " " + className}`) and even `clsx` do not account for Tailwind utility categories. For example, `class="p-4 p-2"` results in two conflicting padding utilities. The browser's choice of which padding wins is based on the CSS source order, which may not be intuitive.

The `cn` utility (a combination of `clsx` and `tailwind-merge`) solves this by physically removing the "losing" class (e.g., `p-4`) from the string before it hits the DOM.

### 2. Standardized Prop Pattern
All components that accept a `className` prop MUST merge it using the `cn` function to ensure that consumers can reliably override internal defaults.

## Implementation Strategy

### Path Aliasing
All imports will use the `@/lib/utils` alias to refer to the central `cn` definition.

### Specific Refactor Targets
1.  **`src/components/molecules/GlowDrawerToggle.tsx`**:
    - Remove local `cn` definition.
    - Import `{ cn } from '@/lib/utils'`.
2.  **`src/components/molecules/Countdown.jsx`**, **`src/components/atoms/react-bits/BlurText.jsx`**:
    - Replace `import clsx from 'clsx'` with `import { cn } from '@/lib/utils'`.
    - Replace all `clsx(...)` calls with `cn(...)`.
3.  **`src/components/organisms/GlowNavigationDrawer.tsx`**, **`src/components/molecules/react-bits/ScrollVelocity.jsx`**:
    - Wrap the `className` prop in `cn()` during assignment.
4.  **`MagicBento.jsx`**, **`GradualBlur.jsx`**, **`LaserFlow.jsx`**, **`LiquidEther.jsx`**:
    - Replace template literal merging (e.g., ``className={`${className} ...`}``) with `cn(className, "...")`.

## Quality Assurance
After implementation, we will verify:
1.  All refactored components compile and render.
2.  Tailwind class overrides (e.g., passing a custom `p-` or `bg-` class) work as expected and take priority over internal defaults.
3.  No `import .* from "clsx"` remains in the codebase outside of `src/lib/utils.ts`.
