# Tasks: Fix CircularGallery Rendering Reliability

- [x] **Task 1: Refactor Image Loading in `CircularGallery.jsx`**
  - Register `onload` handler before setting `img.src`.
  - Remove `crossOrigin = 'anonymous'`.
- [x] **Task 2: Harden Shader Math in `CircularGallery.jsx`**
  - Add `0.001` epsilon to aspect ratio divisors in the fragment shader.
- [x] **Task 3: Update Uniform Initializations in `CircularGallery.jsx`**
  - Change `uPlaneSizes` and `uImageSizes` initial values from `[0, 0]` to `[1, 1]`.
- [x] **Task 4: Fix Title Font Property**
  - Update `createTitle` to pass `font` instead of `fontFamily`.
- [x] **Task 5: Fix WebGL Mipmap & Canvas Errors**
  - Set `generateMipmaps: false` when creating the texture.
  - Fix font dimension parsing in `createTextTexture` using regex to avoid `NaN` values.
- [ ] **Task 6: Validation**
  - Verify that products 1 and 8 render consistently upon multiple refreshes.
  - Check that titles use the correct `Figtree` font from the `font` prop.
  - Confirm the browser console is free of WebGL `INVALID_VALUE` and `0x00000502` driver errors.
