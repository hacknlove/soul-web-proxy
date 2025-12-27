# Feature Specification: Improve World View Mode with File Explorer UX

**Feature Branch**: `001-world-file-explorer`  
**Created**: 2025-12-27  
**Status**: Draft  
**Input**: User description: "the world view mode, that browses the world needs to be improved. I want a better UX, and more features. I want the same kind of UX of visual code, so in the left bar, a treeview of the folders and the files, and in the right side, the main countent, which is tabs of the opened files, where the user can make editions, or If the file is an image the user can see it in the right side tab. The user should be able aswell to create files, creation shuld be done on the left side bar. Dragging and dropping file should copy them to the active folder. "

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Browse World with Treeview (Priority: P1)

Users can navigate the world through a hierarchical treeview of folders and files displayed in a left sidebar, similar to Visual Studio Code.

**Why this priority**: This is the core browsing functionality that improves UX for exploring the world structure.

**Independent Test**: Can be fully tested by verifying the treeview displays folders and files, and users can expand/collapse folders to navigate.

**Acceptance Scenarios**:

1. **Given** the world view mode is active, **When** user opens the page, **Then** a treeview of folders and files appears in the left sidebar.
2. **Given** a folder is collapsed, **When** user clicks on it, **Then** it expands to show subfolders and files.
3. **Given** a folder is expanded, **When** user clicks on it again, **Then** it collapses.

---

### User Story 2 - Open and Edit Files (Priority: P2)

Users can open files in tabs on the right side, edit text files, and view image files.

**Why this priority**: Enables interaction with content, enhancing the browsing experience.

**Independent Test**: Can be fully tested by opening text and image files and verifying editing/viewing capabilities.

**Acceptance Scenarios**:

1. **Given** a text file is selected in the treeview, **When** user clicks it, **Then** it opens in a new tab on the right side with editable content.
2. **Given** an image file is selected, **When** user clicks it, **Then** it opens in a tab displaying the image.
3. **Given** a file is open in a tab, **When** user edits the content (for text files), **Then** changes are reflected in real-time.

---

### User Story 3 - Create Files and Drag-Drop (Priority: P3)

Users can create new files via the left sidebar and copy files by dragging and dropping into folders.

**Why this priority**: Adds creation and file management features for a complete file explorer experience.

**Independent Test**: Can be fully tested by creating files through the sidebar and dragging files to copy them.

**Acceptance Scenarios**:

1. **Given** the left sidebar is active, **When** user selects to create a file, **Then** a new file is created in the current folder.
2. **Given** a file is dragged from outside, **When** dropped into a folder in the treeview, **Then** the file is copied to that folder.

---

### Edge Cases

- What happens when a folder contains many files (e.g., 1000+)? The treeview should load efficiently without freezing.
For now we can just note this as a consideration for performance testing. Following the YAGNI, we probably will never have that many files in a world.
- How does the system handle unsupported file types? Display a message indicating the file cannot be opened.
Show file information, like size, type, and last modified date.
- What if a user tries to create a file with an invalid name? 
Prevent creation and show an error.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST display a hierarchical treeview of folders and files in the left sidebar when in world view mode.
- **FR-002**: System MUST open selected files in tabs on the right side, allowing text editing for text files and image viewing for image files.
- **FR-003**: System MUST allow users to create new files through the left sidebar interface.
- **FR-004**: System MUST support dragging and dropping files to copy them into the active folder.

### Key Entities _(include if feature involves data)_

- **Folder**: Represents directories in the world structure, with attributes like name and path.
- **File**: Represents individual files, with types including text and image, attributes like name, path, and content.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can navigate to any folder in under 5 seconds when the treeview is loaded.
- **SC-002**: 95% of users can open and edit a text file successfully on first attempt.
- **SC-003**: File creation and drag-drop operations complete in under 2 seconds.
- **SC-004**: The interface handles up to 1000 files/folders without performance degradation.</content>
  <parameter name="filePath">specs/001-world-file-explorer/spec.md
