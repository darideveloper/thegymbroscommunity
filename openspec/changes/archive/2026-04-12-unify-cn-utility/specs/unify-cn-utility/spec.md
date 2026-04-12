# Spec Delta: Unify 'cn' Utility

## ADDED Requirements

### Requirement: Class Management Standard
All components in the project MUST use the `cn` utility from `src/lib/utils.ts` (aliased as `@/lib/utils`) for managing dynamic or conditional class names.

#### Scenario: Redundant Definitions
- **Given** a component has a local implementation of `cn`.
- **When** the project is built or audited.
- **Then** the local definition MUST be removed in favor of the central `@/lib/utils` import.

#### Scenario: Tailwind Conflict Resolution
- **Given** a component receives a `className` prop that overrides a default Tailwind utility (e.g., `p-4` with `p-2`).
- **When** the `cn` function is used to join these classes.
- **Then** the resulting class string MUST prioritize the last-applied utility and resolve any Tailwind conflicts using `tailwind-merge`.

#### Scenario: Direct `clsx` Usage
- **Given** a component imports and uses `clsx` directly.
- **When** refactored to standard patterns.
- **Then** `clsx` usage MUST be replaced with the `cn` utility to ensure reliable class merging and conflict resolution.
