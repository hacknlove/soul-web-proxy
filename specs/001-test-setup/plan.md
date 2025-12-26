# Implementation Plan: Automated Test Setup

**Branch**: `001-test-setup` | **Date**: 2025-12-26 | **Spec**: `specs/001-test-setup/spec.md`
**Input**: Feature specification from `/specs/001-test-setup/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

Establish automated testing for `soul-web-proxy`:

- Unit tests use Vitest.
- GUI/E2E tests use Playwright, installed in a separate package so normal CI
  (build/deploy) does not have to install Playwright.
- Playwright runs against a freshly started Astro webapp in “test mode” using a
  dedicated port and test-specific config/aliases for mocks.

## Technical Context

**Language/Version**: JavaScript (Node.js LTS)  
**Primary Dependencies**: Astro 5.x  
**Storage**: N/A  
**Testing**: Vitest (unit) + Playwright (GUI/E2E; separate package)  
**Target Platform**: Web (Astro site)  
**Project Type**: single  
**Performance Goals**: N/A  
**Constraints**: Keep deploy CI lightweight (no Playwright install)  
**Scale/Scope**: Add baseline tests and test tooling

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] KISS: simplest approach that works; no unnecessary abstractions
- [x] YAGNI: scope matches spec; defer extras as follow-ups
- [x] TDD: test strategy defined; tests planned first for behavior
- [x] Maintainability: optimized for LLM/agent maintainers
- [x] Language: JavaScript only; no TypeScript
- [x] Exceptions: none

## Project Structure

### Documentation (this feature)

```text
specs/001-test-setup/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
public/
src/
└── pages/
    └── index.astro

tests/
└── unit/
    └── ...

packages/
└── e2e/
    ├── package.json
    ├── playwright.config.js
    └── tests/
        └── ...

astro.config.mjs
astro.config.test.mjs
package.json
```

**Structure Decision**: Keep the Astro app as the root project. Add unit tests
under `tests/unit/`. Add Playwright under `packages/e2e/` as a standalone npm
package (not installed as part of the root install) so deploy CI can skip the
Playwright dependency.

## Complexity Tracking

No constitution violations.
