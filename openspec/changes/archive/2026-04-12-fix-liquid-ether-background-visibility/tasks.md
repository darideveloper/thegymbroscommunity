# Tasks: Fix LiquidEther Background Visibility

## Layout Implementation
- [x] Modify `src/layouts/Layout.astro` to remove `bg-[#060010]` from the `body` tag and add a base background `div`.
- [x] Ensure the `body` background is explicitly `bg-transparent`.
    - **Validation**: Confirm `body` is transparent in inspector and `#060010` is visible from the fixed `div`.

## Home Page Implementation
- [x] Modify `src/pages/index.astro` to wrap `LiquidEther` in a `div` with `z-[-10]` and `fixed inset-0`.
- [x] Switch `LiquidEther` to `client:only='react'`.
    - **Validation**: Confirm `LiquidEther` is visible behind the content and animating.
- [x] Ensure all sections in `index.astro` (Hero, ProductShowcase, About) remain interactive.
    - **Validation**: Click buttons in the Hero or Product sections to confirm they work.

## Overall Verification
- [x] Verify that mouse movement over the home page triggers the `LiquidEther` interactive effect.
- [x] Verify that no other content is visually obscured by `LiquidEther`.
