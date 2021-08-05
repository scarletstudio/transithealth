# Frontend App

Static React app for the frontend.

- Allows the user to visualize data
- Sends requests to the backend API

## Directory Structure

```
app
├── build/              (Ignore, not committed) Files produced to help with build process.
├── components/         React components to be reused throughout the app.
|   └── questions/      React components for data vignettes in the questions pages.
├── node_modules/       (Ignore, not committed) Dependencies for frontend.
├── pages/              React components to be used as layouts for main pages.
├── public/             Public files served from the website root directory.
|   ├── resources/      Files and data that does not need to be served by the API.
|   ├── images/         Images to host on the site.
|   └── mock/           Data representing mock API responses.
├── site/               Data or functions to access site-wide, such as metrics and questions metadata.
├── styles/             CSS stylesheets.
├── tests/e2e           End-to-End tests.
|   ├── fixtures/       Files that are used as external pieces of static data for Cypress tests.
|   ├── integration/    JavaScript test files that are run by Cypress for End-to-End Testing.
|   ├── plugins/        A special file that gives Cypress tests access to the file system and OS.
|   ├── support/        Reusable behavior such as custom commands or global overrides.
|   ├── screenshots/    (Ignore, not committed) Images of what the tester saw if a test failed.
|   └── videos/         (Ignore, not committed) Videos that show the execution of Cypress tests in real time. 
├── transithealth/      (Ignore, not committed) Built version of the app to deploy.
├── .env.local          Stores variables to access site-wide or configure the app.
├── cypress.json        Configuration file for Cypress' file structure and other options.
├── next.config.js      Configuration file for the static site.
├── package.json        Lists development scripts and dependencies.
├── README.md           (This file!) Helps explain the frontend app.
└── yarn-lock           (Ignore) Helps configure dependencies and installations.
```

## Common Commands

Start the local development server.

```bash
./app/dev.sh
```

Created with Next.js using `yarn create next-app`.
