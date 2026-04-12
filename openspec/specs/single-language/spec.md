# single-language Specification

## Purpose
The Single Language mandate codifies the architectural decision to maintain the project as a Spanish-only site during the current phase. This ensures simplicity in routing, metadata management, and content creation while avoiding the overhead of multi-language frameworks.

## Requirements
### Requirement: Primary Spanish Architecture
The project MUST prioritize Spanish as the sole language for all content, metadata, and URL structures during this phase.

#### Scenario: Metadata Language Check
Given the `BaseSEO` component is used.
When the JSON-LD or meta tags are generated.
Then the `inLanguage` property MUST be set to "es" and titles/descriptions MUST be in Spanish.

### Requirement: Absence of i18n Layers
The codebase MUST NOT implement internationalization (i18n) libraries or multi-path routing (e.g., `/en/`, `/es/`) to maintain architectural simplicity.

#### Scenario: Routing Consistency
Given a request to any page.
When the system resolves the route.
Then it MUST NOT attempt to resolve a language-prefixed path.
