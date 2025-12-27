# Data Model: Improve World View Mode with File Explorer UX

## Entities

### Folder

Represents a directory in the world structure.

**Fields**:

- `name`: string - Display name of the folder
- `path`: string - Full path from world root (e.g., "/world/docs")
- `children`: array of Folder/File - Sub-folders and files (loaded on expand)

**Relationships**:

- Contains multiple File entities
- Contains multiple Folder entities (recursive)

**Validation**:

- Name must be non-empty, no invalid characters (/, \, etc.)
- Path must be unique within parent

### File

Represents an individual file in the world.

**Fields**:

- `name`: string - Filename with extension
- `path`: string - Full path from world root
- `type`: enum - "text" or "image"
- `content`: string (for text files) or base64 (for images) - File content
- `size`: number - File size in bytes
- `modified`: timestamp - Last modified date

**Relationships**:

- Belongs to one Folder (via path)

**Validation**:

- Name must have valid extension
- Content must match type (text for text files, valid image format for images)
- Size limit: reasonable for web app (e.g., 10MB max)

## State Transitions

- File editing: text files can transition from read-only to editable state
- Folder expansion: collapsed → expanded (loads children)
- Drag-drop: file moves from source path to target path

## Business Rules

- Folders can be nested infinitely, but UI should handle deep nesting gracefully
- Files are immutable except through explicit edit operations
- Unsupported file types display info but cannot be edited/viewed in tabs</content>
  <parameter name="filePath">specs/003-world-file-explorer/data-model.md
