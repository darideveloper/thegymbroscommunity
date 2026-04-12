# Design: Mobile Rendering and Hydration Stability

## Background Rendering (`LiquidEther`)
Mobile GPUs (especially Adreno and Mali found in Android devices) have varying levels of support for floating-point textures in WebGL 1.0/2.0.

### The Problem
The current implementation in `LiquidEther.jsx` attempts to use `THREE.FloatType` by default:
```javascript
getFloatType() {
  const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
  return isIOS ? THREE.HalfFloatType : THREE.FloatType;
}
```
Android devices, however, are forced to use `THREE.FloatType`, which often lacks the `OES_texture_float_linear` extension. This leads to broken or invisible rendering when shaders try to perform linear interpolation on these textures.

### The Solution
We will implement a dynamic capability check during initialization:
1.  Attempt to use `THREE.HalfFloatType` as a baseline for mobile performance and compatibility.
2.  On Android/Desktop, check if the browser supports `EXT_color_buffer_float` or similar extensions for the chosen type.
3.  **Crucially, check for `OES_texture_float_linear` or `OES_texture_half_float_linear` support. If linear filtering is unavailable for a type, fallback to the next best type or disable high-precision features to maintain visual smoothness.**
4.  Ensure FBOs are consistently initialized with the most compatible available type.

## Hydration Stability (`GlowDrawer`)
React Portals are inherently client-only because they require a DOM node (`document.body`) to attach to.

### The Problem
```tsx
if (typeof document === 'undefined') return null;
return createPortal(...);
```
The server correctly returns `null`. However, during hydration, `document` is defined, and React expects the client's output to match the server's `null`. Instead, it sees a Portal tree, causing a mismatch and triggering an expensive re-render of the entire component branch.

### The Solution
Implement the `mounted` pattern:
```tsx
const [isMounted, setIsMounted] = useState(false);
useEffect(() => setIsMounted(true), []);

if (!isMounted) return null; // Matches SSR null on first client pass
return createPortal(...);
```
This guarantees that the first client-side render is identical to the SSR output, satisfying React's hydration requirements. The Portal will be created in a subsequent render immediately following mount.
