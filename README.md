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

## Run Staging

The staging environment is designed to match production as closely as possible.

You will need two terminal windows to start the app. In each terminal, `ssh` into the staging environment.

```bash
source .env
ssh root@$DROPLET
# Enter droplet password
cd transithealth
```

In one of the terminals, get the latest version of the repository.

```bash
git checkout main
git fetch
git pull
```

Now start the app and API.

**Terminal 1: Frontend**

```bash
cd app
yarn install
yarn build
yarn export
python3 -m http.server 8001
```

**Terminal 2: Backend**

```bash
source .venv/bin/activate
pip3 install -r requirements.txt
tar -xf pipeline/compressed.db.tgz -C pipeline
gunicorn --bind 0.0.0.0:$PORT api:app
```
