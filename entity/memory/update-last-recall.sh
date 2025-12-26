#!/bin/bash

# This script updates the modification time of a memory file to reflect it was recalled (read).
# Usage: ./update-last-recall.sh <memory-filename>

MEMORY_FILE="$1"

if [ -z "$MEMORY_FILE" ]; then
  echo "Error: Memory filename is required."
  exit 1
fi

# Ensure the path is relative to memory/ if not already or treat it as absolute if it exists
if [ -f "memory/$MEMORY_FILE" ]; then
  TARGET="memory/$MEMORY_FILE"
elif [ -f "$MEMORY_FILE" ]; then
  TARGET="$MEMORY_FILE"
else
  echo "Error: File $MEMORY_FILE not found."
  exit 1
fi

touch "$TARGET"
echo "Updated modification time for $TARGET"
