#!/bin/bash

# Activate virtual environment
source .venv/bin/activate

# Install dependencies
pip3 install -r requirements.txt

# Refresh IP address for Cloud9 instance
if [ "$1" == "9" ]; then
    ./api/scripts/refresh.sh
    INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
    echo "Running Jupyter notebook server on: http://$INSTANCE_IP:8080"
    echo "Copy token from output below:"
fi

# Start Jupyter notebook server
python3 -m notebook --ip 0.0.0.0 --port 8080
