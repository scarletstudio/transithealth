# API Server

RESTful API server for the backend.

- Handles requests from the frontend app
- Accesses the database
- Computes metrics

## Directory Structure

```
api
├── __pycache__         (Ignore, not committed) Stores information to help run with Python.
├── endpoints/          Specifies groups of endpoints for the API.
├── metrics/            Implementations of metrics.
├── questions/          Implementations of questions.
├── scripts/            Scripts for tasks.
├── utils/              Helper functions.
├── __init__.py         File that tells Python that this folder is a module, also exports the Flask app.
├── README.txt          (This file!) Helps explain the backend API.
└── server.py           Main file for running API server.
```

## Common Commands

You can run the API server from the root folder of the repository, no need to change directories.

Before starting work on the API server, activate your virtual environment.

```bash
source .venv/bin/activate
```

Start the local development server.

```bash
FLASK_APP=api/server.py FLASK_DEBUG=1 FLASK_ENV=development flask run
```
