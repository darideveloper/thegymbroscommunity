# Design: Fix GlowDrawer Hydration Mismatch

## Context
React hydration expects the **first** client-side render output to exactly match the server-side output.
-   **Server:** `if (typeof document === 'undefined') return null;` returns `null`.
-   **Client (Hydration):** `if (typeof document === 'undefined')` is `false`, so it attempts to render the `createPortal`.
-   **Result:** Mismatch.

## Proposed Architecture
The component will use a `mounted` state to delay the rendering of the portal until after the hydration is complete.

### Hydration Sequence
1.  **Server (SSR):** Component renders with `mounted: false`, returns `null`.
2.  **Client (Hydration):** Component hydrates with `mounted: false` (default state), returns `null`. **MATCH FOUND.**
3.  **Client (Post-Hydration):** `useEffect` runs, setting `mounted: true`.
4.  **Client (Second Render):** Component re-renders with `mounted: true`, returning the `createPortal`.

## Implementation Details
- **File:** `src/components/organisms/GlowDrawer.tsx`
- **Imports:** Add `useState` to `import React, { useRef, useEffect } from 'react';`.
- **Logic:**
    ```tsx
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    ```
- **Note:** This also removes the redundant `if (typeof document === 'undefined')` check as `isMounted` will be `false` during SSR.

## Alternatives Considered
-   **`client:only="react"`:** This could be applied to `GlowNavigationDrawer` in `Header.astro`. This would also fix the issue but it's less robust as it requires every user of the component to remember to use the `client:only` directive. Making the component self-healing is a better long-term design.
