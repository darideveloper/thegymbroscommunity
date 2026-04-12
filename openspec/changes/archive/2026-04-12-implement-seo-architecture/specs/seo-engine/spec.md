# Spec Delta: SEO Engine

## ADDED Requirements

### Requirement: Centralized SEO Metadata Resolution
The system MUST resolve page titles and descriptions using a fallback hierarchy: Prop > Constant > Default.

#### Scenario: Home Page SEO Resolution
Given the `BaseSEO` component is used on the home page without specific props.
When the component resolves metadata.
Then it MUST use the `SITE_TITLE` and `SITE_DESCRIPTION` constants from `src/lib/constants.ts`.

### Requirement: Dynamic JSON-LD Generation
The system MUST generate a valid Schema.org JSON-LD object based on the `jsonType` prop and inject it into the `<head>`.

#### Scenario: LocalBusiness Schema on Contact Page
Given the `BaseSEO` component is used with `jsonType="LocalBusiness"`.
When the page is rendered.
Then the `<head>` MUST contain a `<script type="application/ld+json">` with `LocalBusiness` data.

### Requirement: Tagline Append Logic
The system MUST append the business name to the page title if it is not already present and if `useTagLine` is true.

#### Scenario: Service Page Tagline
Given a title "Supplements" and `BUSINESS_DATA.name` "The Gym Bros Community".
When `BaseSEO` resolves the title.
Then the resulting title MUST be "Supplements | The Gym Bros Community".
