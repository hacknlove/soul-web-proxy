# Tasks: Improve World View Mode with File Explorer UX

**Input**: Design documents from `/specs/003-world-file-explorer/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: For any behavioral change, tests are REQUIRED and MUST be written first (TDD). Only omit tests for docs-only or purely presentational changes, and record the rationale.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install Monaco Editor dependencies
- [x] T002 Create component directory structure in src/components/
- [x] T003 [P] Configure Tailwind for new components

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create file system utility functions in src/lib/fileSystem.js
- [x] T005 [P] Setup API routes for file operations in src/pages/api/world/
- [x] T006 [P] Create base WorldLayout component in src/layouts/WorldLayout.astro
- [x] T007 Update world page structure in src/pages/world/[...path].astro

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse World with Treeview (Priority: P1) 🎯 MVP

**Goal**: Enable hierarchical navigation of world folders and files in a VS Code-like sidebar

**Independent Test**: Treeview displays folders/files, expand/collapse works, can navigate without opening files

### Tests for User Story 1 (REQUIRED for behavior changes) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T008 [P] [US1] Unit test for treeview expand/collapse in tests/unit/components/FileTree.test.jsx
- [x] T009 [P] [US1] Integration test for treeview navigation in packages/e2e/tests/world-file-explorer.spec.js

### Implementation for User Story 1

- [x] T010 [US1] Implement FileTree component in src/components/FileTree.jsx
- [x] T011 [US1] Integrate FileTree into WorldLayout sidebar in src/layouts/WorldLayout.astro
- [x] T012 [US1] Add API endpoint for listing files in src/pages/api/world/files.js

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Open and Edit Files (Priority: P2)

**Goal**: Allow opening files in tabs, editing text files with Monaco, viewing images

**Independent Test**: Can open text/image files in tabs, edit text and see changes

### Tests for User Story 2 (REQUIRED for behavior changes) ⚠️

- [x] T013 [P] [US2] Unit test for file opening in tests/unit/components/FileTab.test.jsx
- [x] T014 [P] [US2] Unit test for Monaco editor in tests/unit/components/FileEditor.test.jsx
- [x] T015 [P] [US2] Integration test for file editing in packages/e2e/tests/world-file-explorer.spec.js

### Implementation for User Story 2

- [x] T016 [US2] Implement FileTab component in src/components/FileTab.jsx
- [x] T017 [P] [US2] Implement FileEditor component with Monaco in src/components/FileEditor.jsx
- [x] T018 [P] [US2] Implement ImageViewer component in src/components/ImageViewer.jsx
- [x] T019 [US2] Integrate tab system into WorldLayout in src/layouts/WorldLayout.astro
- [x] T020 [US2] Add API endpoint for reading file content in src/pages/api/world/files/[...path].js

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Create Files and Drag-Drop (Priority: P3)

**Goal**: Enable file creation via sidebar and copying files via drag-and-drop

**Independent Test**: Can create files through UI, drag external files to copy into folders

### Tests for User Story 3 (REQUIRED for behavior changes) ⚠️

- [x] T021 [P] [US3] Unit test for file creation in tests/unit/components/FileTree.test.jsx
- [x] T022 [P] [US3] Integration test for drag-drop in packages/e2e/tests/world-file-explorer.spec.js

### Implementation for User Story 3

- [x] T023 [US3] Add file creation UI to FileTree component in src/components/FileTree.jsx
- [x] T024 [US3] Implement drag-drop logic in FileTree component in src/components/FileTree.jsx
- [x] T025 [US3] Add API endpoint for creating files in src/pages/api/world/files.js
- [x] T026 [US3] Add API endpoint for copying files in src/pages/api/world/files/copy.js

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T027 [P] Add error handling for unsupported file types across components
- [x] T028 Performance optimization for large file trees
- [x] T029 [P] Update quickstart.md with feature details
- [x] T030 Run lint and typecheck after all implementation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on User Story 1 for file opening integration
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Unit test for treeview expand/collapse in tests/unit/components/FileTree.test.js"
Task: "Integration test for treeview navigation in packages/e2e/tests/world-file-explorer.spec.js"

# Launch implementation tasks in order:
Task: "Implement FileTree component in src/components/FileTree.jsx"
Task: "Integrate FileTree into WorldLayout sidebar in src/layouts/WorldLayout.astro"
Task: "Add API endpoint for listing files in src/pages/api/world/files.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence</content>
  <parameter name="filePath">specs/003-world-file-explorer/tasks.md
T031 Implement manual save and Ctrl+S shortcut
- [x] T031 Implement manual save and Ctrl+S shortcut
