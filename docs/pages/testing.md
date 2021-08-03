# Testing

## Goals of Testing

In different software engineering organizations, testing serves various purposes:

- To describe the requirements for a software components
- To check whether an implementation meets the requirements
- To document the inputs, outputs, and special cases of software
- To help the developer understand what components are affected by a change
- To alert developers if they have unwittingly broken another component
- To determine whether software is safe to deploy

There are different kinds of testing, which come with different trade-offs. 

Test successes and failures can sometimes be misleading:

- False positive tests pass even if the software does not work as intended
- False negative tests fail even if the software works as intended

Tests can also take a long time to write and maintain.

We have to decide whether the benefits of a testing method are worth the cost. Generally, we assume that a small cost to create a test now will provide a large value over time.

Engineers are expected to write unit tests for TransitHealth metrics in the backend API, but otherwise, we mainly use manual testing. We also rely on pair programming and code reviews to test if the changes we make to the codebase are safe before we deploy them.

## Unit Testing

Unit test break a system into smaller components whose inputs and outputs can be tested in isolation. Unit tests may be easier to read, write, and maintain, but may miss problems that lie at the intersection of components.

Read the [Metric Test](new_endpoint.md#b-metric-test) section of the guide on adding new API endpoints for a walkthrough of a `pytest` unit test for testing database queries on fake data.

## Manual Testing

The most common way engineers test TransitHealth features is through manual testing.

- Run the app and try a feature.
- Submit a request to the API in your browser or through a tool like curl, Insomnia, or Postman.
- Run the SQLite CLI and write SQL queries to inspect the database.

## Integration Testing

Integration tests check a system by running all its components end-to-end. This method can catch problems at the intersection of components, but can be challenging to maintain, especially if the system changes frequently and no longer resembles the integration test environment.

Engineers are not expected to write integration tests for TransitHealth features. However, adding integration testing to parts of our system could be a good stretch project. A working example of Integration Testing used for TransitHealth can be [read about here](cypress.md)

- Run the app, automatically simulate user activity, and check if the results are as expected.
- Run the API, automatically simulate requests, and check if the results are as expected.
- Run the offline pipeline from scratch and check if the results are as expected.

## Quality Assurance Testing

In QA testing, engineers try to use the system and find flaws. Usually, QA starts with use cases that users of the software will want as well as situations that developers of the software may not have anticipated.
