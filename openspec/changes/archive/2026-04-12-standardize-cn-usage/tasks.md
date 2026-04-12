# Tasks: Standardize 'cn' Utility Usage

- [x] **Phase 1: Centralization**
    - [x] Update `src/lib/utils.ts` to ensure canonical `cn` implementation. <!-- id: 1 -->
    - [x] Refactor `src/components/molecules/GlowDrawerToggle.tsx`: remove local `cn` and import from `@/lib/utils`. <!-- id: 2 -->

- [x] **Phase 2: Transition from clsx to cn**
    - [x] Refactor `src/components/molecules/Countdown.jsx`: replace `clsx` with `cn` from `@/lib/utils`. <!-- id: 3 -->
    - [x] Refactor `src/components/atoms/react-bits/BlurText.jsx`: replace `clsx` with `cn` from `@/lib/utils`. <!-- id: 4 -->

- [x] **Phase 3: Secure Dynamic Prop Overrides**
    - [x] Refactor `src/components/organisms/GlowNavigationDrawer.tsx`: wrap `className` prop in `cn()`. <!-- id: 5 -->
    - [x] Refactor `src/components/molecules/react-bits/ScrollVelocity.jsx`: update `className`, `scrollerClassName`, and `parallaxClassName` to use `cn()`. <!-- id: 6 -->
    - [x] Refactor `MagicBento.jsx`, `GradualBlur.jsx`, `LaserFlow.jsx`, and `LiquidEther.jsx`: replace template literals with `cn()`. <!-- id: 10 -->

- [x] **Phase 4: Audit & Final Cleanup**
    - [x] Audit the `src/` directory for any remaining `import .* from "clsx"` and replace with `cn` where appropriate. <!-- id: 7 -->
    - [x] Confirm that all refactored components compile and render correctly. <!-- id: 8 -->
    - [x] Verify that Tailwind class overrides are functioning as expected. <!-- id: 9 -->
