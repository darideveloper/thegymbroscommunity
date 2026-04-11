# Design: Font Configuration

## Approach
We will use Fontsource to self-host the selected fonts. This avoids external dependencies and improves performance.

- **Headings (h1, h2, h3):** Pinyon Script
- **Body:** Lato

We will add the imports to `src/styles/global.css` and use CSS custom properties for maintainability.
