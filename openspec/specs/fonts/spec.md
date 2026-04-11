# fonts Specification

## Purpose
TBD - created by archiving change add-google-fonts. Update Purpose after archive.
## Requirements
### Requirement: Install Fontsource packages
**Description:** The application SHALL install the required Pinyon Script and Lato fonts via Fontsource.
#### Scenario:
The user runs `npm install @fontsource/pinyon-script @fontsource/lato` to add the required fonts to `package.json`.

### Requirement: Apply Pinyon Script to Title
**Description:** The application SHALL apply Pinyon Script to the main title.
#### Scenario:
Convert the "The Gym Bros Community" text in `src/pages/index.astro` to an `<h1>` tag. Apply the Pinyon Script font to this `<h1>` element via global CSS.

### Requirement: Global font configuration
**Description:** The application SHALL set Lato as the default sans-serif font and Pinyon Script as the heading font.
#### Scenario:
Import the fonts in `src/styles/global.css` and configure CSS variables to use Pinyon Script for headings (h1, h2, h3) and Lato for the body.

