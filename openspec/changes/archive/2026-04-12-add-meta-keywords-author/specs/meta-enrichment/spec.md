# Spec Delta: Meta Keywords and Author

## ADDED Requirements

### Requirement: Meta Keywords Support
The system MUST support the `keywords` meta tag, allowing for a fallback to a default list of keywords if not provided at the page level.

#### Scenario: Verify Default Keywords
Given the `BaseSEO` component is used without the `keywords` prop.
When the page is rendered.
Then the `<head>` MUST contain a `<meta name="keywords" />` tag with the default `SITE_KEYWORDS`.

### Requirement: Meta Author Support
The system MUST support the `author` meta tag, defaulting to the business name if not specified at the page level.

#### Scenario: Verify Default Author
Given the `BaseSEO` component is used without the `author` prop.
When the page is rendered.
Then the `<head>` MUST contain a `<meta name="author" />` tag with the business name.
