# Research: Automated Test Setup

Date: 2025-12-26

## Decisions

### Decision: Unit tests use Vitest

Rationale:

- Fast feedback loop for JavaScript.
- Good fit for library/module tests and small integration-style tests.

Alternatives considered:

- Jest: widely used, but Vitest integrates well with modern ESM workflows.

### Decision: GUI/E2E tests use Playwright

Rationale:

- Browser automation suitable for validating real UI behavior.
- Supports reliable cross-browser runs when needed.

Alternatives considered:

- Cypress: viable, but Playwright is well-suited for headless CI runs.

### Decision: Playwright lives in a separate npm package

Rationale:

- Playwright installs large browser dependencies.
- Separating it allows a “deploy CI” pipeline to avoid installing Playwright
  (install root deps only), while an “E2E CI” pipeline can install and run it.

Alternatives considered:

- Monorepo workspaces: convenient, but default installs tend to pull in all
  workspace dependencies unless CI explicitly changes behavior.

### Decision: E2E runs start a fresh Astro app in test mode

Rationale:

- E2E tests must not reuse dev servers or polluted state.
- A dedicated port reduces conflicts and keeps E2E isolated.
- A test-specific config enables mocks/aliases without affecting production.

Chosen approach:

- Start the Astro app using a test configuration file (e.g.
  `astro.config.test.mjs`) and a dedicated port.
- Provide a “test mode” toggle via environment variables to enable mocks.

## Open Questions

None. All key technical choices are specified in the feature input.
