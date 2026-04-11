## 1. Directory Setup
- [x] 1.1 Create `src/components/atoms/react-bits`, `src/components/molecules/react-bits`, and `src/components/organisms/react-bits` directories.

## 2. Component Migration
- [x] 2.1 Move `BlurText.jsx`, `GradualBlur.jsx`, and `GradualBlur.css` to `atoms/react-bits/`.
- [x] 2.2 Move `CircularGallery.jsx`, `CircularGallery.css`, `LaserFlow.jsx`, `LaserFlow.css`, `ScrollVelocity.jsx`, and `ScrollVelocity.css` to `molecules/react-bits/`.
- [x] 2.3 Move `MagicBento.jsx` and `MagicBento.css` to `organisms/react-bits/`.
- [x] 2.4 Update internal imports within moved components (specifically the `../../lib/webgl` import in `CircularGallery.jsx`).

## 3. Reference Updates
- [x] 3.1 Update `src/pages/index.astro` imports for `BlurText`.
- [x] 3.2 Update `src/components/organisms/Hero.astro` imports for `LaserFlow`.
- [x] 3.3 Update `src/components/organisms/ProductShowcase.astro` imports for `ScrollVelocity` and `CircularGallery`.
- [x] 3.4 Update `src/components/organisms/About.astro` imports for `MagicBento`.

## 4. Validation
- [x] 4.1 Run `npm run build` to verify all imports are correct.
