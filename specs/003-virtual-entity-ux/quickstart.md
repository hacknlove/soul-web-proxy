# Quickstart: Virtual Entity UX

## Prerequisites

- Node.js LTS
- Modern web browser with File System Access API support (Chrome 86+, Edge 86+)

## Setup

1. Clone repository
2. `npm install`
3. `npm run dev`

## Usage

1. Start Astro dev server (`npm run dev`)
2. Open app in browser
3. Navigate world, view memories, monitor state (data loaded from entity/ folder)

## Data Structure

Ensure `entity/` folder exists in project root with:

- `world/` directory with actionable/ and non-actionable/ subdirs
- `memory/` directory with .md files (memories)
- `state/` directory with short-term-memory.md, short-term-emotions.md, thoughts.md

## Navigation Update

The index page now includes navigation links to the main features:

- Browse the Virtual World (`/world`)
- View Entity Memories (`/memories`)
- Monitor Internal State (`/state`)

## Development

- `npm run test:unit` for unit tests
- `npm run build` for production build
