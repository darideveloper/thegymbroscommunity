# Tasks: Center Countdown H1 Title

- [x] 1. **Improve `BlurText` Flexibility**
    - [x] Update `src/components/atoms/react-bits/BlurText.jsx` to support a custom container tag (default to `div`). <!-- id: 1 -->
- [x] 2. **Fix Countdown Title Alignment**
    - [x] Update `src/components/molecules/Countdown.jsx` to pass `justify-center` to the `BlurText` component. <!-- id: 2 -->
    - [x] Ensure the `h1` element uses `text-center` for fallback/consistency. <!-- id: 3 -->
- [x] 3. **Validation**
    - [x] Verify centering on mobile viewport sizes (simulated or via responsive dev tools). <!-- id: 4 -->
    - [x] Inspect DOM to ensure no `<p>` tag exists inside the `<h1>`. <!-- id: 5 -->
