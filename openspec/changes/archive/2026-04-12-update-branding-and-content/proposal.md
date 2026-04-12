# Change: Update Branding and Content to Spanish (Gym Bros)

## Why
The current website used placeholder text, generic "TGC" branding, and mixed English/Spanish content. To establish a professional identity for "The Gym Bros Community," all visible text has been updated to a consistent, high-energy Spanish tone that resonates with fitness enthusiasts.

## What Changes
- **MODIFIED** Page title and meta tags to reflect the new brand in Spanish.
- **MODIFIED** Navigation labels (Home, Products, About) to Spanish equivalents (Inicio, Productos, Acerca de).
- **MODIFIED** Social media labels to branded Spanish versions (EL GRAM, EL FEED, ESTACIÓN DE MANDO).
- **MODIFIED** Product names in the API to "Coming Soon" placeholders.
- **MODIFIED** Countdown labels and accessibility strings to Spanish (DÍAS, HORAS, MINS, SEGS).
- **MODIFIED** "About" section (Bento grid) content to thematic Spanish titles and descriptions related to gym apparel.
- **MODIFIED** Error boundary messages to branded Spanish alerts.
- **STAYED** The "TGC" logo identifier remains unchanged as the core brand mark.

## Impact
- Affected specs: `logo`, `header`, `countdown`, `product-data`, `component-library`.
- Affected code: `src/layouts/Layout.astro`, `src/components/atoms/TGCLogo.astro`, `src/components/organisms/Header.astro`, `src/lib/api/products.ts`, `src/components/molecules/Countdown.jsx`, `src/components/organisms/react-bits/MagicBento.jsx`, `src/components/atoms/ErrorBoundary.jsx`.
