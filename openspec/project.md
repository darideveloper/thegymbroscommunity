# Project Context

## Purpose
The Gym Bros Community is a modern, high-performance community platform built with Astro and React. It focuses on immersive user experiences using advanced animations and interactive components.

## Tech Stack
- **Framework:** [Astro v6](https://astro.build/) (Static/SSG/SSR hybrid)
- **Frontend:** [React v19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/), [Motion](https://motion.dev/), [Three.js](https://threejs.org/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Language:** TypeScript

## Project Conventions

### Code Style
- Use `clsx` and `tailwind-merge` for class handling (as per `GEMINI.md`).
- Prefer `Vanilla CSS` for global styles, `Tailwind` for component-level styling.
- **React Components:** Define all React components using standard function declarations (`function Name() { ... }`) instead of `React.FC`.
- Follow TypeScript best practices.

### Architecture Patterns
- Astro for page routing and layout.
- React for client-side interactive components.
- Components organized in `src/components/`.

### Testing Strategy
- Not explicitly defined in current setup; TBD.

### Git Workflow
- Adhere to **Conventional Commits** (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`).
- Use scope for context (e.g., `feat(ui): add button`).

## Domain Context
- High-interactivity focus (animations, 3D).
- Community-oriented features.

## Important Constraints
- Maintain Node.js >= 22.12.0.

## External Dependencies
- Astro, React, Tailwind, GSAP, Three.js, Radix UI.
