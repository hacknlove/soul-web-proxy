# Tasks: Virtual Entity UX

**Input**: Design documents from `/specs/003-virtual-entity-ux/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: For any behavioral change, tests are REQUIRED and MUST be written first (TDD). Only omit tests for docs-only or purely presentational changes, and record the rationale.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths assume Astro project structure from plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [x] T002 Verify Astro project dependencies (Astro 5.x, Tailwind 4.x already configured)
- [x] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Setup basic Astro page structure in src/pages/
- [x] T005 [P] Create file reading utilities in src/lib/fileReader.js
- [x] T006 [P] Create data parsing utilities in src/lib/dataParser.js
- [x] T007 [P] Setup API route structure in src/pages/api/
- [x] T008 [P] Configure environment for entity/ folder path

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Virtual World (Priority: P1) 🎯 MVP

**Goal**: Users can navigate through the virtual world as if browsing a filesystem

**Independent Test**: Navigate world structure, click folders, see contents or empty messages

### Tests for User Story 1 (REQUIRED for behavior changes) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T009 [P] [US1] Unit test for folder reading in tests/unit/lib/fileReader.test.js
- [ ] T010 [P] [US1] Unit test for world navigation logic in tests/unit/lib/worldNav.test.js
- [ ] T011 [US1] E2E test for world browsing in tests/e2e/world-browse.spec.js

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create WorldBrowser component in src/components/WorldBrowser.jsx
- [ ] T013 [US1] Create world.astro page in src/pages/world.astro
- [ ] T014 [US1] Implement world API endpoint in src/pages/api/world/[...path].json.js
- [ ] T015 [US1] Add navigation state management in src/lib/entityState.js
- [ ] T016 [US1] Integrate folder reading with WorldBrowser UI

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Browse Entity Memories (Priority: P2)

**Goal**: Users can view the virtual entity's memories as blog entries

**Independent Test**: View list of memories, select one, see markdown content

### Tests for User Story 2 (REQUIRED for behavior changes) ⚠️

- [x] T017 [P] [US2] Unit test for memory parsing in tests/unit/lib/dataParser.test.js
- [x] T018 [P] [US2] Unit test for memory listing in tests/unit/lib/memoryService.test.js
- [x] T019 [US2] E2E test for memory browsing in tests/e2e/memory-browse.spec.js
- [x] T020 [P] [US2] Create MemoryViewer component in src/components/MemoryViewer.astro
- [x] T021 [US2] Create memories.astro page in src/pages/memories.astro
- [x] T022 [US2] Implement memories API endpoint in src/pages/api/memories.json.js
- [x] T023 [US2] Add markdown rendering to MemoryViewer

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 4 - Navigate from Index Page (Priority: P2)

**Goal**: Users can access the main features of the application directly from the index page through navigation links.

**Independent Test**: Can be fully tested by visiting the index page and verifying links to world browser, memories, and state pages are present and functional.

### Tests for User Story 4 (REQUIRED for behavior changes) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T024 [P] [US4] E2E test for index page navigation links in packages/e2e/tests/index-navigation.spec.js

### Implementation for User Story 4

- [x] T025 [US4] Add navigation links to index page in src/pages/index.astro

**Checkpoint**: At this point, navigation from index should work, integrating with existing stories

---

## Phase 6: User Story 3 - Watch Internal State (Priority: P3)

**Goal**: Users can monitor the virtual entity's current internal state

**Independent Test**: View three text areas updating with state data

### Tests for User Story 3 (REQUIRED for behavior changes) ⚠️

- [x] T026 [P] [US3] Unit test for state reading in tests/unit/lib/stateReader.test.js
- [x] T027 [P] [US3] Unit test for state polling in tests/unit/lib/statePoller.test.js
- [x] T028 [US3] E2E test for state monitoring in tests/e2e/state-monitor.spec.js
- [x] T029 [P] [US3] Create StateMonitor component in src/components/StateMonitor.astro
- [x] T030 [US3] Create state.astro page in src/pages/state.astro
- [x] T031 [US3] Implement state API endpoint in src/pages/api/state.json.js
- [x] T032 [US3] Add polling mechanism for real-time updates

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T033 [P] Add error handling across all components
- [x] T034 [P] Implement loading states for all pages
- [x] T035 Code cleanup and refactoring
- [x] T036 [P] Performance optimization for file reading
- [x] T037 Run quickstart.md validation
- [x] T038 Documentation updates

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed) or sequentially (P1 → P2 → P3)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - No dependencies
- **User Story 2 (P2)**: Can start after Foundational - No dependencies on other stories
- **User Story 4 (P2)**: Can start after Foundational - Provides navigation to other stories
- **User Story 3 (P3)**: Can start after Foundational - No dependencies on other stories

### Within Each User Story

- Tests MUST be written first and FAIL before implementation
- Components before pages
- API endpoints before UI integration
- Story complete before moving to next priority

### Parallel Opportunities

- Setup tasks marked [P] can run in parallel
- Foundational tasks marked [P] can run in parallel
- Once Foundational completes, all user stories can start in parallel
- All tests for a story marked [P] can run in parallel
- Different user stories can be worked on in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Unit test for folder reading in tests/unit/lib/fileReader.test.js"
Task: "Unit test for world navigation logic in tests/unit/lib/worldNav.test.js"
Task: "E2E test for world browsing in tests/e2e/world-browse.spec.js"

# Launch implementation components in parallel:
Task: "Create WorldBrowser component in src/components/WorldBrowser.jsx"
Task: "Implement world API endpoint in src/pages/api/world/[...path].json.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 4 → Test independently → Deploy/Demo
5. Add User Story 3 → Test independently → Deploy/Demo

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 4
   - Developer D: User Story 3

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group</content>
  <parameter name="filePath">specs/003-virtual-entity-ux/tasks.md
