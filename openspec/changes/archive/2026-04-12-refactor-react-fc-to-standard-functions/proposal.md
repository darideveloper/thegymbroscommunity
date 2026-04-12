# Change: Refactor React components to standard function declarations

## Why
Using `React.FC` (or `FC`) is considered an outdated practice in modern React (v18+). It introduces unnecessary boilerplate, has poor support for generics, and until recently, had issues with implicit `children` types. Standardizing on function declarations with explicit prop typing aligns with industry best practices and ensures better compatibility with future tools like the React Compiler.

## What Changes
- Refactor existing React components to use standard function declarations.
- Explicitly type props in the function signature instead of using the `React.FC` wrapper.
- Update project specifications to mandate standard function declarations for all React components.

## Impact
- Affected specs: `specs/component-library/spec.md`
- Affected code:
  - `src/components/molecules/GlowDrawerToggle.tsx`
  - `src/components/organisms/GlowDrawer.tsx`
  - `src/components/organisms/GlowNavigationDrawer.tsx`
