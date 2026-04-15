---
change-id: move-h1-to-countdown
title: Move H1 Title from Header to Countdown Component
author: Gemini CLI
status: proposed
---

# Proposal: Move H1 Title from Header to Countdown Component

Currently, the primary title of the page ("The Gym Bros Community") is located in the static header. This proposal aims to move the title to the `Hero` section, specifically inside the `Countdown` component, to create a more impactful and centralized visual focus for the "NEXT RELEASE" message.

## Objectives
- **Centralize Branding:** Place the brand name directly under the countdown timer to reinforce the association between the brand and the upcoming release.
- **Simplify Header:** Reduce visual clutter in the fixed header, leaving only the logo and navigation.
- **Maintain SEO:** Ensure the `h1` tag remains on the page to preserve SEO signals for the primary brand name.

## Proposed Changes
- **Header:** Remove the `h1` container and the `BlurText` component.
- **Countdown:** Integrate the `h1` with `BlurText` inside the countdown's border container, positioned below the timer units.
- **Styling:** Adjust the title size and color (e.g., from brand primary to white) to harmonize with the countdown's dark, high-contrast aesthetic.

## Risk & Trade-offs
- **Hydration Impact:** The `h1` will move from an Astro-rendered container to a React-rendered one (inside `Countdown` with `client:only="react"`). This means the `h1` will not be visible in the initial HTML before JavaScript executes.
- **SEO Consideration:** While search engines index client-side content, moving the `h1` to a client-only component might have a minor impact compared to being in the static HTML.
