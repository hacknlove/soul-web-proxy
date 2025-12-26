# Data Model: Automated Test Setup

Date: 2025-12-26

This feature introduces testing infrastructure rather than domain data.

## Configuration Entities

### Test Mode Configuration

Purpose: Ensure the webapp can be started in a deterministic “test mode” for E2E.

- `TEST_MODE` (boolean): Enables test-only behavior (mocks/aliases).
- `TEST_PORT` (number): Dedicated port for E2E runs.

Validation rules:

- `TEST_PORT` MUST be a valid, unused TCP port.
- `TEST_MODE` MUST default to false outside E2E.

### E2E Package Boundary

Purpose: Ensure Playwright is not installed for default CI runs.

- The root app does not depend on Playwright.
- The E2E package depends on Playwright and contains its own test runner config.
