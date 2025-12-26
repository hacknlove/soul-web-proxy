<!--
Sync Impact Report
- Version change: 1.0.0 → 1.1.0
- Modified principles: IV Maintainability Over Cleverness → IV Maintainability for Agents
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - ✅ updated: .specify/templates/plan-template.md
  - ✅ reviewed (no change): .specify/templates/tasks-template.md
  - ✅ reviewed (no change): .specify/templates/spec-template.md
  - ⚠ pending: .specify/templates/commands/*.md (directory not present)
  - ✅ reviewed (no change): README.md
- Follow-up TODOs: None
-->

# soul-web-proxy Constitution

## Core Principles

### I. KISS (Keep It Simple)
We MUST prefer the simplest design that meets the current requirements.

- We MUST avoid unnecessary abstraction layers, patterns, and indirection.
- We MUST introduce complexity only when a concrete requirement demands it.
- If we add complexity, we MUST document why simpler alternatives fail.

Rationale: Simple systems are easier to test, debug, and change.

### II. YAGNI (You Aren’t Gonna Need It)
We MUST build only what is needed to satisfy the current spec/user stories.

- We MUST NOT add speculative features, “future-proofing” hooks, or unused
  generalization.
- We MUST treat optimizations as requirements: no premature optimization.
- Out-of-scope ideas MUST be captured as follow-up work, not merged “just in
  case”.

Rationale: Shipping the smallest useful slice reduces risk and rework.

### III. TDD (Test-Driven Development) — Non-Negotiable for Behavior
Any change that affects behavior (features, bug fixes) MUST be developed using
TDD.

- We MUST write tests first and observe them fail before implementation.
- We MUST use a Red → Green → Refactor cycle and keep refactors behavior-safe.
- If the repository lacks an automated test harness for the affected code, the
  change MUST include adding one.
- If an automated test is genuinely infeasible, the PR MUST document an
  explicit, reproducible manual verification procedure and why automation was
  not possible.

Rationale: TDD makes change safer and keeps design pressure toward simplicity.

### IV. Maintainability for Agents (Not Humans)
We MUST optimize for long-term maintainability by LLMs and automated agents.
Human readability is not a goal.

- Code MUST be easy for agents to modify safely: explicit control flow, stable
  module boundaries, and minimal hidden behavior.
- We MUST keep dependencies minimal and justified.
- We MUST delete dead code and avoid “temporary” scaffolding becoming permanent.
- Non-obvious decisions MUST be recorded where agents will find them (in code
  comments/docstrings and in feature docs).

Rationale: The actual maintainers are agents; optimize for their success.

## Engineering Standards

- **Language**: All source code MUST be JavaScript. TypeScript MUST NOT be
  introduced.
- **Clarity first**: Prefer straightforward control flow and explicit data
  structures over “smart” abstractions.
- **Minimal surface area**: New public APIs, exported utilities, or shared
  modules MUST have a clear consumer and a clear contract.
- **Dependency discipline**: Adding a new dependency MUST be justified (what it
  replaces, why built-ins are insufficient).
- **Documentation**: Non-obvious decisions MUST be recorded close to the code
  (docstrings/comments) or in feature docs (spec/plan).

## Development Workflow

- Work MUST start from a written spec (or issue) that defines scope.
- Plans MUST include a “Constitution Check” gate and record any exceptions.
- PRs MUST state:
  - What changed and why (linking to spec/plan).
  - How it was verified (tests and/or explicit manual steps).
  - Any intentional scope deferrals (YAGNI follow-ups).

## Governance

- This constitution supersedes local conventions and ad-hoc preferences.
- Amendments MUST be made via PR and include:
  - A clear rationale.
  - The required Sync Impact Report update.
  - Updates to any dependent templates/docs.
- **Versioning policy**: Constitution versions follow semantic versioning.
  - **MAJOR**: Removes/redefines principles or governance (backward-incompatible).
  - **MINOR**: Adds new principles/sections or materially expands requirements.
  - **PATCH**: Clarifications/wording that do not change meaning.
- **Compliance**: Reviewers MUST verify constitution compliance (or explicit,
  documented exceptions) for each PR.

**Version**: 1.1.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26
