---

description: "Task list for automated test setup"
---

# Tasks: Automated Test Setup

**Input**: Design documents from `/specs/001-test-setup/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: For any behavioral change, tests are REQUIRED and MUST be written first (TDD). Only omit tests for docs-only or purely presentational changes, and record the rationale.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project

<!--
  NOTE: This file replaces all sample tasks from the template.
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add the baseline folder structure for tests

- [x] T001 Create unit test folder `tests/unit/`
- [x] T002 Create E2E package folders `packages/e2e/` and `packages/e2e/tests/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Wire up runners and “test mode” so both stories are possible

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Add Vitest dev dependency and scripts in `package.json`
- [x] T004 Add Vitest configuration in `vitest.config.js`
- [x] T005 Add Playwright package manifest in `packages/e2e/package.json`
- [x] T006 Add Playwright configuration with web server startup in `packages/e2e/playwright.config.js`
- [x] T007 Add test-mode Astro config file `astro.config.test.mjs`
- [x] T008 Add test-mode startup scripts in `package.json` (e.g. `dev:test`, `preview:test`)
- [x] T009 Add E2E runner scripts in `packages/e2e/package.json` (e.g. `test`, `test:headed`)
- [x] T010 Add root convenience script for E2E in `package.json` that calls `npm --prefix packages/e2e test`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Run the test suite before changes (Priority: P1) 🎯 MVP

**Goal**: From a clean checkout, maintainers can run automated tests and get a clear pass/fail result.

**Independent Test**:

- Unit: `npm run test:unit` exits 0 on pass, non-zero on failure
- E2E: `npm --prefix packages/e2e test` starts test-mode app on dedicated port and runs Playwright

### Tests for User Story 1 (REQUIRED for behavior changes) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T011 [P] [US1] Add unit smoke test in `tests/unit/smoke.test.js`
- [x] T012 [P] [US1] Add E2E smoke test in `packages/e2e/tests/smoke.spec.js`

### Implementation for User Story 1

- [x] T013 [US1] Ensure `src/pages/index.astro` exposes a stable selector/text for E2E assertions
- [x] T014 [US1] Ensure test-mode startup uses a dedicated port via `astro.config.test.mjs`
- [x] T015 [US1] Ensure Playwright web server uses test-mode config via `packages/e2e/playwright.config.js`

**Checkpoint**: Tests can be run and failures are clearly reported

---

## Phase 4: User Story 2 - Add a new automated test easily (Priority: P2)

**Goal**: Adding a new unit test or E2E test is discoverable and repeatable.

**Independent Test**: A maintainer can add a new file under `tests/unit/` or `packages/e2e/tests/` and see it executed on the next run.

### Tests for User Story 2 (REQUIRED for behavior changes) ⚠️

- [x] T016 [P] [US2] Add an example unit test demonstrating conventions in `tests/unit/example.test.js`
- [x] T017 [P] [US2] Add an example E2E test demonstrating conventions in `packages/e2e/tests/example.spec.js`

### Implementation for User Story 2

- [x] T018 [US2] Document unit test conventions in `tests/README.md`
- [x] T019 [US2] Document E2E test conventions and setup in `packages/e2e/README.md`
- [x] T020 [US2] Update top-level documentation for test commands in `README.md`

**Checkpoint**: A new test can be added with minimal friction

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Tighten maintainability and CI ergonomics

- [x] T021 [P] Ensure deterministic test env variables and defaults in `package.json`
- [x] T022 [P] Ensure Playwright uses a unique dedicated port in `packages/e2e/playwright.config.js`
- [x] T023 Update feature quickstart if commands change in `specs/001-test-setup/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion; can be done after US1 or in parallel once foundation exists
- **Polish (Final Phase)**: Depends on completion of desired user stories

### Parallel Opportunities

- Phase 1 tasks can run in parallel
- Many doc/test-file creation tasks can run in parallel once runners exist

---

## Parallel Example: User Story 1

```bash
# In parallel (different files):
# - Create unit smoke test
# - Create E2E smoke test
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and validate: unit + E2E runs are reliable

### Incremental Delivery

1. Wire runners and test-mode first
2. Add smoke tests next
3. Add documentation and examples last
