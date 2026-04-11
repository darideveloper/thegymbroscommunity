## ADDED Requirements

### Requirement: Atomic Design Hierarchy
The component library SHALL follow the Atomic Design methodology to organize UI elements into Atoms, Molecules, and Organisms.

#### Scenario: Atoms are foundational
- **GIVEN** a basic UI element like a Button or Logo
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/atoms/`

#### Scenario: Molecules are functional units
- **GIVEN** a component that combines atoms or adds specific interactivity
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/molecules/`

#### Scenario: Organisms are complex sections
- **GIVEN** a full page section or a complex functional block
- **WHEN** searching for its location
- **THEN** it MUST be found in `src/components/organisms/`

### Requirement: Section-Based Page Construction
The primary pages (e.g., index) SHALL be constructed using Organism-level components representing distinct sections of the page.

#### Scenario: Index page readability
- **WHEN** inspecting `src/pages/index.astro`
- **THEN** it SHALL consist primarily of high-level Organism components rather than raw "bits" and repetitive layout divs.
