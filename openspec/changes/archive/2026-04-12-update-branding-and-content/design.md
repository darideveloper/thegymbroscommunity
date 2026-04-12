# Design: Branding and Content Strategy (Spanish Edition)

## Context
The Gym Bros Community requires a professional, localized identity for the Spanish market. The current codebase uses a mix of placeholder English and Spanish, which lacks the required "force and excitement" tone. All visible text, including accessibility strings, must be unified under the new brand voice.

## Goals / Non-Goals
- **Goals**:
    - Unify all visible text in high-energy Spanish.
    - Maintain "TGC" as the core brand logo mark.
    - Improve accessibility with branded Spanish labels.
- **Non-Goals**:
    - Changing the technical architecture of the components.
    - Updating the color palette or visual style (outside of text content).

## Decisions

### 1. Language Choice
The brand will use high-energy Spanish. This decision targets the "fitness brotherhood" aesthetic (e.g., using "LA TRIBU" instead of "About Us").

### 2. Logo Consistency
The "TGC" identifier remains in English/Acronym form as it is the established brand mark.

## Component Mappings

### 1. Global Layout (`src/layouts/Layout.astro`)
- **Old Title:** `Astro Basics`
- **New Title:** `The Gym Bros Community | Ropa Fitness de Élite`

### 2. Logo (`src/components/atoms/TGCLogo.astro`)
- **Old Text:** `TGC`
- **New Text:** `TGC` (Keep as is)

### 3. Header & Navigation (`src/components/organisms/Header.astro`)
- **Menu Items:**
    - `Home` -> `Inicio`
    - `Products` -> `Productos`
    - `About` -> `Acerca de`
- **Social Items:**
    - `Instagram` -> `EL GRAM`
    - `Twitter` -> `EL FEED`
    - `Discord` -> `ESTACIÓN DE MANDO`
- **Toggle Button Label:** `Menu` -> `SUBE DE NIVEL`

### 3.1 Accessibility & Error States
- **Drawer Title (`src/components/organisms/GlowDrawer.tsx`):** `Side Navigation` -> `CENTRO DE MANDO`
- **Drawer Close (`src/components/organisms/GlowDrawer.tsx`):** `Close Menu` -> `VOLVER`
- **Logo Alt (`src/components/organisms/GlowDrawer.tsx`):** `Logo` -> `LOGO DE THE GYM BROS`
- **Toggle Aria (`src/components/molecules/GlowDrawerToggle.tsx`):** `Open Menu` -> `ACCEDER AL CENTRO DE MANDO`
- **Countdown Aria (`src/components/molecules/Countdown.jsx`):** `Countdown to [Date]` -> `PRÓXIMO LANZAMIENTO: [Date]`
- **Error Boundary (`src/components/atoms/ErrorBoundary.jsx`):** `Something went wrong.` -> `FALLO DEL SISTEMA: REINICIANDO EL ESFUERZO.`

### 4. Countdown & Hero (`src/components/molecules/Countdown.jsx`, `src/components/organisms/Hero.astro`)
- **Countdown Labels:** `Days`, `Hours`, `Minutes`, `Seconds` -> `DÍAS`, `HORAS`, `MINS`, `SEGS`

### 5. Product Showcase (`src/lib/api/products.ts`, `src/components/organisms/ProductShowcase.astro`)
- **Scrolling Text:** `Próximamente`, `Coming Soon` -> `PRÓXIMAMENTE`, `COMING SOON`
- **Product Titles:** All items set to `Coming Soon`

### 6. About Section (`src/components/organisms/react-bits/MagicBento.jsx`)
- **Cards:**
    - **Strength:** Title: `ARMADURA DE ÉLITE`, Desc: `Diseñada para el guerrero moderno del gimnasio.`, Label: `FUERZA`
    - **Power:** Title: `PODER EN MOVIMIENTO`, Desc: `Telas que se adaptan a cada una de tus repeticiones.`, Label: `AGILIDAD`
    - **Passion:** Title: `ESPÍRITU DE LUCHA`, Desc: `Ropa que grita determinación en cada serie.`, Label: `PASIÓN`
    - **Performance:** Title: `INGENIERÍA FITNESS`, Desc: `Máxima transpirabilidad para entrenamientos explosivos.`, Label: `POTENCIA`
    - **Attitude:** Title: `ESTILO DOMINANTE`, Desc: `Domina el rack con diseños que imponen respeto.`, Label: `ACTITUD`
    - **Endurance:** Title: `EQUIPO SIN LÍMITES`, Desc: `Resistencia extrema para quienes no conocen el descanso.`, Label: `RESISTENCIA`

## Risks / Trade-offs
- **Tone Intensity**: Some terms might be too intense for casual users, but they align with the requested "force and excitement" direction.
- **Acronym Usage**: "TGC" might not be immediately obvious as "The Gym Bros Community" in Spanish, but it serves as a concise brand mark.
