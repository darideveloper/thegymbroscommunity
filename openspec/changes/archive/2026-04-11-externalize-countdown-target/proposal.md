# Change: Externalize Countdown Target Date

## Why
The current countdown target date is hardcoded in `src/pages/index.astro`. To allow for easier updates without code changes and to support different environments, this value should be moved to an environment variable.

## What Changes
- Create a new `countdown` capability to track countdown requirements.
- Update `src/pages/index.astro` to use `import.meta.env.PUBLIC_COUNTDOWN_TARGET_DATE`.
- Add documentation for the new environment variable in `README.md` or a `.env.example`.

## Impact
- Affected specs: `countdown` (new)
- Affected code: `src/pages/index.astro`
- New environment variable: `PUBLIC_COUNTDOWN_TARGET_DATE`
