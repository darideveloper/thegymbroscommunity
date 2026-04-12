# meta-tags Specification

## Purpose
TBD - created by archiving change refine-seo-perfection. Update Purpose after archive.
## Requirements
### Requirement: Explicit Indexing Policy
The system MUST explicitly declare a "index, follow" policy in the `<head>` to ensure clear signals to all search crawlers.

#### Scenario: Verify Robots Meta Tag
Given the page is rendered using `BaseSEO`.
When the HTML is generated.
Then the `<head>` MUST contain `<meta name="robots" content="index, follow" />`.

### Requirement: Mobile Branding Integration
The system MUST include a `theme-color` meta tag that matches the site's primary dark background color to provide a seamless mobile experience.

#### Scenario: Verify Theme Color Tag
Given the page is rendered using `BaseSEO`.
When the HTML is generated.
Then the `<head>` MUST contain `<meta name="theme-color" content="#060010" />`.

