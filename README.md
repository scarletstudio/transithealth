# TransitHealth

Help people explore data about transit and public health in Chicago.

## Directory Structure

```
transithealth
├── api/                RESTful API server for the backend.
├── app/                Static React app for the frontend.
├── common/             Python modules to be reused through the backend and notebooks.
├── docs/               Documentation for the project.
├── notebooks/          Jupyter notebooks for each engineer to do analysis and prototyping.
└── pipeline/           Offline pipeline for the backend.
```

## Getting Started

Follow the [setup instructions](docs/setup.md).

## Run Locally

To run the entire application locally, open two separate terminals for these two steps:

**Step 1.** Start the backend

```bash
FLASK_APP=api/server.py FLASK_DEBUG=1 FLASK_ENV=development flask run
```

**Step 2.** Start the frontend

```bash
cd app && yarn start
```
