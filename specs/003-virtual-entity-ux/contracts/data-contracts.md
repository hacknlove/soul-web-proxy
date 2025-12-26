# Data Contracts

## Memory Schema (from entity/memory/*.md)
```json
{
  "type": "object",
  "properties": {
    "id": {"type": "string", "description": "filename without .md"},
    "title": {"type": "string", "description": "humanized from filename title part"},
    "content": {"type": "string", "description": "full markdown for rendering"},
    "date": {"type": "string", "format": "date-time", "description": "from filename timestamp"}
  },
  "required": ["id", "title", "content", "date"]
}
```

## Internal State Schema (from entity/state/*.md)
```json
{
  "type": "object",
  "properties": {
    "memory": {"type": "string", "description": "content of short-term-memory.md"},
    "emotions": {"type": "string", "description": "content of short-term-emotions.md"},
    "thoughts": {"type": "string", "description": "content of thoughts.md"},
    "timestamp": {"type": "string", "format": "date-time", "description": "latest file mod time"}
  },
  "required": ["memory", "emotions", "thoughts", "timestamp"]
}
```

## Folder Structure Contract (entity/world/)
- Root: entity/world/
- Subdirs: actionable/ (action items), non-actionable/ (observations, images)
- Files: .md (descriptions), .png (images), .sh (scripts)
- Navigation: Traverse subdirs, list files with metadata