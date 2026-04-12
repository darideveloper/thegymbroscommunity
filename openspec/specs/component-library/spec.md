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

### Requirement: React Component Declaration Standard
All React components SHALL be defined using standard function declarations. The use of `React.FC` or `FC` type wrappers is PROHIBITED to ensure better compatibility with the React Compiler and improved TypeScript developer experience.

#### Scenario: Components are standard functions
- **GIVEN** a new or existing React component
- **WHEN** inspecting its declaration
- **THEN** it MUST use the `function` keyword (e.g., `export function MyComponent(props: MyProps) { ... }`).

### Requirement: Standard React Component Declaration
React components MUST use standard function declarations instead of the `React.FC` or `FC` type wrapper. Props MUST be explicitly typed in the function signature using an `interface` (preferred) or `type`.

#### Scenario: Using standard function declaration
- **GIVEN** a new React component
- **WHEN** declaring the component
- **THEN** it MUST be defined as a standard `function` with explicit prop typing.

#### Scenario: No `React.FC` usage
- **WHEN** inspecting React components in the codebase
- **THEN** none SHALL use the `React.FC` or `FC` type wrapper.

