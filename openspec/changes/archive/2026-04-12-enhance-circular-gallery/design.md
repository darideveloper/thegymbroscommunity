# Design: CircularGallery Visual Enhancements (Blur & Overlay)

## Architecture Overview
The `CircularGallery` component uses `ogl` for WebGL rendering. Enhancements focus on shader effects and interaction accuracy.

## Shader Logic Changes
### Media Fragment Shader (Blur & Overlay)
A constant 9-sample box blur is applied to the image texture. An 80% dark overlay is then mixed in based on the hover state.

**Fragment Shader Implementation:**
```glsl
uniform sampler2D tMap;
uniform float uHover; // Interpolated 0.0 to 1.0
...
void main() {
  float blur = 0.015; // Constant 1.5% blur
  vec4 color = vec4(0.0);
  // 9-sample blur kernel
  color += texture2D(tMap, uv + vec2(-blur, -blur)) * 0.0625;
  color += texture2D(tMap, uv + vec2(-blur, 0.0)) * 0.125;
  ...
  color += texture2D(tMap, uv + vec2(blur, blur)) * 0.0625;
  
  // 80% dark overlay on hover
  vec3 finalColor = mix(color.rgb, vec3(0.0), uHover * 0.8);
  
  float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
  float alpha = 1.0 - smoothstep(-0.002, 0.002, d);
  
  gl_FragColor = vec4(finalColor, alpha);
}
```

### Title Shader & Mesh
Titles are rendered with:
-   **Transparency**: `alpha * uHover` (fade in on hover).
-   **Z-Depth**: Positioned at `z = 0.5` with `depthTest: false` to ensure visibility over animated image planes.
-   **Scale**: 25% of image height for better centered visibility.

## Hover Interaction
The `App` class maps mouse coordinates using `getBoundingClientRect()` to ensure hover detection works correctly regardless of page layout:
```javascript
const rect = this.container.getBoundingClientRect();
const x = (e.clientX - rect.left);
const normalizedX = (x / this.screen.width) * 2 - 1;
this.mouse.x = (normalizedX * this.viewport.width) / 2;
```

## Animation
A standard `lerp(a, b, 0.1)` function is used in the `update()` loop to provide smooth 60FPS transitions for both the black overlay and title visibility.
