# Tasks: Update Project Fonts

- [x] **1. Dependency Management**
    - [x] 1.1 Install new fonts: `npm install @fontsource/libre-baskerville @fontsource/noto-serif` <!-- id: 1 -->
    - [x] 1.2 Uninstall unused fonts: `npm uninstall @fontsource/pinyon-script @fontsource/lato @fontsource-variable/dm-sans @fontsource-variable/raleway @fontsource/red-rose` <!-- id: 2 -->
- [x] **2. Global Styles Update**
    - [x] 2.1 Update font imports in `src/styles/global.css`. <!-- id: 3 -->
    - [x] 2.2 Update Tailwind `@theme` in `src/styles/global.css` to use the new fonts. <!-- id: 4 -->
    - [x] 2.3 Update `@layer base` in `src/styles/global.css` to apply the new fonts to `html` and headings. <!-- id: 5 -->
- [x] **3. Component Review**
    - [x] 3.1 Verify `src/components/organisms/Header.astro` uses `font-heading` for the title. <!-- id: 6 -->
    - [x] 3.2 Verify `src/components/molecules/react-bits/ScrollVelocity.css` uses the new heading font. <!-- id: 7 -->
    - [x] 3.3 Verify `src/components/organisms/react-bits/MagicBento.css` uses the new heading font. <!-- id: 8 -->
- [x] **4. Verification**
    - [x] 4.1 Run `npm run build` to ensure no errors. <!-- id: 9 -->
    - [x] 4.2 Verify visual changes in the browser (if possible, or via manual inspection of CSS output). <!-- id: 10 -->
