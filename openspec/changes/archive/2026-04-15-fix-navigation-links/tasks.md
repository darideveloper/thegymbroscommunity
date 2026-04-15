# Tasks: Fix Navigation Links and Socials

## 1. Setup
- [x] Research current link usage in `Header.astro`, `Layout.astro`, `BaseSEO.astro`.

## 2. Global Constants
- [x] Update `src/lib/constants.ts` with correct Instagram URL: `https://www.instagram.com/the_gymbros_community/`.
- [x] Remove `facebook` and `twitter` from `BUSINESS_DATA.social`.

## 3. UI Fixes (Broken Anchors)
- [x] Update `src/components/organisms/ProductShowcase.astro`: Add `id="products"` to root `<section>`.
- [x] Update `src/components/organisms/About.astro`: Add `id="about"` to root `<section>`.

## 4. Header Refactor
- [x] Update `src/components/organisms/Header.astro`: 
    - [x] Import `BUSINESS_DATA` from `src/lib/constants.ts`.
    - [x] Update `socialItems` to use `BUSINESS_DATA.social.instagram` for "EL GRAM".
    - [x] Remove placeholders for "EL FEED" and "ESTACIÓN DE MANDO".

## 5. Verification
- [x] Manually verify "Productos" link scrolls to `ProductShowcase`.
- [x] Manually verify "Acerca de" link scrolls to `About`.
- [x] Verify "EL GRAM" link opens the correct Instagram profile.
- [x] Run `npm run check` (or equivalent) to ensure no build errors.
