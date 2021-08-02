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
if [ "$2" == "api" ]; then
    echo "Connecting to prod API instead of local. It may take some time to wake up..."
    if [ "$3" == "prod" ]; then
        BACKEND_URL="http://transithealth.herokuapp.com"
    else
        BACKEND_URL="$3"
    fi
    echo "Connecting to Backend: $BACKEND_URL"
    echo $(curl "$BACKEND_URL")
    sed -i "s,NEXT_PUBLIC_API=.*,NEXT_PUBLIC_API=$BACKEND_URL," app/.env.local
fi

# For Cypress: Use the production API instead of your local API
if [ "$3" == "with-prod-api" ]; then
    echo "Connecting to prod API instead of local. It may take some time to wake up..."
    BACKEND_URL="http://transithealth.herokuapp.com"
    echo "Connecting to Backend: $BACKEND_URL"
    echo $(curl "$BACKEND_URL")
    sed -i "s,NEXT_PUBLIC_API=.*,NEXT_PUBLIC_API=$BACKEND_URL," app/.env.local
fi

# Enter app directory
cd app

# Check whether to run static or dynamic site
if [ "$2" == "static" ]; then
    # Build, export, and serve static site
    echo "Building static site instead of dynamic site. This will not listen for changes."
    yarn build
    yarn export
    python3 -m http.server 8001
else
    # Start Next.js development server
    yarn dev
fi
