# Change: Restore Header H1 Title with Shrinking Effect

## Why
During a previous refactor, the main header `h1` brand name and its dynamic scroll-to-shrink behavior were removed, leaving the codebase out of sync with the existing `header` specification. Restoring the `h1` title is necessary to re-establish strong brand recognition, improve accessibility, and fulfill the current OpenSpec requirements.

## What Changes
- Restore the 3-column grid layout in `src/components/organisms/Header.astro`.
- Re-introduce the `BlurText` component to render the main brand `h1` title centered in the header.
- Re-implement the scroll event logic to toggle the `data-scrolled` attribute on the header element.
- Apply Tailwind classes using the `group-data-[scrolled=true]:` variant to shrink the font size of the `h1` and the logo when the user scrolls down.

## Impact
- Affected specs: `header`
- Affected code: `src/components/organisms/Header.astro`
