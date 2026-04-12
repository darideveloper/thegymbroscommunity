# Spec Delta: Canonical Normalization

## ADDED Requirements

### Requirement: Robust Canonical URL Generation
The system MUST ensure all canonical URLs are absolute and consistently end with a trailing slash to prevent duplicate content indexing.

#### Scenario: Normalize Missing Trailing Slash
Given the current path is "/about".
When `BaseSEO` generates the canonical URL.
Then the resulting URL MUST be "https://thegymbroscommunity.com/about/".
