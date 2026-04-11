# component-library Specification

## Purpose
TBD - created by archiving change refactor-atomic-design. Update Purpose after archive.
## Requirements
### Requirement: Atomic Design Hierarchy
The component library SHALL follow the Atomic Design methodology to organize UI elements into Atoms, Molecules, and Organisms. Specialized external components from the "React Bits" library SHALL be placed in a `react-bits/` subfolder within their respective category.

#### Scenario: Atoms are foundational
- **GIVEN** a basic UI element like a Button or Logo
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/atoms/`

#### Scenario: React Bits are segregated
- **GIVEN** a component sourced from the "React Bits" library
- **WHEN** searching for its location
- **THEN** it MUST be found in a `react-bits/` subfolder within its Atomic category (e.g., `src/components/atoms/react-bits/`).

#### Scenario: Molecules are functional units
- **GIVEN** a component that combines atoms or adds specific interactivity
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/molecules/`

#### Scenario: Organisms are complex sections
- **GIVEN** a full page section or a complex functional block
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/organisms/`

### Requirement: Section-Based Page Construction
The primary pages (e.g., index) and global layouts SHALL be constructed using Organism-level components. `Header.astro` MUST be classified as a primary organism and used site-wide in `Layout.astro` to provide consistent navigation.

#### Scenario: Header as global organism
- **WHEN** inspecting `src/layouts/Layout.astro`
- **THEN** it SHALL consist primarily of the high-level `Header` organism and a main content slot.

