# Design: Glow Sidemenu Performance Optimizations

## Animation & Rendering Strategy

### CSS Optimizations
1. **Remove `backdrop-filter: blur`:** Animating the opacity of an element with a backdrop-filter forces continuous, expensive repaints. We will remove the blur and rely on a slightly darker solid/semi-transparent background for the overlay (`rgba(0, 0, 0, 0.85)`).
2. **Remove `box-shadow`:** A large box shadow on an element being translated (`xPercent`) also causes significant repaint overhead. Given the dark theme and overlay, the shadow is redundant and detrimental to performance. We will remove it.
3. **Hardware Acceleration (`will-change`):** Add `will-change: transform, opacity;` to `.glow-sidemenu-panel` and `.glow-sidemenu-item`, and `will-change: opacity;` to `.glow-sidemenu-overlay`. This tells the browser to promote these elements to their own composite layers on the GPU before the animation begins, preventing jank at the start of the timeline.
4. **Refine Transitions:** Change `transition: all` to specific properties (`color, text-shadow, transform`) on `.glow-sidemenu-link` to avoid performance anti-patterns and jank.

### GSAP Timeline Adjustments
Use `autoAlpha` instead of `opacity` for `.glow-sidemenu-item` to ensure hidden elements are removed from the render tree when invisible.

The current timeline is too drawn out:
- Overlay: 0.4s
- Panel: 0.6s
- Items: 0.5s (with 0.1s stagger)
- Ease: `back.out(1.7)` (which has a long tail)

**New Timings:**
- Overlay: `0.3s`
- Panel: `0.4s`
- Items: `0.3s` with a `0.05s` stagger.
- Ease: Change to a snappier `power3.out` or `back.out(1.2)` to reduce the settling time.
