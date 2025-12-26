# Quickstart: Automated Test Setup

Date: 2025-12-26

## Goals

- Run unit tests quickly (Vitest).
- Run GUI/E2E tests (Playwright) without making Playwright a default dependency
  for build/deploy CI.

## Prerequisites

- Node.js (LTS)

## Unit tests (Vitest)

From the repository root:

1. Install dependencies: `npm install`
2. Run the unit test command: `npm run test:unit`

Expected outcome:

- Tests run and exit non-zero on failure.
- Unit tests run in jsdom environment with DOM APIs available.

## GUI/E2E tests (Playwright)

Playwright is installed in a separate package so the default root install can
remain lightweight.

High-level flow:

1. Install root dependencies: `npm install`
2. Install E2E package dependencies: `npm --prefix packages/e2e install`
3. Run E2E tests: `npm run test:e2e` (or `npm --prefix packages/e2e test`)

Expected outcome:

- E2E tests run against an isolated test-mode server on port 4321.
- Deploy CI can skip Playwright by not installing the E2E package.
- Tests start the app automatically using `astro.config.test.mjs`.

## Notes

- The Astro app MUST support a test-mode startup (dedicated port + test config)
  to enable aliases/mocks needed for deterministic E2E.
