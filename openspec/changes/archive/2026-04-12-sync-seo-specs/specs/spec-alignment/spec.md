# Spec Delta: SEO Engine Sync

## MODIFIED Requirements

### Requirement: Digital-First Entity Declaration
The system MUST use the `OnlineStore` Schema.org type for the primary organization entity to optimize for digital-first e-commerce indexing.

#### Scenario: OnlineStore Schema on Home Page
Given the `BaseSEO` component is used on the home page.
When the page is rendered.
Then the `@graph` MUST contain an object of type `OnlineStore` defining the brand identity.

### Requirement: Multi-Entity JSON-LD Graph
The system MUST generate a linked `@graph` structure that connects the `OnlineStore` (Organization), `WebSite`, and `WebPage` entities.

#### Scenario: Linked Graph Integrity
Given the page is rendered.
Then the `WebPage` object MUST include an `isPartOf` reference to the `WebSite` and an `about` reference to the `OnlineStore`.

### Requirement: Automated Product List Schema
The system MUST automatically generate an `ItemList` containing `Product` objects when a `productList` prop is provided to `BaseSEO`.

#### Scenario: Home Page Product Showcase
Given a list of 12 products is passed to `BaseSEO`.
When the page is rendered.
Then the JSON-LD MUST contain an `ItemList` with 12 `ListItem` elements, each containing a `Product` schema.
