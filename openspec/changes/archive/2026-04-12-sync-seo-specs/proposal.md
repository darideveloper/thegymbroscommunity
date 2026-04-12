# Proposal: Synchronize SEO and Architectural Specifications

## Why
The recent archival of multiple SEO-related changes has left the project specifications (`openspec/specs/`) with placeholder text ("TBD") and some outdated requirements (like referencing `LocalBusiness` instead of `OnlineStore`). Additionally, the architectural decision to maintain a single-language (Spanish) codebase without i18n layers was a significant outcome of this chat and should be codified.

## What Changes
We will implement the following documentation updates:
1.  **Sync `seo-engine`:** Update purpose, replace `LocalBusiness` references with `OnlineStore`, and add requirements for the `@graph` multi-entity structure and `ItemList` (Product Catalog) support.
2.  **Sync `infrastructure`:** Update purpose and refine requirements for dynamic generation.
3.  **Add `single-language-architecture`:** Create a new specification codifying the decision to use a single-language (Spanish) setup for SEO and content, avoiding redundant i18n layers.

## Summary
This proposal synchronizes the living documentation with the actual implementation and architectural decisions made during the SEO and metadata perfection phase.

## Scope
- **Specs:** `openspec/specs/seo-engine/spec.md`, `openspec/specs/infrastructure/spec.md`.
- **New Spec:** `openspec/changes/sync-seo-specs/specs/single-language/spec.md`.

## Design Decisions
- **Living Document Integrity:** Ensuring that the "Specs" accurately reflect the "Applied" code is critical for future agent tasks.
- **Explicit Mandates:** By codifying the single-language decision, we prevent future agents from accidentally re-introducing i18n complexity without a formal proposal.
