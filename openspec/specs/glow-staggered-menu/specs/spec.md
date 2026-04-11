# Design Specification: GlowStaggeredMenu

## 1. File Structure
- `src/components/GlowStaggeredMenu.jsx` (Component Logic)
- `src/components/GlowStaggeredMenu.css` (Component Styles)

## 2. Animation Logic (GSAP)
The animation will use a single `gsap.timeline()` for the panel:
1. **Slide In**: `xPercent: 100` to `xPercent: 0` with `power4.out`.
2. **Text Fade & Stagger**: `stagger: 0.1` fade-in with `opacity: 0` to `opacity: 1`.

## 3. CSS Theme & Effects
```css
.glow-menu-panel {
  background: #000;
  backdrop-filter: blur(10px);
}

.glow-menu-item {
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  transition: text-shadow 0.3s ease;
}

.glow-menu-item:hover {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}
```

## 4. Interaction Handling
- **`useState`**: Track `isOpen`.
- **`gsap.context`**: Ensure proper cleanup on unmount.
- **`mousedown` listener**: Detect clicks outside `panelRef` to trigger `closeMenu`.
