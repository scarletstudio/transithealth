# Cypress

## Contents

- [Overview](#overview)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [GitHub Actions](#github-actions)

## Overview

Cypress is a front end testing tool that allows a team to write and perform integration tests on its project. It differs from other unit tests by testing the project by running it in a browser.

Cypress comes with a variety of useful features. It allows for easy debuggability and supports cross browser testing, which it does locally. Cypress also automatically waits for commands and assertions to execute, without the need for you to add waits or sleeps to the tests.

During test execution, Cypress takes "snapshots" of every command and assertion it performs to see what happened at each one. This is useful when using the Test Runner UI. When these tests are added to the GitHub workflow or done from a Command Line Interface, Cypress provides the ability to store screenshots on failure, or videos of the entire test. This helps you get better understanding of what occurred during the test for debugging.

## Installation

Installation of Cypress is done through yarn like all other Frontend dependencies, and should be already completed for this repository. However, in case of any troubles trying to run tests or access its features, you can refer to the official documentation for Cypress.

- [Cypress Installation](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Cypress Dependencies](https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies)

You can also double check that Cypress is installed by running the following command while in `transithealth/app/`

```bash
npm run cy:info
```

## Running Tests

A test file contains several JavaScript commands that perform different types of actions and assertions in order to test the app. A very simple example of one of these tests can be run with the following:

```bash
npm run cy:run-example
```

This will show what a test looks like when run from the command line. This test in particular is only asserting that true is true, and does not test anything important.

In order to run a different test file within the Integration folder, you can run the following:

```bash
npm run cy:run --spec {your-file-here}
```

It's important to note that Cloud9 may not have enough free resources for Cypress to run tests other than the example. Using a local machine or a VM with a higher allocation of memory will allow you to run your own tests without issue. Even then, Cypress tests are rarely run directly in your own Command Line. Instead, we implement these tests using [GitHub Actions](#github-actions)

## Writing Tests

Writing tests yourself can be fairly straightforward depending on what exactly you want to test. For the most part, a Cypress End-to-End test can be thought of as a list of steps that will be performed sequentially. From visiting the website to looking for a button on the page to clicking that button and checking the URL changed, every step the test executes is similar to that of an end user. 

With Cypress, however, you can program the test to perform assertions, similar to conditionals in conventional programming. These assertions can be used to check if a value or element has changed or exists as a result of a command it has executed. If the first command is to click a button, you can assert the URL changed to be as expected, or if a menu appeared or the webpage changed as a result of that button press. Every component on the app can be manipulated by Cypress commands, and tested with Cypress assertions. 

A working example of one of these tests can be seen [in the integration folder.](../../app/tests/e2e/integration/timeline_test.js)

Attempting to read this file can be a bit overwhelming, but Cypress provides [excellent documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress) on reading test files and being introduced to Cypress as a whole.
These examples, and others provided in the official documentation, can be very helpful in determining every step a test takes when being run.

All Cypress tests meant for the TransitHealth app should be placed in the specific integration folder in the tests file.

`transithealth/app/tests/e2e/integration/`

Detailed information on how to write Cypress tests, as well as the commands and assertions supported by Cypress, can be found in the official documentation.

- [Writing Cypress Tests](https://docs.cypress.io/guides/getting-started/writing-your-first-test)
- [Cypress API, Assertions, and Commands](https://docs.cypress.io/api/table-of-contents)


## GitHub Actions

Setting up a GitHub Action can be very useful when you're trying to ensure that each new feature or addition to the codebase is implemented correctly, and that the Frontend continues to work properly. In order to do this, we can use Cypress tests to perform these integration tests and make sure it all fits together.

For TransitHealth, it is important that any GitHub Action added to test a particular set of commands and assertions does so on a local development version of the website. One of the GitHub Actions used for TransitHealth can be seen [in the GitHub workflows.](../../.github/workflows/cypress.yaml)

In this test file, the frontend and backend are locally built after all necessary dependencies are installed. Once this is done, Cypress runs the test file, which is set up to go to this local site build and test its components. Since this particular test runs as a GitHub Action for all new pull requests, the local site will be using all changes made to the frontend and backend to ensure the functionality is not broken.

For more information on writing new GitHub actions, you can visit the official documentation, as well as the official GitHub action page for Cypress

- [GitHub Actions Documentation](https://docs.cypress.io/guides/continuous-integration/github-actions)
- [Cypress GitHub Actions Examples](https://github.com/cypress-io/github-action#basic)
- [Real World App Example](https://github.com/cypress-io/cypress-realworld-app/blob/develop/.github/workflows/main.yml)