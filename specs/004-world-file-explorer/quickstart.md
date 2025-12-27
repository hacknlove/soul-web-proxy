# Quickstart: Improve World View Mode with File Explorer UX

## Prerequisites

- Node.js LTS installed
- Project dependencies: `npm install`
- New dependencies: `npm install @monaco-editor/react monaco-editor`

## Running the Feature

1. Start dev server: `npm run dev`
2. Navigate to `/world` page
3. The world view now includes a left sidebar with file tree and right area with tabs

## Testing

- Unit tests: `npm run test:unit`
- E2E tests: `npm --prefix packages/e2e install && npm --prefix packages/e2e test`

## Key Components

- `FileTree.jsx`: Treeview in left sidebar
- `FileEditor.jsx`: Monaco-based editor for text files
- `ImageViewer.jsx`: Viewer for image files
- `FileTab.jsx`: Tab management for opened files

## File Operations

- Click folders to expand/collapse in the left sidebar
- Click files to open them in tabs on the right
- Edit text files directly in the Monaco editor within tabs
- View image files in tabs
- Drag and drop external files onto folders in the tree to copy them
- Create new files using the "Create File" button in the sidebar</content>
  <parameter name="filePath">specs/003-world-file-explorer/quickstart.md
