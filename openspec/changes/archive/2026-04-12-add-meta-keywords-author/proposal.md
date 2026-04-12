# Proposal: Add Meta Keywords and Author Tags

## Why
While modern search engines (like Google) primarily rely on advanced algorithms and content relevance, other crawlers, internal site search engines, and certain niche browsers still utilize the `keywords` and `author` meta tags for better indexing and display. Explicitly declaring these provides a more complete metadata set for the site.

## What Changes
We will implement the following additions:
1.  **Constants Enrichment:** Add `SITE_KEYWORDS` and an `author` field to `BUSINESS_DATA` in `src/lib/constants.ts`.
2.  **SEO Engine Update:** Update `BaseSEO.astro` to render the `keywords` and `author` meta tags, with support for page-level overrides.

## Summary
This proposal aims to further enrich the site's metadata by adding the `keywords` and `author` tags to the SEO architecture, ensuring a more comprehensive signal for all types of web crawlers.

## Scope
- **Constants:** `src/lib/constants.ts`.
- **Components:** `src/components/utils/base/BaseSEO.astro`.
- **Documentation:** `openspec/changes/add-meta-keywords-author/`.

## Design Decisions
- **Fallback Logic:** Like titles and descriptions, `keywords` will support a fallback hierarchy (Prop > Constant > Default). 
- **Centralized Author:** The `author` will default to the business name, as this is a branded clothing store.
