#!/bin/bash

# Install dependencies
yarn install

# Refresh IP address for Cloud9 instance
if [ -n "$1" ]; then
    ./api/scripts/refresh.sh
fi

# Enter app directory
cd app

# Start Next.js development server
yarn dev
