# infrastructure Specification

## Purpose
TBD - created by archiving change implement-seo-architecture. Update Purpose after archive.
## Requirements
### Requirement: Dynamic Sitemap Generation
The project MUST automatically generate a `sitemap-index.xml` during every build.

#### Scenario: Sitemap Generation during Build
Given the `@astrojs/sitemap` integration is configured in `astro.config.mjs`.
When `npm run build` is executed.
Then a valid `sitemap-index.xml` MUST be present in the `dist/` directory.

### Requirement: Dynamic Robots.txt Generation
The project MUST provide a dynamic `robots.txt` that correctly references the sitemap URL from the site configuration.

#### Scenario: Access Robots.txt
Given the `src/pages/robots.txt.ts` route is implemented.
When the user accesses `/robots.txt`.
Then the response MUST include `Sitemap: https://thegymbroscommunity.com/sitemap-index.xml`.

