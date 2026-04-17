# Design: Update Project Fonts

## Architectural Overview
The font update involves changing the CSS variable definitions and base layer styles in Tailwind CSS (v4) within `src/styles/global.css`. We will use Fontsource packages to import the fonts.

## Font Selection
- **Headings (`--font-heading`):** `Libre Baskerville`. It will be imported via `@fontsource/libre-baskerville`.
- **Body Text (`--font-base`):** `Noto Serif`. It will be imported via `@fontsource/noto-serif`.
- **Specialty Fonts:** `Orbitron` will be kept for the countdown as it is currently in use.

## Technical Details
1. **Dependency Management:**
   - Install: `@fontsource/libre-baskerville`, `@fontsource/noto-serif`.
   - Remove: `@fontsource/pinyon-script`, `@fontsource/lato`, `@fontsource-variable/dm-sans`, `@fontsource-variable/raleway`, `@fontsource/red-rose`.

2. **CSS Configuration (`src/styles/global.css`):**
   - Import the new fonts.
   - Update the `@theme` block to redefine `--font-sans` (as the base font) and `--font-heading`.
   - Update the `@layer base` block to apply these fonts to `html` and heading tags.

3. **Tailwind v4 Variables:**
   - We will map `Noto Serif` to `--font-sans` (or rename it to `--font-base` if preferred, but keeping `--font-sans` minimizes changes to existing utility usage if any). Since the user wants a serif font for text, it's safer to just reassign the variable.

## Verification Plan
- **Build Test:** Ensure `npm run build` succeeds without font-related errors.
- **Visual Inspection:** Verify that headings and body text correctly reflect the new serif fonts.
- **Dependency Check:** Verify that `package.json` no longer contains unused font packages.
