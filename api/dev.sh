#!/bin/bash

# Activate virtual environment
source .venv/bin/activate

# Install dependencies
pip3 install -r requirements.txt

# Refresh IP address for Cloud9 instance
if [ "$1" == "9" ]; then
    ./api/scripts/refresh.sh
    INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
    echo "Launching API To: http://$INSTANCE_IP:5000"
fi

# Start Flask development server
export FLASK_APP=api/server.py
export FLASK_DEBUG=1
export FLASK_ENV=development
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=5000
flask run
