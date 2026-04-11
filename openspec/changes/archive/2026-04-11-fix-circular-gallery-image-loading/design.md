# Design: CircularGallery Reliability

## Architectural Reasoning
The `CircularGallery` component uses OGL (a minimal WebGL library) to render a carousel of images on 3D planes. The current implementation suffers from several low-level technical issues:

### 1. Image Loading Race Condition
In JavaScript, setting `img.src` before `img.onload` can lead to the load event firing before the listener is attached, especially for cached images. This proposal reorders these calls.

### 2. CORS and Local Assets
Setting `crossOrigin = 'anonymous'` on `Image` objects for local files served by Vite/Astro can trigger CORS preflight checks that may not be supported by the local dev server, leading to random load failures. Removing this for local assets improves reliability.

### 3. WebGL State Initialization (NaN in Shaders)
The `uPlaneSizes` and `uImageSizes` uniforms are initialized to `[0, 0]`. When these are used in the fragment shader for division to calculate aspect ratios, they produce `NaN` (Not a Number) or `Infinity`, which can result in transparent or black fragments depending on the GPU. Initializing them to `[1, 1]` and using `max(value, 0.001)` in the shader provides safety.

### 4. Texture Updates
Explicitly setting `texture.needsUpdate = true` ensures that once the image loads, its data is immediately uploaded to the GPU memory on the next frame.

## Proposed Changes
- **`CircularGallery.jsx`**:
  - Update `Media.createShader` to use robust aspect ratio logic.
  - Update `Media.createShader` to initialize size uniforms to `[1, 1]`.
  - Refactor image loading sequence.
  - Signal texture updates in `onload`.
