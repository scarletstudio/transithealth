#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

# Start backend API
if [ "$1" == "api" ]; then
  echo "Starting backend API..."
  echo "./api/dev.sh $2"
  ./api/dev.sh "$2"
fi

# Start frontend app
if [ "$1" == "app" ]; then
  echo "Starting frontend app..."
  echo "./app/dev.sh $2"
  ./app/dev.sh "$2"
fi

# Make uncompressed database
if [ "$1" == "db" ]; then
  echo "Making uncompressed database..."
  # Drop any local changes to the compressed database
  git restore pipeline/compressed/*
  source .venv/bin/activate
  cd pipeline
  make uncompressed
fi

# Run offline pipeline, only load steps
if [ "$1" == "pipeline-load" ]; then
  echo "Running offline pipeline, only load steps..."
  source .venv/bin/activate
  cd pipeline
  make reload
fi

# Run offline pipeline, without remaking large files
if [ "$1" == "pipeline-quick" ]; then
  echo "Running offline pipeline, without remaking large files..."
  source .venv/bin/activate
  cd pipeline
  make clean-except
  make
fi

# Run offline pipeline, remaking all steps
if [ "$1" == "pipeline-all" ]; then
  echo "Running offline pipeline, remaking all steps..."
  source .venv/bin/activate
  cd pipeline
  make clean
  make
fi

# Run tests
if [ "$1" == "tests" ]; then
  echo "Running tests..."
  source .venv/bin/activate
  pytest
fi

# Update dependencies
if [ "$1" == "update" ]; then
  echo "Updating dependencies..."
  cd app
  yarn install
  cd ..
  source .venv/bin/activate
  pip3 install -r requirements.txt
fi

# Start Jupyter notebook server
if [ "$1" == "notebooks" ]; then
  echo "Starting Jupyter notebook server..."
  echo "./notebooks/start.sh $2"
  ./notebooks/start.sh "$2"
fi
