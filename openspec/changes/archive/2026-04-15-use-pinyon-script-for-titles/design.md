# Design: Apply Pinyon Script Font to Titles

## Architectural Reasoning
The goal is to apply the already installed "Pinyon Script" font to all titles and promotional texts, ensuring consistency with the logo font.

### Tailwind Theme Integration
The `font-heading` theme property in `global.css` is already set to 'Pinyon Script'. By applying this property to standard heading tags (`h1-h6`) and specific component classes, we ensure that the typography remains consistent throughout the application.

### Implementation Strategy
1. **Global Base Style:** We will use `@layer base` in `global.css` to apply `font-heading` to all `h1, h2, h3, h4, h5, h6` tags. This ensures that any new headings will default to the branded font.
2. **Component Specific Overrides:** 
    - **Header:** The "The Gym Bros Community" title in the header will be explicitly assigned the `font-heading` class to ensure it overrides any potential inherited styles.
    - **Bento Titles:** The `.magic-bento-card__title` class will be updated to use `var(--font-heading)`.
    - **Scroll Marquee:** The `.scroller` class in `ScrollVelocity.css` currently uses `var(--font-sans)`. We will update it to use `var(--font-heading)` to match the branding requirements.

### Visual Consistency
Since the logo also uses `font-heading`, this change will bring the rest of the site's typography into alignment with the logo's aesthetic. No changes are required to the logo itself as it already uses the correct font.
