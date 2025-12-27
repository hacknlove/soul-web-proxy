# Implementation Plan: Improve World View Mode with File Explorer UX

**Branch**: `003-world-file-explorer` | **Date**: 2025-12-27 | **Spec**: specs/003-world-file-explorer/spec.md
**Input**: Feature specification from `/specs/003-world-file-explorer/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

Implement a file explorer UX in the world view mode, with a treeview sidebar, tabbed file editing using Monaco Editor, file creation, and drag-drop support, similar to VS Code.

## Technical Context

**Language/Version**: JavaScript (Node.js LTS)  
**Primary Dependencies**: Astro 5.x, Tailwind CSS 4.x, Monaco Editor (for text editing)  
**Storage**: Local file system (folder structure for data)  
**Testing**: Vitest (unit), Playwright (E2E)  
**Target Platform**: Web browser  
**Project Type**: Web application  
**Performance Goals**: Navigate folders in <5 sec, handle 1000 files/folders without degradation  
**Constraints**: Real-time editing, efficient loading for file trees  
**Scale/Scope**: Small-scale file browsing, up to 1000 files

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] KISS: simplest approach that works; no unnecessary abstractions
- [x] YAGNI: scope matches spec; defer extras as follow-ups
- [x] TDD: test strategy defined; tests planned first for behavior
- [x] Maintainability: optimized for LLM/agent maintainers
- [x] Language: JavaScript only; no TypeScript
- [x] Exceptions: captured in Complexity Tracking (with rationale)

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
├── components/
│   ├── FileTree.jsx      # Treeview component for folders/files
│   ├── FileTab.jsx       # Tab component for opened files
│   ├── FileEditor.jsx    # Monaco-based editor for text files
│   └── ImageViewer.jsx   # Viewer for image files
├── layouts/
│   └── WorldLayout.astro # Layout for world view with sidebar and main area
├── lib/
│   ├── fileSystem.js     # Utilities for file operations
│   └── worldNav.js       # Updated for file tree navigation
└── pages/
    └── world/[...path].astro # World page with file explorer

tests/
├── unit/
│   ├── components/
│   │   ├── FileTree.test.js
│   │   └── FileEditor.test.js
│   └── lib/
│       └── fileSystem.test.js
└── e2e/
    └── tests/
        └── world-file-explorer.spec.js
```

**Structure Decision**: Web application structure, building on existing Astro app. New components added to src/components, tests to tests/unit and packages/e2e/tests.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
