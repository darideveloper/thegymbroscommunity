# Design: Replace Text Logo with Image in Header

## Current State
The `TGCLogo.astro` component renders the text "TGC" using the `font-logo` (Pinyon Script) font. It uses `tracking-[0.3em]` for spacing and `text-2xl sm:text-4xl` for sizing. The `Header.astro` component reduces the font size on scroll using `group-data-[scrolled=true]:text-lg sm:group-data-[scrolled=true]:text-2xl`.

## Proposed Design
The text will be replaced by an `<img>` tag pointing to `/assets/logo.webp`. The component will become a wrapper for the image, while maintaining the same link behavior and transition properties.

### Component: `TGCLogo.astro`
- **Link**: Remains an `<a>` tag pointing to `/`.
- **Image**: An `<img>` tag with `src="/assets/logo.webp"` and `alt="TGC Logo"`.
- **Sizing**: The image will have a responsive base height (e.g., `h-10 sm:h-14`).
- **Styles**: Remove `font-logo`, `text-white`, and `tracking` classes.

### Component: `Header.astro`
- **Shrink Effect**: Replace the font-size reduction classes on `TGCLogo` with a scale transformation: `group-data-[scrolled=true]:scale-75`.
- **Origin**: Use `origin-left` to ensure the logo shrinks toward the left margin rather than its center.

### Rationale
Using an image ensures branding is consistent with other UI parts (like the side menu) and external platforms. Using `scale-75` for the scroll effect provides a smoother visual transition than changing font-size, as it avoids sub-pixel rendering shifts.

## Trade-offs
- **Accessibility**: Replaces text with image, so `alt` text is critical.
- **Performance**: Adds a network request for the logo image, but since it's already used in the side menu, it will likely be cached.
