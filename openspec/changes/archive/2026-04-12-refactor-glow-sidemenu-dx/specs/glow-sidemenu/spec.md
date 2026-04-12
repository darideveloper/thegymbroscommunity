# glow-sidemenu Specification Delta

## MODIFIED Requirements

### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth, optimized fade-in animation using GSAP. **The menu MUST be renamed to "GlowDrawer" and rendered via a React Portal to the `document.body`. When the drawer is open, the body scroll MUST be locked.**

#### Scenario: Portal and Scroll Lock
When the drawer is open, it is rendered at the end of `<body>` and the page background cannot be scrolled.

### Requirement: Integrated New Logo
The `GlowDrawer` MUST use a logo in its header. **The logo URL MUST be customizable via a prop, defaulting to `/assets/logo.webp`.**

#### Scenario: Logo Customization
Passing a custom `logoUrl` string to the `GlowDrawer` component updates the rendered image source.

## ADDED Requirements

### Requirement: Flexible Slot-based Content
The `GlowDrawer` component MUST support the `children` pattern (slots), allowing any arbitrary React nodes to be rendered within the panel.

#### Scenario: Custom Content
Using `<GlowDrawer><div>Custom Content</div></GlowDrawer>` successfully renders the div inside the drawer panel.

### Requirement: Premium Hover Transitions
Navigation and social links MUST utilize a non-linear easing function (`cubic-bezier`) and subtle scaling/translation effects to provide a high-end interactive feel.

#### Scenario: Nav Hover
When hovering over a navigation link, it smoothly shifts right by `0.75rem` and scales by `5%` over `500ms`.
