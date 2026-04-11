# Spec: Glow Sidemenu

## ADDED Requirements

### Requirement: Black Fade Menu Panel
The menu panel MUST have a black background and MUST appear with a smooth fade-in animation using GSAP.

#### Scenario: Menu Open
When the user clicks the menu toggle button, the black panel fades into view from the side or full screen with a background color of `#000`.

### Requirement: Glowing Menu Items
Menu text items SHALL feature a "glow" effect, achieved through CSS text-shadow, making them stand out against the black background.

#### Scenario: Visual Inspection
When the menu is open, the text links (e.g., "Home", "About") display a soft, white or neon glow that enhances their visibility and aesthetic.

### Requirement: GSAP Staggered Entrance
Menu items SHALL animate into view sequentially (staggered) after the main panel has faded in.

#### Scenario: Staggered Loading
When the menu opens, the links do not appear all at once but animate from `opacity: 0` to `opacity: 1` and/or `y: 20` to `y: 0` with a 0.1s stagger between them.

### Requirement: Close Interaction (Click Outside & Close Button)
The menu SHALL close when the user interacts with the close button or clicks any area outside the main content of the menu.

#### Scenario: Close Button
Clicking a "Close" (X) icon within the menu panel triggers the GSAP closing timeline, fading the menu out.

#### Scenario: Click Outside
Clicking on the background overlay or any area not part of the active menu items triggers the closing animation.

### Requirement: Responsive Toggle Button
A menu toggle button MUST be available and functional on both mobile (viewport < 768px) and desktop resolutions.

#### Scenario: Desktop Toggle
The menu button is visible in the desktop header and opens the side menu upon interaction.

#### Scenario: Mobile Toggle
The menu button remains accessible and functional on small screens.

### Requirement: Integrated New Logo
The `GlowSidemenu` MUST use the new logo from `src/assets/logo.webp` in its header, replacing the old logo reference.

#### Scenario: Logo Presence in Menu
When the menu is open, the logo `src/assets/logo.webp` should be clearly visible in the top-left area of the menu header.

### Requirement: Legacy StaggeredMenu Component Removal
The `StaggeredMenu` component and its associated CSS MUST be removed from the project once the `GlowSidemenu` is fully functional.

#### Scenario: Code Cleanup
Deleting `src/components/StaggeredMenu.jsx` and `src/components/StaggeredMenu.css` does not cause any compilation or runtime errors in the final build.
