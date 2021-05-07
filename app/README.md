# Frontend App

Static React app for the frontend.

## Directory Structure

```
app
├── artifacts/          (Ignore, not committed) Files produced to help with build process.
├── dist/               (Ignore, not committed) Built version of the app to deploy.
├── node_modules/       (Ignore, not committed) Dependencies for frontend.
├── public/             Public files served from the website root directory.
|   ├── resources/      Files and data that does not need to be served by the API.
|   └── mock/           Data representing mock API responses.
├── src/                App source code.
|   ├── components/     React components to be reused throughout the app.
|   ├── containers/     React components to be used as layouts for child pages.
|   ├── pages/          React components to be used as layouts for main pages.
|   ├── questions/      React components to be used as layouts and content for question pages.
|   └── style/          CSS stylesheets.
├── tmp/                (Ignore, not committed) Temporary folder for serving app while developing.
└── static.config.js    Configuration file for the static site.
```

## Common Commands

Before starting work on the frontend app, change to its directory.

```bash
cd app
```

Start the local development server.

```bash
yarn start
```

Created with `react-static create`, using the `basic` template.
