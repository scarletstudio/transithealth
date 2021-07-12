#!/bin/bash

# Activate virtual environment
source .venv/bin/activate

# Install dependencies
pip3 install -r requirements.txt

# Refresh IP address for Cloud9 instance
if [ -n "$1" ]; then
    ./api/scripts/refresh.sh
fi

# Start Flask development server
export FLASK_APP=api/server.py
export FLASK_DEBUG=1
export FLASK_ENV=development
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=5000
flask run
