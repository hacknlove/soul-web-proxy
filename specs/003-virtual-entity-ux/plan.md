# Implementation Plan: Virtual Entity UX

**Branch**: 003-virtual-entity-ux | **Date**: 2025-12-26 | **Spec**: specs/003-virtual-entity-ux/spec.md
**Input**: Feature specification from /specs/003-virtual-entity-ux/spec.md

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

The primary requirement is to provide navigation links on the index page to access the world browser, memories, and state pages. Technical approach: Modify the index.astro page to include links styled with Tailwind CSS.

## Technical Context

**Language/Version**: JavaScript (Node.js LTS)  
**Primary Dependencies**: Astro 5.x, Tailwind CSS 4.x with @astrojs/tailwind integration  
**Storage**: Local file system (folder structure for data)  
**Testing**: Vitest unit tests + Playwright E2E  
**Target Platform**: Web browser
**Project Type**: Web application  
**Performance Goals**: Standard web performance (page load < 2s)  
**Constraints**: Client-side rendering, offline-capable via local files  
**Scale/Scope**: Small-scale local application

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] KISS: simplest approach that works; no unnecessary abstractions - Adding links directly in the index page.
- [x] YAGNI: scope matches spec; defer extras as follow-ups - Only adding the required links.
- [x] TDD: test strategy defined; tests planned first for behavior - Use existing Playwright E2E tests to verify links.
- [x] Maintainability: optimized for LLM/agent maintainers - Simple HTML links in Astro component.
- [x] Language: JavaScript only; no TypeScript - Using JS.
- [x] Exceptions: captured in Complexity Tracking (with rationale) - None.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── pages/
│   ├── index.astro      # Modify to add links
│   ├── world/
│   │   └── [...path].astro
│   ├── memories.astro
│   └── state.astro
├── components/
│   ├── WorldBrowser.astro
│   ├── MemoryViewer.astro
│   └── StateMonitor.astro
└── lib/
    ├── worldNav.js
    └── fileReader.js

tests/
├── unit/
│   └── [existing tests]
└── e2e/
    ├── tests/
    │   ├── [existing e2e]
    └── playwright.config.js
```

**Structure Decision**: Existing web application structure using Astro framework. The index page is src/pages/index.astro, and new pages are already implemented.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
