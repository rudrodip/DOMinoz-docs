#!/bin/bash

# Run build
bun run build

# Create output directory if it doesn't exist
mkdir -p output

# Copy required files and folders
cp -r public output/
cp index.html output/
cp -r dist output/

# Create zip file
cd output
zip -r ../output.zip ./*
cd ..

# Clean up temp directory
rm -rf output
