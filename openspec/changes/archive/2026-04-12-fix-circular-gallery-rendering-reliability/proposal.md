# Fix CircularGallery Rendering Reliability

## Summary
Users reported that images in the `CircularGallery` component were intermittently missing or rendering as black squares, specifically products 1 and 8. This was caused by a combination of a race condition in image loading, WebGL driver errors attempting to generate mipmaps for NPOT (Non-Power of Two) images, NaN calculations during 2D canvas generation for titles, incorrect CORS settings, and unstable WebGL shader math.

## Why
The `CircularGallery` uses OGL for WebGL rendering. The original implementation suffered from:
- **Race Condition:** `img.src` was set before `img.onload`, causing cached images to fire the load event before the handler was registered.
- **WebGL Instability:** Uniforms `uPlaneSizes` and `uImageSizes` were initialized to `[0, 0]`, leading to `NaN` calculations in the fragment shader before images were fully loaded.
- **WebGL Driver Errors:** The `Media` shader initialized textures with `generateMipmaps: true`. Attempting this on NPOT (Non-Power of Two) images crashed the WebGL driver (Error 0x00000502), causing black renders.
- **Canvas Generation Crash:** `createTextTexture` used `parseInt(font, 10)` on a string like `"bold 30px Figtree"`, which resulted in `NaN` for the text canvas height. This caused an `INVALID_VALUE: texImage2D: no canvas` error, breaking the render cycle.
- **CORS Violations:** `crossOrigin = 'anonymous'` was used for local filesystem assets, which is unnecessary and can cause failures.
- **Logic Error:** The `font` property was being passed as `fontFamily` to the `Title` class, which expected `font`.

## What Changes
- Refactor the `Media` class in `CircularGallery.jsx` for reliable image loading.
- Disable mipmap generation for NPOT textures.
- Fix `NaN` canvas dimension parsing in `createTextTexture`.
- Update shader math to be robust against division by zero.
- Correct uniform initializations.
- Fix title font property propagation.
