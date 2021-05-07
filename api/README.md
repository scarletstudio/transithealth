# API Server

RESTful API server for the backend.

## Directory Structure

```
api
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
