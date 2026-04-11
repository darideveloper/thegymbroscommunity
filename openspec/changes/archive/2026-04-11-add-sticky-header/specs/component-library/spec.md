## MODIFIED Requirements
### Requirement: Section-Based Page Construction
The primary pages (e.g., index) and global layouts SHALL be constructed using Organism-level components. `Header.astro` MUST be classified as a primary organism and used site-wide in `Layout.astro` to provide consistent navigation.

#### Scenario: Header as global organism
- **WHEN** inspecting `src/layouts/Layout.astro`
- **THEN** it SHALL consist primarily of the high-level `Header` organism and a main content slot.
