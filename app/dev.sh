#!/bin/bash

# Load nvm for use in shell
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh

# Activate Node v12
nvm install 12
nvm use 12

# Install dependencies
npm install --global yarn
yarn install

# Refresh IP address for Cloud9 instance
if [ -n "$1" ]; then
    ./api/scripts/refresh.sh
    INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
    echo "Launching Frontend To: http://$INSTANCE_IP:8001/transithealth"
fi

# Enter app directory
cd app

# Start Next.js development server
yarn dev
