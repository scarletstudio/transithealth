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
INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
echo "Launching Frontend To: http://$INSTANCE_IP:8001/transithealth"
yarn dev
