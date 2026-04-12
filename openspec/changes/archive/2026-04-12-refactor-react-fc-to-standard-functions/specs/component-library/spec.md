## ADDED Requirements
### Requirement: Standard React Component Declaration
React components MUST use standard function declarations instead of the `React.FC` or `FC` type wrapper. Props MUST be explicitly typed in the function signature using an `interface` (preferred) or `type`.

#### Scenario: Using standard function declaration
- **GIVEN** a new React component
- **WHEN** declaring the component
- **THEN** it MUST be defined as a standard `function` with explicit prop typing.

#### Scenario: No `React.FC` usage
- **WHEN** inspecting React components in the codebase
- **THEN** none SHALL use the `React.FC` or `FC` type wrapper.
