# tailwind-migration Specification

## Purpose
TBD - created by archiving change migrate-to-tailwind. Update Purpose after archive.
## Requirements
### Requirement: 100% Tailwind CSS Adoption
All custom components in the project MUST be styled exclusively using Tailwind CSS utilities. External CSS files and inline `style` attributes MUST be eliminated for static visual styling.

#### Scenario: Component Styling Check
Given a custom component (e.g., `GlowSidemenu.tsx`, `TGCLogo.astro`)
When the source code is inspected
Then no inline `style` attributes are used for static styling
And no external `.css` files are imported (except the global entry point).

### Requirement: Centralized Glow Effect
The "glow" effect (text-shadow) MUST be defined as a reusable design token in Tailwind's `@theme` block or as a custom utility in `global.css`.

#### Scenario: Reusable Glow Utility
When a developer applies the `shadow-glow` or `hover:shadow-glow-strong` class to a text element
Then the element displays the project-specific text-shadow effect as defined in the global CSS.

### Requirement: Preservation of Animation Hooks
Class names used as selectors for GSAP or other animation libraries MUST be preserved on the elements, even if their CSS styling is moved to Tailwind.

#### Scenario: GSAP Selector Stability
Given a component using GSAP (e.g., `GlowSidemenu.tsx`)
When Tailwind utilities are added to the elements
Then the original class selectors (e.g., `.glow-sidemenu-panel`) remain present
And the GSAP animations continue to function correctly.

### Requirement: Performance Utilities
Styling that impacts performance (e.g., `will-change`, `backface-visibility`, `transform-gpu`) MUST be applied using Tailwind's performance-oriented utilities.

#### Scenario: Hardware Acceleration
When inspecting the side menu panel or animated items
Then elements have the `will-change-transform` and `will-change-opacity` utilities applied (where relevant)
And CSS performance optimizations match or exceed the previous manual implementation.

