# Research Findings: Virtual Entity UX

## Folder Reading Server-side

**Decision**: Use Node.js fs module in Astro server for direct file system access to entity/ directory.

**Rationale**: Astro fullstack allows server-side reading without browser limitations. Can read recursively, parse files, serve data via API/SSR.

**Alternatives Considered**:

- Client-side file reading: Rejected due to browser security restrictions requiring user permission for each access.
- Static file serving: Rejected as needs dynamic parsing of entity data.

## Real-time State Updates

**Decision**: Use server-side polling in API endpoints to check for file changes every 30 seconds, client polls API.

**Rationale**: Balances real-time updates with performance. Less frequent checks reduce server load while keeping state reasonably current.

**Alternatives Considered**:

- Client-side polling of files: Rejected due to browser access limitations.
- WebSockets: Considered but polling sufficient for this scope.
- File watchers (chokidar): Could optimize but polling adequate for now.

## Data Formats

**Decision**: Memories as Markdown files (.md) in entity/memory/, internal state as separate .md files (short-term-memory.md, short-term-emotions.md, thoughts.md) in entity/state/.

**Rationale**: Matches existing entity data structure. Markdown for rich formatting, plain text for state components.

**Alternatives Considered**:

- JSON for state: Rejected as existing data is plain text from entity.
- Single file for memories: Rejected as existing structure uses individual files.

## File Structure Assumptions

**Decision**: Fixed structure: entity/world/ for navigation (actionable/, non-actionable/ subdirs), entity/memory/ for memories, entity/state/ for state.

**Rationale**: Based on actual folder contents provided by entity.

**Alternatives Considered**:

- Customizable structure: Rejected as data comes from entity and is not negotiable.
- Different root: Rejected to match existing entity setup.

## Navigation Links on Index Page

**Decision**: Use standard HTML anchor tags with Astro's routing for navigation links on the index page.

**Rationale**: Astro handles client-side routing automatically for internal links. This is the simplest approach that integrates seamlessly with the existing framework.

**Alternatives Considered**:

- Using Astro's `<Link>` component if available, but standard `<a>` tags work fine for this use case.
- JavaScript-based navigation for dynamic behavior, but not needed for static links.

## Styling Navigation with Tailwind CSS

**Decision**: Apply Tailwind classes directly to the anchor tags for consistent styling with the rest of the application.

**Rationale**: The project already uses Tailwind, so maintaining consistency is key. Simple utility classes provide the necessary styling without additional components.

**Alternatives Considered**:

- Creating a reusable button component, but unnecessary for basic links.
- Using CSS modules, but Tailwind is the established pattern.
