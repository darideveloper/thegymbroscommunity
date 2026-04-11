## Context
The countdown target date is currently hardcoded in `src/pages/index.astro`. This makes it difficult to change the target date without redeploying and doesn't allow for environment-specific dates.

## Goals
- Move the countdown target date to an environment variable.
- Ensure the value is accessible on the client side in Astro.

## Decisions
- Use `PUBLIC_COUNTDOWN_TARGET_DATE` as the environment variable name. The `PUBLIC_` prefix is required by Astro to expose variables to the client side.
- Read the value in `src/pages/index.astro` and pass it to the `Countdown` component.

## Risks / Trade-offs
- If `PUBLIC_COUNTDOWN_TARGET_DATE` is not defined, the countdown might fail or show 0. We should handle this gracefully by providing a default or ensuring the variable is required.

## Open Questions
- Should there be a fallback date if the environment variable is missing? For now, we'll assume it's mandatory as per the requirement.
