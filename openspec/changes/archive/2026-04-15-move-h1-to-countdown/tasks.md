---
change-id: move-h1-to-countdown
title: Tasks for Moving H1 to Countdown
status: completed
---

# Tasks: Move H1 Title from Header to Countdown Component

## Phase 1: Preparation
- [x] Research existing `h1` styles and responsive behavior.
- [x] Confirm `BlurText` component capabilities for use inside `Countdown`.

## Phase 2: Implementation (Header Cleanup)
- [x] Remove `BlurText` import from `src/components/organisms/Header.astro`.
- [x] Delete `h1` element and its container (`#header-title-container`) from `Header.astro`.
- [x] Remove associated CSS styles for `#header-title-container` in `Header.astro`.

## Phase 3: Implementation (Countdown Integration)
- [x] Import `BlurText` into `src/components/molecules/Countdown.jsx`.
- [x] Update `Countdown` component's layout to include a vertical container for the title.
- [x] Add the `h1` element with `BlurText` below the timer units in `Countdown.jsx`.
- [x] Apply responsive font sizes (`text-2xl` to `text-6xl`) and brand colors (white).

## Phase 4: Validation
- [x] Verify `h1` exists on the page (check browser inspector).
- [x] Confirm the title is correctly animated using `BlurText`.
- [x] Check responsive layout on mobile, tablet, and desktop views.
- [x] Ensure the header logo and menu remain correctly aligned.
