# Design: Countdown Size Reduction

## Architecture Overview
The redesign focuses on scaling down the visual elements of the `Countdown.jsx` component by approximately 30%. The goal is to make it more compact without sacrificing the "Classic Digital Clock" look.

## Core Design Principles
- **Aesthetic:** High-precision digital timer, but more refined.
- **Proportionality:** Scaling down typography, padding, and rounding symmetrically.
- **Readability:** Ensuring the numbers remain large enough to be impactful across all viewports.

## Key Changes Detail

### 1. Typography Scaling
Digits will be reduced by ~30% in size:
- **Mobile:** `text-4xl` (~36px) -> **`text-2xl`** (~24px) or **`text-3xl`** (~30px).
- **Tablet (MD):** `text-7xl` (~72px) -> **`text-5xl`** (~48px).
- **Desktop (LG):** `text-9xl` (~128px) -> **`text-[6rem]`** (~96px) or **`text-7xl`** (~72px).

### 2. Container Scaling (The "Clock Screen")
The semi-transparent black background and its rounding will be scaled down:
- **Padding:**
    - Mobile: `p-8` -> **`p-5`**
    - Tablet (MD): `p-14` -> **`p-10`**
    - Desktop (LG): `p-20` -> **`p-14`**
- **Rounding:**
    - Mobile: `rounded-[2.5rem]` -> **`rounded-[1.75rem]`**
    - MD/LG: `rounded-[4rem]` -> **`rounded-[2.8rem]`**

### 3. Separation & Unit Scaling
- **Gap:** `gap-2/6/10` -> **`gap-1/4/6`**.
- **TimeUnit Min-Width:** `70px/120px/160px` -> **`50px/84px/112px`**.
- **Separator Dots:** Reduce dot size from `w-1.5/2` to **`w-1/1.5`**.

## Implementation Details
- Update the `Countdown.jsx` component classes with the new responsive values.
- Adjust the `TimeUnit` min-width to ensure the layout remains stable during digit transitions.
- Maintain the `80%` background opacity for contrast.
