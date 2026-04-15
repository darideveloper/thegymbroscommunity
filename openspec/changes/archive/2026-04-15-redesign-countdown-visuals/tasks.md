# Tasks: Redesign Countdown Visuals (Classic Digital Clock)

- [x] 1. **Preparation**
    - [x] 1.1 Install `@fontsource/orbitron`. <!-- id: 1 -->
    - [x] 1.2 Import Orbitron (700 weight) in `src/styles/global.css`. <!-- id: 2 -->
    - [x] 1.3 Add `--font-clock: 'Orbitron', sans-serif;` to the Tailwind `@theme` in `global.css`. <!-- id: 3 -->

- [x] 2. **Component Redesign (`Countdown.jsx`)**
    - [x] 2.1 Refactor `Countdown.jsx` to wrap all units in a single semi-transparent black container ("Digital Screen"). <!-- id: 4 -->
    - [x] 2.2 Remove background and border styling from the individual `TimeUnit` components to make them "float". <!-- id: 5 -->
    - [x] 2.3 Apply `font-clock tabular-nums` and update number sizes/colors for a high-impact digital look. <!-- id: 6 -->
    - [x] 2.4 Add subtle separators (colons or spacing) to improve the "digital clock" readability. <!-- id: 12 -->

- [x] 3. **Layout Adjustment (`Hero.astro`)**
    - [x] 3.1 Remove all negative margins and width constraints on the `<Countdown />` usage. <!-- id: 7 -->
    - [x] 3.2 Implement a centered, full-width container for the countdown in the Hero section. <!-- id: 8 -->
    - [x] 3.3 Ensure the countdown scales responsively for mobile and tablet views. <!-- id: 13 -->

- [x] 4. **Validation**
    - [x] 4.1 Verify that the font is loading and digits are monospaced (`tabular-nums`). <!-- id: 9 -->
    - [x] 4.2 Verify the "Digital Screen" background looks cohesive and centered on all devices. <!-- id: 10 -->
    - [x] 4.3 Ensure accessibility labels and transitions still function as expected. <!-- id: 11 -->
