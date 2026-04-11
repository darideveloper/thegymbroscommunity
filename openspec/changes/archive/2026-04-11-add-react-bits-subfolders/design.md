## Context
Following the Atomic Design refactor, the `src/components` directory is organized into `atoms/`, `molecules/`, and `organisms/`. This change introduces a sub-category level for "React Bits" components.

## Goals
- Segregate external UI library components (React Bits) from core project components.
- Improve directory discoverability.

## Decisions

### React-Bits Relocation Map
- **Atoms**: 
    - `BlurText.jsx` -> `atoms/react-bits/`
    - `GradualBlur.jsx` -> `atoms/react-bits/`
    - `GradualBlur.css` -> `atoms/react-bits/`
- **Molecules**: 
    - `CircularGallery.jsx` -> `molecules/react-bits/`
    - `CircularGallery.css` -> `molecules/react-bits/`
    - `LaserFlow.jsx` -> `molecules/react-bits/`
    - `LaserFlow.css` -> `molecules/react-bits/`
    - `ScrollVelocity.jsx` -> `molecules/react-bits/`
    - `ScrollVelocity.css` -> `molecules/react-bits/`
- **Organisms**: 
    - `MagicBento.jsx` -> `organisms/react-bits/`
    - `MagicBento.css` -> `organisms/react-bits/`

## Risks / Trade-offs
- **Deeper Directory Nesting**: Adds one more level of nesting, which may require slightly longer import strings.
- **Import Maintenance**: High volume of path updates.

## Migration Plan
1. Create `react-bits/` subfolders in `atoms/`, `molecules/`, and `organisms/`.
2. Move files systematically.
3. Update internal CSS imports within moved components.
4. Update imports in Astro organisms and pages.
