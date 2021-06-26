#!/bin/bash

python3 -m notebook --ip 0.0.0.0 || echo "Failed to start Juypter. Is your virtual environment activated?"
