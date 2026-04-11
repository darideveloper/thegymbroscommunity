# Fix CircularGallery Image Loading Reliability

## Why
The `CircularGallery` component exhibits intermittent image loading and rendering failures. Users report that sometimes only a single image loads, while at other times, random images fail to appear. This is primarily caused by WebGL state initialization issues (division by zero in shaders), race conditions in image loading (event listeners attached too late), and problematic CORS settings for local assets.

## What Changes
Refactor the image loading logic in `CircularGallery.jsx` to ensure:
1.  Event listeners (`onload`, `onerror`) are attached before setting `img.src`.
2.  WebGL textures are explicitly flagged for update (`needsUpdate = true`) after image load.
3.  Shader math is robust against zero or near-zero dimensions (initial states or resize).
4.  Remove unnecessary `crossOrigin` settings for local assets to avoid CORS blocks.
5.  Initialize uniforms to non-zero values to prevent `NaN` during startup.

## Expected Outcomes
- Reliable image loading in all browsing sessions.
- Stable rendering without flicker or "missing" image planes.
- Consistent behavior across browser cache hits and misses.
