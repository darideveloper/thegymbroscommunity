---
change-id: fix-glow-drawer-hydration
title: Fix GlowDrawer Hydration Mismatch
status: ready
author: Gemini CLI
---

# Proposal: Fix GlowDrawer Hydration Mismatch

## Context
The `GlowDrawer` component is currently causing a React hydration mismatch error because it uses a simple `if (typeof document === 'undefined')` check. While this works to skip SSR (server-side rendering) by returning `null`, it immediately renders the Portal on the **first client-side pass**. Since the server HTML was `null`, React detects a mismatch between the empty server content and the portal content on the client.

## Objective
To implement a "mounted state" pattern in `GlowDrawer.tsx` that ensures the first client-side render also returns `null`, matching the server, and only renders the Portal once the component has successfully hydrated.

## Why
The `GlowDrawer` component was causing React hydration mismatch errors because it used a `typeof document === 'undefined'` check to skip SSR. This caused the first client-side render (during hydration) to differ from the server's output (Portal vs null), leading to unstable behavior and console errors.

## What Changes
1.  **Introduce `isMounted` state:** Use `useState(false)` and `useEffect` to track when the component has mounted on the client.
2.  **Update Rendering Logic:** Delay rendering of the React Portal until `isMounted` is true, ensuring the first client-side render matches the server's `null` output.
3.  **Refactor GlowDrawer.tsx:** Implement these changes and remove the redundant `document` check.
