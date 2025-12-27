# API Contracts: World Files

## Endpoints

### GET /api/world/files

List files and folders in a given path.

**Query Parameters**:

- `path` (string, required): Path to list (e.g., "/world/docs")

**Response** (200):

```json
{
  "items": [
    {
      "name": "example.txt",
      "path": "/world/docs/example.txt",
      "type": "file",
      "fileType": "text",
      "size": 1024,
      "modified": "2025-12-27T10:00:00Z"
    },
    {
      "name": "images",
      "path": "/world/docs/images",
      "type": "folder",
      "children": [] // or null if not expanded
    }
  ]
}
```

### POST /api/world/files

Create a new file or folder.

**Body**:

```json
{
  "path": "/world/docs/newfile.txt",
  "type": "file", // or "folder"
  "content": "" // optional for files
}
```

**Response** (201): Created item details

### PUT /api/world/files

Update file content.

**Body**:

```json
{
  "path": "/world/docs/example.txt",
  "content": "new content"
}
```

**Response** (200): Success

### POST /api/world/files/copy

Copy file to new location.

**Body**:

```json
{
  "sourcePath": "/world/docs/example.txt",
  "targetPath": "/world/newdocs/example.txt"
}
```

**Response** (200): Success</content>
<parameter name="filePath">specs/003-world-file-explorer/contracts/world-files-api.md
