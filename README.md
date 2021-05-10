# TransitHealth

Help people explore data about public transit and public health across Chicago.

## Directory Structure

```
transithealth
├── .github             Contains GitHub actions, automated tasks that runb after commits.
├── .pytest_cache       (Ignore, not committed) Stores information for Python unit test runs.
├── .venv               (Not committed) Details for your virtual environment.
├── api/                RESTful API server for the backend.
├── app/                Static React app for the frontend.
├── docs/               Documentation for the project.
├── notebooks/          Jupyter notebooks for each team member to do analysis and prototyping.
├── pipeline/           Offline pipeline for the backend.
├── .env                (Not committed) Specifies secret variables to use during development.
├── .gitignore          Tells git what files and folders not to commit.
├── LICENSE             Tells others the terms under which they can use this software.
├── Procfile            Tells Heroku how to run the server at deploy time.
├── pytest.ini          Settings for Python unit tests.
├── README.md           (This file!) Helps explain the project.
└── requirements.txt    Dependencies for Python modules and scripts.
```

## View the App

- **Production:** [scarletstudio.github.io/transithealth](https://scarletstudio.github.io/transithealth)
- **Staging:** [bit.ly/transithealth-staging](http://bit.ly/transithealth-staging)
- **Development:** [localhost:8001/transithealth](http://localhost:8001/transithealth)

## Getting Started

Follow the [setup instructions](docs/setup.md).

## Run Locally

To run the entire application locally, open two separate terminals for these two steps:

**Terminal 1.** Start Frontend

```bash
cd app && yarn start
```

**Terminal 2.** Start Backend

```bash
FLASK_APP=api/server.py FLASK_DEBUG=1 FLASK_ENV=development flask run
```
