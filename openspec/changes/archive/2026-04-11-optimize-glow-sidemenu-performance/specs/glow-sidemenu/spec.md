# Spec: Glow Sidemenu Performance

## MODIFIED Requirements

### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. It MUST NOT use `box-shadow` to avoid repaint performance issues during translation, and MUST utilize `will-change: transform, opacity` for hardware acceleration.

#### Scenario: Menu Open
When the user clicks the menu toggle button, the black panel smoothly slides and fades into view without frame drops.

### Requirement: GSAP Staggered Entrance
Menu items SHALL animate into view sequentially (staggered) after the main panel has faded in, using snappy timings (e.g., 0.3s duration, 0.05s stagger) and MUST utilize `will-change: transform, opacity` to ensure 60fps performance. They MUST use `autoAlpha` instead of `opacity` in GSAP for performance.

#### Scenario: Staggered Loading
When the menu opens, the links animate rapidly from `autoAlpha: 0` to `autoAlpha: 1` and `y: 20` to `y: 0`, feeling immediately responsive. Also, the `.glow-sidemenu-link` hover transitions MUST use specific CSS properties instead of `all`.

### Requirement: Close Interaction (Click Outside & Close Button)
The menu SHALL close when the user interacts with the close button or clicks any area outside the main content of the menu. The overlay MUST use a solid semi-transparent background color, MUST NOT use `backdrop-filter: blur`, and MUST use `will-change: opacity` to prevent GPU bottlenecks during opacity animations.

#### Scenario: Click Outside
Clicking on the dark background overlay triggers the closing animation, which executes smoothly without causing browser layout thrashing.