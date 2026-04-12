# Spec Delta: Standardize 'cn' Utility Usage

## ADDED Requirements

### Requirement: Unified Class Merging Utility
All components in the project MUST use the central `cn` function (aliased as `@/lib/utils`) for managing dynamic or conditional class names.

#### Scenario: Local Redundancy
- **Given** a component has a local implementation of `cn`.
- **When** the project is audited or built.
- **Then** the local definition MUST be removed and replaced with the `@/lib/utils` import.

#### Scenario: Basic clsx Usage
- **Given** a component imports and uses `clsx` directly.
- **When** the project is audited or built.
- **Then** `clsx` MUST be replaced with the `cn` function from `@/lib/utils` to ensure Tailwind CSS conflict resolution.

#### Scenario: Prop Overrides
- **Given** a component receives a `className` prop.
- **When** applying this prop to an internal element.
- **Then** the prop MUST be merged with internal classes using the `cn()` function to allow for predictable style overrides.

#### Scenario: Manual Class Merging (Template Literals)
- **Given** a component merges classes using template literals (e.g., ``className={`${className} internal-class`}``).
- **When** the project is audited or built.
- **Then** this MUST be replaced with a `cn()` call to ensure reliable class merging and conflict resolution.
