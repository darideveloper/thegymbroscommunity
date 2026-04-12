## Context
The project currently uses `React.FC` in some of its interactive components within the side navigation module. Modern React practices favor standard function declarations for their simplicity, better TypeScript error messages, and seamless generic support.

## Goals / Non-Goals
- **Goals:**
  - Standardize all React components to use standard function declarations.
  - Establish a project-wide requirement against using `React.FC`.
- **Non-Goals:**
  - Change the behavior or logic of the affected components.
  - Refactor other architectural patterns beyond the component declaration syntax.

## Decisions
- **Decision:** Use standard function declarations with direct prop destructuring and explicit interface typing.
  - *Rationale:* This is the current industry standard and is fully compatible with React 19 and the upcoming React Compiler. It avoids the complexities of the `React.FC` wrapper.
- **Alternatives considered:**
  - Keep using `React.FC` → *Rationale for rejection:* Outdated practice, adds unnecessary boilerplate, and less flexible for future refactoring (e.g., adding generics).

## Risks / Trade-offs
- No significant technical risks, as this is a syntax refactor without behavioral changes.
- Minimal trade-off: `React.FC` provides `displayName` automatically (in some environments), which might need to be set manually if required for debugging, although standard named function declarations handle this well.

## Migration Plan
1. Refactor `GlowDrawerToggle.tsx`.
2. Refactor `GlowDrawer.tsx`.
3. Refactor `GlowNavigationDrawer.tsx`.
4. Update `specs/component-library/spec.md` with the new requirement.
5. Verify changes with a build and type-check.

## Open Questions
- Are there any specific components that *require* `React.FC` for legacy reasons? (None identified so far).
