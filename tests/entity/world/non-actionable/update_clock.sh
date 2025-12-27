#!/bin/bash
while true; do
  date -Iseconds > "$(dirname "$0")/clock.md"
  sleep 60
done
