# Data Model: Virtual Entity UX

## Entities

### Virtual Entity

- **Purpose**: Represents the AI entity being interacted with
- **Fields**:
  - name: string (entity identifier)
  - description: string (optional entity info)
- **Relationships**:
  - Has many: Memories
  - Has one: Internal State
- **Validation**: Name required, non-empty

### Virtual World

- **Purpose**: Root container for filesystem-like structure at entity/world/
- **Fields**:
  - rootPath: string ("entity/world/")
  - structure: object (nested with actionable/, non-actionable/ subdirs)
- **Relationships**:
  - Contains: Folders (actionable, non-actionable)
- **Validation**: Directory exists, contains expected subdirs

### Folder

- **Purpose**: Directory in entity/world/ structure
- **Fields**:
  - name: string (folder name, e.g., actionable)
  - path: string (relative path from world/)
  - parent: Folder (reference, null for world/)
  - children: array[Folder|File] (contained .md, .png, etc.)
- **Relationships**:
  - Belongs to: Virtual World
  - Has many: Sub-folders and files
- **Validation**: Name matches existing dirs, path valid

### Memory

- **Purpose**: Blog-like entry for entity experiences
- **Fields**:
  - id: string (filename without .md)
  - title: string (derived from filename, e.g., "sharing-my-preferences")
  - content: string (full markdown content to render)
  - date: datetime (parsed from filename timestamp)
- **Relationships**:
  - Belongs to: Virtual Entity
- **Validation**: Filename format YYYY-MM-DDTHH:MM:SS+TZ-title.md, content valid markdown

### Internal State

- **Purpose**: Current entity state components
- **Fields**:
  - memory: string (content from short-term-memory.md)
  - emotions: string (content from short-term-emotions.md)
  - thoughts: string (content from thoughts.md)
  - timestamp: datetime (file modification time)
- **Relationships**:
  - Belongs to: Virtual Entity
- **Validation**: Files exist, content non-empty

## State Transitions

### Folder Navigation

- Initial: Root folder displayed
- Navigate to child: Update current folder, refresh display
- Navigate back: Move to parent, refresh display
- Invalid path: Show error, stay on current

### Memory Viewing

- Initial: List all memories sorted by date
- Select memory: Display full content
- No memories: Show empty state

### State Monitoring

- Initial: Load current state from files
- Update: Poll for changes, refresh display if modified
- Unavailable: Show last known state with warning

## Navigation Addition

The addition of navigation links on the index page does not introduce new data entities or state transitions. It simply provides static links to existing pages.
