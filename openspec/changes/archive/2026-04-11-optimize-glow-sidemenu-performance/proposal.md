# Proposal: Optimize Glow Sidemenu Performance

## Problem
The newly implemented `GlowSidemenu` component suffers from performance bottlenecks, particularly on lower-end devices or mobile. The animations feel sluggish and can drop frames. The primary causes are the use of `backdrop-filter: blur` on the animating overlay, an animating heavy `box-shadow` on the moving panel, lack of hardware acceleration hints (`will-change`), and drawn-out GSAP timeline durations.

## Solution
Optimize the CSS and GSAP animations for the `GlowSidemenu` component by removing expensive CSS properties during animation, adding GPU acceleration hints, and tightening the animation timings to make the menu feel snappier and more responsive.

## Scope
- Update `src/components/GlowSidemenu/GlowSidemenu.css` to remove `backdrop-filter`, remove `box-shadow`, add `will-change` properties (including to overlay), and refine `transition: all` to specific properties on links.
- Update `src/components/GlowSidemenu/GlowSidemenu.tsx` to reduce the duration and stagger timings in the GSAP timeline, and replace `opacity` with `autoAlpha` for menu items.

## Success Criteria
- The menu opens and closes smoothly at 60fps without dropped frames.
- The perceived wait time from clicking the toggle to seeing actionable menu items is significantly reduced.
