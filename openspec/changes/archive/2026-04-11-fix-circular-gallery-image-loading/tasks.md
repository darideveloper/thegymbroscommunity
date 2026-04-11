# Tasks: Fix CircularGallery Image Loading Reliability

## Implementation

- [x] **Task 1: Refactor Image Loading in `CircularGallery.jsx`**
  - **Description**: Update `Media.createShader` to attach `onload` and `onerror` listeners before setting `img.src`. Remove `img.crossOrigin = 'anonymous'`. Set `texture.needsUpdate = true` in `onload`.
  - **Verification**: Inspect the code to ensure the loading sequence is correct and `crossOrigin` is removed.

- [x] **Task 2: Harden Shader Math in `CircularGallery.jsx`**
  - **Description**: In the fragment shader, update aspect ratio calculations to use `max(dimension, 0.001)` to prevent division by zero.
  - **Verification**: Reload the page to confirm images render correctly without glitches or missing planes.

- [x] **Task 3: Update Uniform Initializations in `CircularGallery.jsx`**
  - **Description**: Change `uPlaneSizes` and `uImageSizes` initial uniform values from `[0, 0]` to `[1, 1]`.
  - **Verification**: Ensure no `NaN` errors or warnings in the browser console during the component's initial mounting.

## Validation

- [x] **Task 4: End-to-End Image Loading Test**
  - **Description**: Perform multiple manual reloads of the application, including hard refreshes (clearing cache) and normal reloads (using cache), to confirm all images in the carousel always load successfully.
  - **Verification**: Confirm that every plane in the gallery consistently displays its assigned product image.
