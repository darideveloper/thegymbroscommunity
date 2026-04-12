# Tasks: Enhance CircularGallery

## Setup & Prep
- [x] Initialize new uniforms (`uHover`, `uBlueTint`) in `Media` program.
- [x] Add `uHover` uniform to `Title` program.

## Shader Implementation
- [x] **Blue Tint**: Update `Media` fragment shader to mix the texture with a blue tint by default.
- [x] **Hover Overlay**: Update `Media` fragment shader to mix the tinted color with black based on the `uHover` uniform.
- [x] **Title Visibility**: Update `Title` fragment shader to use the `uHover` uniform as alpha (mix or discard).

## Class Updates
- [x] **Title Centering**: Update `Title.createMesh()` to position the mesh at `(0, 0, 0.02)` relative to its parent.
- [x] **Text Color**: Update `createTextTexture` or `Title` constructor to use white color for text.
- [x] **Hover Logic**: Update `App` to track mouse movements and update a "hovered index" or similar state.
- [x] **Animation**: Add a `lerp` for each `Media` instance's `uHover` value in the `update()` loop.

## Validation
- [x] **Visual Check**: Ensure images appear blue by default.
- [x] **Hover Test**: Confirm that images darken and white text appears in the center when hovered.
- [x] **Overflow Test**: Verify that all effects are clipped to the rounded corner boundaries.
- [x] **Regression Check**: Ensure the circular "bend" and scrolling still work as expected.
