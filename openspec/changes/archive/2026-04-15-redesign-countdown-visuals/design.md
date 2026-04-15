# Design: Classic Digital Clock Redesign

## Architecture Overview
The redesign focuses on visual transformation from a boxy layout to a cohesive, full-width "digital clock face." The existing timer logic remains, while the styling is rebuilt for a more professional digital aesthetic.

## Core Design Principles
- **Aesthetic:** Digital LED / Classic mechanical timer.
- **Cohesion:** Single, shared semi-transparent background.
- **Flexibility:** Responsive scaling across all screen widths.

## Key Changes Detail

### 1. Font Integration
We'll use **Orbitron** (`@fontsource/orbitron`), which is designed for a modern, high-tech digital look.
- **Registration:** Added as `--font-clock` in Tailwind.
- **Styling:** Applied as `font-clock tabular-nums font-bold`. This ensures digits have consistent widths and a classic LED-like feel.

### 2. The "Clock Screen" (Countdown.jsx)
Instead of individual squares, the units will reside within a single "screen" container.
- **Refactored Wrapper:** A `div` that wraps all four `TimeUnit` components.
- **Background:** `bg-black/80 backdrop-blur-3xl p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-3xl shadow-black/50`.
- **Layout:** Flexbox with gaps that scale according to screen size (e.g., `gap-6` on mobile, `gap-16` on desktop).
- **Transitions:** Numbers will keep the existing Framer Motion `popLayout` transitions to ensure the "digital clock" feels alive and premium.

### 3. Responsive Hero Layout (Hero.astro)
The countdown will now own the center-stage.
- **Removal of Offsets:** Current negative margins (`-ml-32`, `-ml-64`, `-mb-96`) and width limits (`w-md`) are eliminated.
- **Positioning:** The countdown will be placed in a full-width container (`w-full flex justify-center py-10`).
- **Scale:** The numbers will use responsive text sizes (e.g., `text-5xl` for mobile, `text-8xl` for desktop) to ensure readability and impact.

## Implementation Details
- **Unit Separation:** We will use small "separators" (e.g., colons or subtle gaps) to maintain the digital clock readability without needing individual boxes.
- **Aesthetic Touches:** A subtle "ghost segment" glow or high-contrast white/primary color digits against the black semi-transparent screen.
