# Design: CircularGallery Rendering Reliability

## Technical Approach
1.  **Race Condition Fix:** We must ensure the `onload` handler is registered *before* assigning `src` to the `Image` object. This ensures that even if the image is instantly available (from cache), the handler is ready to process the `texture.image = img` assignment.
2.  **CORS Correction:** Since images are local assets managed by Astro and Vite, `crossOrigin = 'anonymous'` is not required and should be removed to avoid unnecessary preflight checks or potential blockages.
3.  **Shader Robustness:**
    - The fragment shader's aspect ratio calculation (`uPlaneSizes.x / uPlaneSizes.y`) is dangerous if the divisor is zero.
    - We will add a small epsilon (`0.001`) to all divisors in GLSL to prevent `Infinity` or `NaN`.
    - Uniforms `uPlaneSizes` and `uImageSizes` should be initialized to `[1, 1]` to ensure the initial frame is mathematically valid.
4.  **Property Fix:** The `Media.createTitle` method passes `fontFamily: this.font` to the `Title` constructor, but the `Title` constructor uses `font`. We will correct this to `font: this.font`.
5.  **WebGL Mipmap Generation:** Disable `generateMipmaps` on textures. Browsers and WebGL drivers often panic when generating mipmaps for Non-Power of Two (NPOT) textures, crashing the render cycle. Setting this to `false` resolves driver errors.
6.  **Safe Text Parsing:** Use regex (`font.match(/\d+/)?.[0] || '30'`) to extract the numeric size from font properties like `"bold 30px Figtree"`. Relying on `parseInt` alone causes `NaN`, which creates an invalid `0x0` canvas and triggers a WebGL `INVALID_VALUE` exception.

## System Impacts
- Improved startup time for the gallery as the first frame will no longer render `NaN` planes.
- Consistent image loading regardless of browser caching status.
- Improved font styling reliability for product titles.
- Total elimination of NPOT texture driver panics and `INVALID_VALUE` canvas errors.
