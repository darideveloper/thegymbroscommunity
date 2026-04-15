# Tasks: Replace Text Logo with Image in Header

## Preparation
- [x] 1.1 Verify image file exists at `public/assets/logo.webp`.

## Component Updates
- [x] 2.1 **Update** `src/components/atoms/TGCLogo.astro`:
    - [x] Replace "TGC" text with `<img>` tag using `src="/assets/logo.webp"`.
    - [x] Add `alt="TGC Logo"` and `draggable={false}`.
    - [x] Set responsive height classes (e.g., `h-10 sm:h-14 w-auto`).
    - [x] Remove `font-logo`, `text-white`, and `tracking-[0.3em]` classes.
- [x] 2.2 **Update** `src/components/organisms/Header.astro`:
    - [x] Update `TGCLogo` class list:
        - [x] Remove `group-data-[scrolled=true]:text-lg`, `sm:group-data-[scrolled=true]:text-2xl`, and `group-data-[scrolled=true]:tracking-[0.2em]`.
        - [x] Add `group-data-[scrolled=true]:scale-75 origin-left`.

## Validation
- [x] 3.1 **Verify** the logo image is visible in the header on both desktop and mobile. (Visual verification)
- [x] 3.2 **Verify** the logo shrinks smoothly when scrolling down. (Visual verification)
- [x] 3.3 **Verify** the logo link still points to the home page (`/`).
- [x] 3.4 **Run** `npm run build` to ensure no regression in static asset handling.
