---
change-id: fix-mobile-bg-and-hydration
title: Fix Mobile Background Rendering and Hydration Mismatches
goal: Ensure LiquidEther background works on mobile/Android and resolve React hydration errors in GlowDrawer.
---

# Proposal: Fix Mobile Background Rendering and Hydration Mismatches

## Context
The project currently faces two critical stability and visual issues:
1.  **Mobile Background Failure**: The `LiquidEther` WebGL background animation is invisible on mobile devices (Android, Chrome/Brave). This is likely due to the use of `THREE.FloatType` for internal FBOs, which lacks universal support or linear filtering support on many mobile GPUs.
2.  **Hydration Mismatch**: A console error "Uncaught Error: Hydration failed because the server rendered HTML didn't match the client" occurs on every page load. This is caused by `GlowDrawer.tsx` attempting to render a React Portal during the initial client-side hydration pass while the server-rendered version is `null`.

## Objective
- Enable high-performance WebGL background rendering on mobile devices by implementing a fallback to `HalfFloatType`.
- Eliminate hydration errors in the navigation components to ensure a stable React component tree.

## Strategy
1.  **WebGL Compatibility**:
    *   Update `LiquidEther.jsx` to detect WebGL capability for floating-point textures.
    *   Implement an automatic fallback to `THREE.HalfFloatType` if `THREE.FloatType` is unsupported or lacks linear filtering.
    *   Ensure FBO initialization is robust across different mobile GPU architectures.
2.  **Hydration Fix**:
    *   Update `GlowDrawer.tsx` to use a `mounted` state pattern.
    *   Ensure the component returns `null` on both server and the *first* client render to match the hydration tree.
    *   Trigger the Portal render only after the component has successfully mounted on the client.

## Impact
- **User Experience**: The "Premium" background effect will now be visible to mobile users, maintaining brand consistency across devices.
- **Stability**: Removing hydration errors prevents React from discarding and recreating the entire component tree, improving TBT (Total Blocking Time) and preventing potential event listener bugs.
- **Performance**: `HalfFloatType` can often be more performant on mobile GPUs than full `FloatType`.
