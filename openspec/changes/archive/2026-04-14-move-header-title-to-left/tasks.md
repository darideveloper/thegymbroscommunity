# Tasks: Move Header Title to Left

## Implementation

- [x] **Modify `src/components/organisms/Header.astro` layout**
  - [x] Wrap `TGCLogo` and `h1` in a common flex container.
  - [x] Remove the empty middle grid column.
  - [x] Update the main header container to use `flex justify-between`.
- [x] **Adjust `h1` alignment**
  - [x] Remove `text-center` from the `h1` tag.
  - [x] Update `BlurText` prop `className` to remove `justify-center`.
- [x] **Verify responsiveness and scrolling**
  - [x] Ensure the font-size shrinking effect remains functional in the new layout.
  - [x] Verify alignment on mobile and desktop screens.

## Validation
- [x] Manual visual check of the header in both scrolled and unscrolled states.
- [x] Confirm the logo and title are properly aligned on the left.
- [x] Confirm the navigation drawer remains on the far right.
