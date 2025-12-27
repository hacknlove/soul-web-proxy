#!/bin/bashab
  hello world
# Check if an argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <image_file_path>"
    exit 1
fi

IMAGE_PATH="$1"

# Check if the file exists
if [ ! -f "$IMAGE_PATH" ]; then
    echo "Error: File '$IMAGE_PATH' not found."
    exit 1
fi

# Use ollama to describe the image using the llava:7b model
# Note: For multimodal models, we pass the image path within the prompt.
ollama run llava:7b "Describe this image in detail: $IMAGE_PATH"
