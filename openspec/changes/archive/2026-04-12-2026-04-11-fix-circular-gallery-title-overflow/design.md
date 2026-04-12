# Design: Fix Product Name Overflow in CircularGallery

## Current State
The `Title` class's `createMesh` method in `CircularGallery.jsx` calculates the scale of the title mesh as follows:
```javascript
const aspect = width / height;
const textHeight = this.plane.scale.y * 0.25;
const textWidth = textHeight * aspect;
this.mesh.scale.set(textWidth, textHeight, 1);
```
Here, `textWidth` scales linearly with the number of characters in the product name, leading to overflow if the name is too long for the card (`this.plane.scale.x`).

## Proposed Change
Introduce a `maxWidth` constraint to the title mesh scale. Since the `Title` mesh is a child of the `Media` plane (which has a local unit width of 1.0), we will clamp the title's local scale `x` to `0.8` (80% of the card width).

### Modified Logic in `createMesh()`
We calculate the initial dimensions and then apply a reduction scale if the width exceeds the threshold:

```javascript
const aspect = width / height;
const initialHeight = this.plane.scale.y * 0.25; // Note: plane.scale.y is 1.0 at creation
const initialWidth = initialHeight * aspect;
const maxWidth = 0.8; // Clamping to 80% of the unit-width plane

if (initialWidth > maxWidth) {
  const reductionRatio = maxWidth / initialWidth;
  const finalWidth = maxWidth;
  const finalHeight = initialHeight * reductionRatio;
  this.mesh.scale.set(finalWidth, finalHeight, 1);
} else {
  this.mesh.scale.set(initialWidth, initialHeight, 1);
}
```

## Considerations
- **Local Space:** By using `0.8` as the `maxWidth`, the fix remains independent of the plane's final screen-space scale, which is set later in `onResize`.
- **Legibility:** Preserving the aspect ratio ensures the text does not appear stretched or squashed, only smaller.
- **Centering:** The title mesh remains centered at `position.y = 0`, ensuring it looks balanced even when scaled down.
