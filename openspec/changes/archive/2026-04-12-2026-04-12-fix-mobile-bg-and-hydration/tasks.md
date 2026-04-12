# Tasks: Fix Mobile Rendering and Hydration Stability

## 1. Hydration Stabilization
- [x] Implement `isMounted` state in `src/components/organisms/GlowDrawer.tsx`.
- [x] Defer `createPortal` rendering until after the first client mount.
- [x] Verify console for the absence of hydration mismatch errors on page load.

## 2. WebGL Mobile Compatibility
- [x] Refactor `getFloatType()` in `src/components/organisms/react-bits/LiquidEther.jsx` to support Android.
- [x] Add check for `OES_texture_half_float` and `OES_texture_float` support.
- [x] **Verify support for `OES_texture_half_float_linear` and `OES_texture_float_linear` to ensure smooth animation.**
- [x] Set `HalfFloatType` as the default for mobile devices to maximize compatibility.
- [x] Verify `LiquidEther` renders correctly on mobile/Android devices.
