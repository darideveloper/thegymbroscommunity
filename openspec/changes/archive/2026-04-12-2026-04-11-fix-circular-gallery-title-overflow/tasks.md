# Tasks: Fix Product Name Overflow in CircularGallery

- [x] Modify `Title.createMesh` in `src/components/molecules/react-bits/CircularGallery.jsx` to clamp text width.
- [x] Verify the fix manually with the following test strings:
    - [x] `Short Title`: Should remain at its default size.
    - [x] `This is a very long product name that will definitely overflow the card`: Should be scaled down to fit within the 80% width.
    - [x] `Medium Length Product Name`: Should be scaled down only if it exceeds the 80% threshold.
- [x] Verify that the aspect ratio of the text is maintained (no stretching or squashing).
- [x] Ensure the hover effect (`uHover` uniform) still works correctly on scaled titles.
