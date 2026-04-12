# Tasks: Refactor GlowDrawer for DRY, Reusability, and DX

## Foundation
- [x] Create `src/types/navigation.ts` and export `MenuItem` and `SocialItem` interfaces. <!-- id: 0 -->
- [x] Create `src/hooks/useScrollLock.ts` for managing body overflow. <!-- id: 1 -->
- [x] Create `src/hooks/useGlowDrawerAnimation.ts` and migrate GSAP logic from `GlowDrawer.tsx`. <!-- id: 2 -->

## Refactoring Components
- [x] Update `src/components/molecules/GlowDrawerToggle.tsx` to use `clsx`, `tailwind-merge` and support `label` prop. <!-- id: 3 -->
- [x] Refactor `src/components/organisms/GlowDrawer.tsx`: <!-- id: 4 -->
    - [x] Implement `children` pattern (slots).
    - [x] Integrate `useGlowDrawerAnimation` and `useScrollLock`.
    - [x] Implement `React Portal` for rendering.
    - [x] Make `logoUrl` and `title` customizable via props.
- [x] Refactor `src/components/organisms/GlowNavigationDrawer.tsx`: <!-- id: 5 -->
    - [x] Use centralized types.
    - [x] Pass navigation structure as children to `GlowDrawer`.
    - [x] Rename component from `GlowSidemenuNav` to `GlowNavigationDrawer`. <!-- id: 10 -->

## Animation Smoothing
- [x] Implement `cubic-bezier(0.22, 1, 0.36, 1)` easing for nav links. <!-- id: 11 -->
- [x] Add scale and translate-x effects to hover states. <!-- id: 12 -->
- [x] Sync duration to 500ms for smoother visual flow. <!-- id: 13 -->

## Validation
- [x] Verify that the menu still opens/closes with the same animations. <!-- id: 6 -->
- [x] Verify that body scroll is locked when the menu is open. <!-- id: 7 -->
- [x] Verify that the menu renders at the end of `<body>` via Portal. <!-- id: 8 -->
- [x] Verify that the menu can be closed with the Escape key. <!-- id: 9 -->
