# Frontend App

Static React app for the frontend.

## Directory Structure

```
app
├── build/              (Ignore, not committed) Files produced to help with build process.
├── components/         React components to be reused throughout the app.
├── node_modules/       (Ignore, not committed) Dependencies for frontend.
├── pages/              React components to be used as layouts for main pages.
├── public/             Public files served from the website root directory.
|   ├── resources/      Files and data that does not need to be served by the API.
|   └── mock/           Data representing mock API responses.
└── styles/             CSS stylesheets.
├── transithealth/      (Ignore, not committed) Built version of the app to deploy.
├── package.json        Lists development scripts and dependencies.
└── next.config.js      Configuration file for the static site.
```

## Common Commands

Before starting work on the frontend app, change to its directory.

```bash
cd app
```

Start the local development server.

```bash
yarn dev
```

Created with Next.js using `yarn create next-app`.
