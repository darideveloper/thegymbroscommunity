# Tasks: Unify 'cn' Utility

- [ ] **Phase 1: Centralize Utility**
    - [ ] Update `src/lib/utils.ts` to ensure it is the canonical source for `cn`. <!-- id: 1 -->
    - [ ] Refactor `src/components/molecules/GlowDrawerToggle.tsx`: remove local `cn` and import from `@/lib/utils`. <!-- id: 2 -->

- [ ] **Phase 2: Standardize Components**
    - [ ] Refactor `src/components/molecules/Countdown.jsx`: replace `clsx` with `cn` from `@/lib/utils`. <!-- id: 3 -->
    - [ ] Refactor `src/components/atoms/react-bits/BlurText.jsx`: replace `clsx` with `cn` from `@/lib/utils`. <!-- id: 4 -->
    - [ ] Refactor `src/components/organisms/GlowNavigationDrawer.tsx`: use `cn` to apply the `className` prop correctly to the wrapper. <!-- id: 8 -->

- [ ] **Phase 3: Cleanup & Verification**
    - [ ] Search for any remaining direct uses of `clsx` or string-concatenated `className` props in `src/` and replace them with `cn`. <!-- id: 5 -->
    - [ ] Verify that all refactored components render and apply styles as expected. <!-- id: 6 -->
    - [ ] Ensure build passes without lint or type errors. <!-- id: 7 -->
