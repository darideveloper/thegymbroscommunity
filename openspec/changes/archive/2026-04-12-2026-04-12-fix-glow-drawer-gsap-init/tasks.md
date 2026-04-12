# Execution Plan

## Implementation Steps

- [x] Update `src/hooks/useGlowDrawerAnimation.ts`: Add `isMounted` boolean parameter with a default of `true`.
- [x] Update `src/hooks/useGlowDrawerAnimation.ts`: Add an early return condition `if (!isMounted || !containerRef.current) return;` to the GSAP initialization `useEffect`.
- [x] Update `src/hooks/useGlowDrawerAnimation.ts`: Add `isMounted` to the dependency array of the GSAP initialization `useEffect`.
- [x] Update `src/components/organisms/GlowDrawer.tsx`: Pass the `isMounted` state variable to the `useGlowDrawerAnimation` hook call.
- [x] Update `src/lib/webgl.ts`: Change the `RefObject` import to a type-only import (`import type { RefObject } from 'react';`) to resolve existing TypeScript compiler errors.
