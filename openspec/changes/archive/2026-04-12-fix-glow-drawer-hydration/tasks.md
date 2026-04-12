# Tasks: Fix GlowDrawer Hydration Mismatch

- [x] Refactor `src/components/organisms/GlowDrawer.tsx` <!-- id: 1 -->
    - [x] Add `useState` hook to manage `isMounted` state.
    - [x] Initialize `isMounted` to `false`.
    - [x] Use `useEffect` with an empty dependency array to set `isMounted` to `true` on mount.
    - [x] Replace the current `document === 'undefined'` check with `if (!isMounted) return null;`.
- [x] Verify fix in browser console <!-- id: 2 -->
    - [x] Run development server.
    - [x] Open console and verify no "Hydration failed" or "mismatch" errors are logged.
