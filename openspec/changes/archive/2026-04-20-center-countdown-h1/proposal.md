# Proposal: Center Countdown H1 Title

## Problem Statement
The primary brand title (`h1`) inside the `Countdown` component is currently not perfectly centered on mobile devices. While the container is centered, the text content within the `h1` (rendered via the `BlurText` component) defaults to left-aligned flex-wrap behavior, causing an offset on smaller screens where the title might wrap or appear off-center.

Additionally, the current implementation has a semantic issue: the `BlurText` component renders a `<p>` tag inside the `<h1>`, which is invalid HTML.

## Proposed Solution
1. **Fix Alignment:** Update the `Countdown.jsx` component to ensure the `BlurText` container explicitly centers its content using `justify-center`.
2. **Improve Semantics:** Modify the `BlurText.jsx` component to allow customizing the wrapper tag (defaulting to `div` or `span` instead of `p`) or ensure it uses a neutral container like a `div` that is valid when nested or easily swappable. Actually, for `h1` nesting, the internal component should ideally not introduce a block-level element like `p` if possible, or we should change the `BlurText` to use a `div` and ensure the `h1` styles are preserved.

## Scope
- `src/components/molecules/Countdown.jsx`: Add centering classes to the `BlurText` invocation.
- `src/components/atoms/react-bits/BlurText.jsx`: Change the default wrapper tag from `p` to `div` or allow a `tag` prop to improve HTML validity.

## Impact
- **Visual:** The brand title will be perfectly centered across all breakpoints.
- **SEO/Accessibility:** Improved HTML semantics by removing the paragraph inside the heading.
