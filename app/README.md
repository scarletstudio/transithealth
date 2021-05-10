# Frontend App

Static React app for the frontend.

- Allows the user to visualize data
- Sends requests to the backend API

## Directory Structure

```
app
├── build/              (Ignore, not committed) Files produced to help with build process.
├── components/         React components to be reused throughout the app.
├── node_modules/       (Ignore, not committed) Dependencies for frontend.
├── pages/              React components to be used as layouts for main pages.
├── public/             Public files served from the website root directory.
|   ├── resources/      Files and data that does not need to be served by the API.
|   ├── images/         Images to host on the site.
|   └── mock/           Data representing mock API responses.
├── site/               Data or functions to access site-wide, such as metrics metadata.
├── styles/             CSS stylesheets.
├── transithealth/      (Ignore, not committed) Built version of the app to deploy.
├── .env.local          Stores variables to access site-wide or configure the app.
├── next.config.js      Configuration file for the static site.
├── package.json        Lists development scripts and dependencies.
├── README.md           (This file!) Helps explain the frontend app.
└── yarn-lock           (Ignore) Helps configure dependencies and installations.
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
