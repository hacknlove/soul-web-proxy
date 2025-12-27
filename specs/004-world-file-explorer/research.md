# Research Findings: Improve World View Mode with File Explorer UX

## Monaco Editor Integration

**Decision**: Use @monaco-editor/react library for text file editing in the Astro application.

**Rationale**:

- @monaco-editor/react provides a React component wrapper for Monaco Editor, which integrates seamlessly with Astro's React support.
- It handles the setup and loading of Monaco Editor, providing a clean API for initialization, theming, and event handling.
- Supports multiple languages out-of-the-box, which fits the requirement for text file editing.
- Maintains performance by lazy-loading Monaco and its workers.

**Alternatives Considered**:

- astro-code-editor: An Astro-specific component using Monaco, but it's work-in-progress and may not be stable for production.
- Direct monaco-editor: Requires manual setup of loaders and workers, increasing complexity without added benefits for this use case.

**Implementation Notes**:

- Install via npm: `npm install @monaco-editor/react monaco-editor`
- Use in a .jsx component within Astro pages/components.
- Configure language based on file extension (e.g., 'javascript' for .js, 'plaintext' for others).
- Handle editor instance for saving changes and real-time updates.

## File Tree Component

**Decision**: Build a custom treeview component using existing Astro/Tailwind patterns.

**Rationale**:

- The app already uses Tailwind CSS and Astro components; a custom tree fits the maintainability principle.
- No complex state management needed beyond expand/collapse and file selection.
- Allows full control over UX matching VS Code style.

**Alternatives Considered**:

- react-treebeard or similar libraries: Would introduce new dependencies, violating minimal surface area.

## Drag and Drop

**Decision**: Use native HTML5 drag-and-drop API with React event handlers.

**Rationale**:

- Simple and direct implementation without additional libraries.
- Fits KISS principle; native APIs are well-supported in modern browsers.
- Can handle file copying by reading file data and writing to target folder.

**Alternatives Considered**:

- react-dnd: Overkill for simple file copy; adds complexity.

## Performance Considerations

**Decision**: Lazy-load Monaco Editor and implement virtual scrolling for large file trees if needed.

**Rationale**:

- Monaco is heavy; lazy loading ensures it only loads when needed.
- For file trees >1000 items, virtual scrolling prevents DOM bloat (though YAGNI suggests deferring until needed).

**Alternatives Considered**:

- Pre-load Monaco: Increases initial bundle size unnecessarily.</content>
  <parameter name="filePath">specs/003-world-file-explorer/research.md
