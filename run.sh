#!/bin/bash

# Load nvm for use in shell
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "api" ]; then
  echo "Starting backend API..."
  echo "./api/dev.sh $2"
  ./api/dev.sh "$2"
  
elif [ "$1" == "app" ]; then
  echo "Starting frontend app..."
  echo "./app/dev.sh ${@:2}"
  ./app/dev.sh "${@:2}"
  
elif [ "$1" == "db" ]; then
  echo "Making uncompressed database..."
  # Drop any local changes to the compressed database
  git restore pipeline/compressed/*
  source .venv/bin/activate
  cd pipeline
  make uncompressed
  
elif [ "$1" == "pipeline-load" ]; then
  echo "Running offline pipeline, only load steps..."
  source .venv/bin/activate
  cd pipeline
  make reload
  
elif [ "$1" == "pipeline-quick" ]; then
  echo "Running offline pipeline, without remaking large files..."
  source .venv/bin/activate
  cd pipeline
  make clean-except
  make
  
elif [ "$1" == "pipeline-all" ]; then
  echo "Running offline pipeline, remaking all steps..."
  source .venv/bin/activate
  cd pipeline
  make clean
  make
  
elif [ "$1" == "make" ]; then
  echo "make ${@:2}"
  source .venv/bin/activate
  cd pipeline
  make "${@:2}"

elif [ "$1" == "sqlite3" ]; then
  echo "sqlite3 ${@:2}"
  source .venv/bin/activate
  sqlite3 "${@:2}"

elif [ "$1" == "pytest" ]; then
  echo "pytest ${@:2}"
  source .venv/bin/activate
  pytest "${@:2}"

elif [ "$1" == "tests" ]; then
  echo "Running tests..."
  source .venv/bin/activate
  pytest -vvl
  
elif [ "$1" == "test" ]; then
  echo "Did you mean 'run tests' ?"

elif [ "$1" == "update" ]; then
  echo "Updating dependencies..."
  cd app
  # Activate Node v14
  nvm install 14
  nvm use 14
  # Install app dependencies
  npm install --global yarn
  yarn install
  cd ..
  # Install backend dependencies
  source .venv/bin/activate
  pip3 install -r requirements.txt

elif [ "$1" == "notebooks" ]; then
  echo "Starting Jupyter notebook server..."
  echo "./notebooks/start.sh $2"
  ./notebooks/start.sh "$2"
  
elif [ "$1" == "notebook" ]; then
  echo "Did you mean 'run notebooks' ?"

elif [ "$1" == "sqlite" ]; then
  echo "Starting SQLite command line interface..."
  # If in the pipeline folder, go back up
  # So that this command can be run from either transithealth/ or pipeline/
  CURRENT_DIR=$(basename $(pwd))
  if [ "$CURRENT_DIR" == "pipeline" ]; then
    cd ..
  fi
  sqlite3 pipeline/database.db -header --column

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
