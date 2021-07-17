#!/bin/bash

# Install dependencies
yarn install

# Refresh IP address for Cloud9 instance
if [ "$1" == "9" ]; then
    ./api/scripts/refresh.sh
    INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
    echo "Launching Frontend To: http://$INSTANCE_IP:8001/transithealth"
fi

# Use the production API instead of your local API
if [ "$2" == "prod-api" ]; then
    echo "Connecting to prod API instead of local. It may take some time to wake up..."
    BACKEND_URL="http://transithealth.herokuapp.com"
    echo $(curl "$BACKEND_URL")
    sed -i "s,NEXT_PUBLIC_API=.*,NEXT_PUBLIC_API=$BACKEND_URL," app/.env.local
fi

# Enter app directory
cd app

# Start Next.js development server
yarn dev
