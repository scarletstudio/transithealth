# Setup Instructions

## Virtual Environment

Virtual environments allow us to manage the dependencies of our project, without affecting the rest of our computer.

Create a virtual environment, which will be stored in a folder called `.venv/`.

```bash
virtualenv .venv
```

Activate the virtual environment. You will do this at the start of every session.

```bash
source .venv/bin/activate
```

Install the project Python dependencies.

```bash
pip3 install -r requirements.txt
```

## Environment Variables

If you do not already have an environment variables file, create one:

```bash
touch .env
```

Then add these contents:

```
API_PORT=5000
ALLOW=http://localhost:5000,http://104.236.21.173:5000
DATABASE=pipeline/database.db
```

## Frontend Development

Change directories to the `app/` folder.

```bash
cd app
```

Install Yarn, a package manager for JavaScript.

Install the project JavaScript dependencies.

```bash
yarn install
```
