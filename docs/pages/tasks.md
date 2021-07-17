# Common Tasks

- Offline Pipeline Tasks
  - [Extract a Dataset](#extract-a-dataset)
  - [Transform a Dataset](#transform-a-dataset)
  - [Load a Dataset](#load-a-dataset)
- Backend API Tasks
  - [Implement a Metric](#implement-a-metric)
  - [Publish a Metric](#publish-a-metric)
  - [Add an Endpoint](#add-an-endpoint)
- Frontend App Tasks
  - [Add a Component](#add-a-component)

## Extract a Dataset

Bring data from an outside source into our offline pipeline to prepare for transformation.

For more information, read the extract section in the guide on how to [add a new dataset](new_dataset.md#extract).

### Examples

- Extracts COVID spread data from the Chicago Data Portal: [`pipeline/extract/covid_spread.sql`](../../pipeline/extract/covid_spread.sql)
- Extracts income data from the Chicago Health Atlas API: [`pipeline/extract/income.py`](../../pipeline/extract/income.py)

### Checklist

- [ ] Find the source of data and understand its contents
- [ ] Write a SQL query, Python script, or bash commands to fetch the data
- [ ] Write an extract step in `pipeline/Makefile`
- [ ] Run the extract step to verify that it works

## Transform a Dataset

After extraction, apply computations to data in our offline pipeline to prepare for loading.

For more information, read the transform section in the guide on how to [add a new dataset](new_dataset.md#transform).

### Examples

- Transforms daily rideshare data into weekly rideshare data: [`pipeline/transform/weekly_rideshare.py`](../../pipeline/transform/weekly_rideshare.py)

### Checklist

- [ ] Write a Python script to apply transformations
- [ ] Write a transform step in `pipeline/Makefile`
- [ ] Run the transform step to verify that it works

## Load a Dataset

After transformation, create a schema and insert the data into our database.

For more information, read the load section in the guide on how to [add a new dataset](new_dataset.md#load).

### Examples

- Loads rideshare data into the database: [`pipeline/load/rideshare.sql`](../../pipeline/load/rideshare.sql)

### Checklist

- [ ] Write a SQL create table statement
- [ ] Write a load step in `pipeline/Makefile`
- [ ] Write a unit test in `pipeline/tests/` to test table contents
- [ ] Reload the database to verify that it works

## Implement a Metric

Calculate information using data in our database, before publishing a metric.

For more information, read the logic section in the guide on how to [add a new endpoint](#new_endpoint.md#implement-logic).

### Examples

- Function to get median household income by community area: [`income()` in `api/metrics/community.py`](../../api/metrics/community.py)
- Class to get data about pooled rideshare trips: [`PooledTripMetrics` in `api/questions/pooled_trips.py`](../../api/questions/pooled_trips.py)

### Checklist

- [ ] Choose where to add your metric (usually in `api/metrics/` or `api/questions/`)
- [ ] Write the implementation of your metric as a class or function
- [ ] Write a unit test in the same directory as the implementation
- [ ] Run unit tests to verify that it works

## Publish a Metric

After implementing a metric, register it in the API and app so that visitors can request it.

For more information, read the app section in the guide on how to [add a new endpoint](#new_endpoint.md#add-metric-to-app).

### Examples

- Definition of metrics in API: [`supported_metrics` in `api/endpoints/community.py`](../../api/endpoints/community.py)
- Configuration of metrics in app: [`communityMetrics` in `app/site/metrics.js`](../../app/site/metrics.js)

### Checklist

- [ ] Add the metric to an endpoint that serves data in `api/endpoints/`
- [ ] Add a configuration record for the metric in `app/site/metrics.js`
- [ ] Run the app and server, then request the metric in the app to verify that it works

## Add an Endpoint

Add a route to the API to serve a response.

For more information, read the API section in the guide on how to [add a new endpoint](#new_endpoint.md#add-to-api).

### Examples

- Endpoint to get data for timeline view: [`timeline_metrics()` in `api/endpoints/timeline.py`](../../api/endpoints/timeline.py)
- Endpoint to get data about pooled rideshare trips: [`pooled_trips()` in `api/endpoints/question.py`](../../api/endpoints/question.py)

### Checklist

- [ ] Choose which blueprint to add your metric to in `api/endpoints/`
- [ ] Add a new route to the blueprint
- [ ] Send a request to the endpoint to verify that it works

## Add a Component

Create a view to define a part of a page in the app.

For more information, read the component section in the guide on how to [add a new question](#new_question.md#implement-frontend-component).

### Examples

- Question about pooled rideshare trips: [`app/components/questions/PooledTrips.js`](../../app/components/questions/PooledTrips.js)

### Checklist

- [ ] Create a React component in `app/components/`
- [ ] Structure the component with JSX (similar to HTML)
- [ ] Style the component with CSS in `app/styles/app.css`
- [ ] Write helper functions to handle data and interactions
- [ ] Import other libraries you might use in the new component
- [ ] Import the new component in the component of the page where it will be used
- [ ] Run the app and try out a page that uses the component (possibly record a screencast)
