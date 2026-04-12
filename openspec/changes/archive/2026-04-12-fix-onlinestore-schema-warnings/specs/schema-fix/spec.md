# Spec Delta: OnlineStore Schema Fix

## ADDED Requirements

### Requirement: Global Price Range Exclusion
The system MUST NOT include the `priceRange` property within the `OnlineStore` JSON-LD object, as it is an invalid property for the `Organization` hierarchy.

#### Scenario: Verify Absence of priceRange
Given the page is rendered using `BaseSEO` with `jsonType="OnlineStore"`.
When the HTML is generated.
Then the JSON-LD `@graph` MUST NOT contain a `priceRange` key within the `OnlineStore` object.
