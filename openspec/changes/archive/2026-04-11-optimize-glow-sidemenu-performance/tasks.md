# Tasks: Optimize Glow Sidemenu Performance

- [x] Remove `backdrop-filter: blur` from `.glow-sidemenu-overlay` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Increase background opacity of `.glow-sidemenu-overlay` to `rgba(0, 0, 0, 0.85)` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Remove `box-shadow` from `.glow-sidemenu-panel` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Add `will-change: transform, opacity;` to `.glow-sidemenu-panel` and `.glow-sidemenu-item` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Reduce GSAP timeline durations in `src/components/GlowSidemenu/GlowSidemenu.tsx` (Overlay: 0.3s, Panel: 0.4s, Items: 0.3s).
- [x] Decrease GSAP stagger timing to `0.05` for `.glow-sidemenu-item` in `src/components/GlowSidemenu/GlowSidemenu.tsx`.
- [x] Update GSAP ease for `.glow-sidemenu-item` to `back.out(1.2)` or `power3.out` in `src/components/GlowSidemenu/GlowSidemenu.tsx`.
- [x] Change `transition: all 0.3s ease;` to `transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;` on `.glow-sidemenu-link` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Add `will-change: opacity;` to `.glow-sidemenu-overlay` in `src/components/GlowSidemenu/GlowSidemenu.css`.
- [x] Replace `opacity` with `autoAlpha` for `.glow-sidemenu-item` in `src/components/GlowSidemenu/GlowSidemenu.tsx`.
- [x] Manually verify that the menu animations feel faster, smoother, and drop fewer frames.
