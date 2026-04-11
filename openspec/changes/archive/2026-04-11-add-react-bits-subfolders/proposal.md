# Change: Add React-Bits Subfolders

## Why
To maintain a cleaner and more organized component library, specialized components sourced from "React Bits" (high-performance animation and WebGL components) should be grouped in a dedicated `react-bits` subfolder within each Atomic Design category. This prevents clutter and makes it easier to distinguish between core components and external UI library bits.

## What Changes
- **React-Bits Grouping**: Create `react-bits` subdirectories in `atoms`, `molecules`, and `organisms`.
- **Component Relocation**: Move all "React Bits" components and their associated CSS files into these subdirectories.
- **Import Refactor**: Update all imports in pages and parent components to reflect the new directory structure.

## Impact
- Affected specs: `component-library` (modified).
- Affected code: `src/components/*`, `src/pages/index.astro`, `src/components/organisms/Hero.astro`, `src/components/organisms/ProductShowcase.astro`, `src/components/organisms/About.astro`.
