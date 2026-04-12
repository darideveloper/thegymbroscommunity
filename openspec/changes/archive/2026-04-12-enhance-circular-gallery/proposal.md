---
change-id: enhance-circular-gallery
title: Enhance CircularGallery with Blur, Overlay and Hover Effects
status: completed
author: daridev
description: Adds a constant blur effect, hover-triggered 80% black overlay, and centered white text to the CircularGallery component.
---

# Proposal: Enhance CircularGallery with Blur, Overlay and Hover Effects

## Why
The `CircularGallery` component currently lacks a polished and immersive visual experience. To align with the high-interactivity goals of The Gym Bros Community platform, we need more sophisticated visual feedback and branding elements. Using a constant blur effect provides a sophisticated look, while the high-contrast hover overlay ensures clear communication of active elements.

## What Changes
Modify the `CircularGallery.jsx` component's WebGL shaders and interaction logic to:
1.  Apply a constant 1.5% blur effect to all images.
2.  Ensure images maintain their rounded shape with hidden overflow via SDF clipping.
3.  Add an 80% dark black overlay that appears smoothly on hover.
4.  Move the image titles to the exact center of the image.
5.  Hide titles by default and reveal them in white color upon hovering over the image, ensuring they render on top of the 3D plane.
6.  Fix hover detection to accurately map mouse coordinates relative to the gallery container.

## Scope
-   `src/components/molecules/react-bits/CircularGallery.jsx`: Main implementation change.
-   `src/components/molecules/react-bits/CircularGallery.css`: Container styling.

## Technical Approach
-   **Shaders**: Update `Media` fragment shader to include a 9-sample blur kernel and `uHover` uniform for the 80% black mix.
-   **Title Rendering**: Update `Title` class to use `depthTest: false` and a higher Z-offset (`0.5`) to prevent clipping by the wavy image planes.
-   **Interaction**: Implement `getBoundingClientRect` based mouse tracking in the `App` class for accurate hover detection across different screen sizes and layouts.
-   **Interpolation**: Use `lerp` to smoothly animate the transition between idle and hover states for both the overlay and the title visibility.

## Constraints & Limitations
-   Standard CSS transitions are not used; all animations are handled in the WebGL `update()` loop for performance.
-   Blur is implemented as a 9-sample box blur in the fragment shader to balance quality and performance.
