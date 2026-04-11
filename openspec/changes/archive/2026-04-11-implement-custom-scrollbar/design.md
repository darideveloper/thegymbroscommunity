# Design: Custom Scrollbar

## Goals
Create a modern, aesthetic scrollbar that integrates seamlessly with the "Gym Bros Community" dark-themed environment.

## Design Decisions

### 1. Colors & Branding (Strictly Using Existing Variables)
- **Thumb Color:** MUST use `var(--primary)`. This ensures absolute consistency with the existing brand accent without modifying the theme.
- **Track Color:** MUST use `transparent` or `var(--background)`. This maintains the current aesthetic without introducing new colors.
- **Hover State:** SHOULD use `var(--primary-foreground)` or a CSS opacity/filter on `var(--primary)` to provide feedback without defining new color variables.

### 2. Geometry
- **Width:** `10px` (a balanced, aesthetic width).
- **Rounding:** `full` rounding for the thumb edges to provide a modern "capsule" look that matches the project's high-performance aesthetic.

### 3. Cross-Browser Support
- **Webkit (Chrome, Safari, Edge, etc.):** Use `::-webkit-scrollbar`, `::-webkit-scrollbar-track`, and `::-webkit-scrollbar-thumb`.
- **Firefox:** Use `scrollbar-width: thin` and `scrollbar-color: var(--primary) transparent`.

### 4. Integration
The implementation will be added to `src/styles/global.css` under the `@layer base` or as global rules. Since the project uses Tailwind v4, we can define these using standard CSS.

```css
/* Example logic (not implementation) */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--primary) transparent;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 20px;
  border: 3px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary-foreground); /* Or similar brighter color */
}
```

## Trade-offs
- **Customizability:** `::-webkit-scrollbar` offers more control than `scrollbar-color`. We accept that Firefox users might see a simpler version of the scrollbar.
- **Accessibility:** Ensure the scrollbar thumb has enough contrast against the background. Using `var(--primary)` should satisfy this given the dark theme.
