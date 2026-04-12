## 1. Implementation
- [x] 1.1 Add `restore-header-h1` to `openspec/apply.toml` to track progress.
- [x] 1.2 Modify `src/components/organisms/Header.astro` layout: change the container from `flex justify-between` to `grid grid-cols-3`.
- [x] 1.3 Import `BlurText` from `../atoms/react-bits/BlurText.jsx` into `Header.astro`.
- [x] 1.4 Add the `h1` element in the center column of the grid rendering the `BlurText` component with the text "The Gym Bros Community".
- [x] 1.5 Update the `<script>` tag in `Header.astro` to toggle the `data-scrolled="true"` attribute on the `main-header` element when `window.scrollY > 50`.
- [x] 1.6 Apply `group-data-[scrolled=true]:` Tailwind sizing classes to both the logo and the `h1` elements to implement the shrink behavior.
- [x] 1.7 Add a `<style>` block to `Header.astro` to ensure `BlurText` inner `span` elements inherit the `h1`'s dynamically changing font size with a smooth CSS transition.
- [x] 1.8 Verify the scrolling behavior seamlessly reduces header height and text size on scroll without layout shifting.
