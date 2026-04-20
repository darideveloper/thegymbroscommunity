# Design: Center Countdown H1 Title

## Component Alignment
The `Countdown` component uses a `flex-col items-center` container. However, the `BlurText` component creates its own flex container:

```jsx
<p className={cn('flex flex-wrap', className)} style={{ display: 'flex', flexWrap: 'wrap' }}>
```

On mobile, if the title "The Gym Bros Community" wraps, the flex items (words) will start from the left. To fix this, we need `justify-center`.

## HTML Semantics
Currently:
```jsx
<h1>
  <p>...</p>
</h1>
```
This is invalid. We will modify `BlurText` to use a `div` or a configurable tag. Since `BlurText` is a utility from "React Bits", we should make it flexible.

## Proposed Changes

### `BlurText.jsx`
- Add a `as` or `tag` prop, defaulting to `div`.
- Update the rendered element from `p` to the dynamic tag.

### `Countdown.jsx`
- Update the `BlurText` call to include `justify-center` in the `className`.
- Ensure the `h1` itself has `text-center` if necessary (though the flex centering in `BlurText` is the primary driver).
