# Add a New Question

This guide walks you through how to add a new question to the backend API and frontend app.

## Contents

- [Tips](#tips)
    - [Terminology](#terminology)
    - [Terminal Tips](#terminal-tips)
    - [Questions to Consider](#questions-to-consider)
    - [Pull Requests](#pull-requests)
- [Instructions](#instructions)
    - [1. Create Endpoints](#1-create-endpoints)
    - [2. Add Site Entry](#2-add-site-entry)
    - [3. Implement Frontend Component](#2-implement-frontend-component)

## Tips

### Terminology

- **TransitHealth Questions:** a part of the website with pages that explore specific topics related to public transit and public health in more depth than the Data Explorer.
    - Each engineer will get to choose a topic that interests them and create their own question to add to the website.
- **React Component:** code written in JavaScript that determines how to render a part of the frontend app.
- **Slug:** a string with no spaces that is safe to use for URLs and file paths.
- **Camel Case:** a string with no spaces where words start with uppercase letters (often used for class names, component names, and variable names).
- **Snake Case:** a string with no spaces where spaces are replaced with underscores (often used for internal file paths).
- **Kebab Case:** a string with no spaces where spaces are replaced with dashes (often used for URLs).

### Terminal Tips

For commands to use when developing endpoints in the backend API, check out [the tips in this guide](new_endpoint.md#terminal-tips).

You can work on the frontend app from the `app/` directory. Below are common terminal commands you will use.

Before you start working, enter the `app/` directory:

```bash
cd app
```

To start the frontend app locally:

```bash
yarn dev
```

Then navigate to `http://localhost:8001/transithealth` in your browser.

If you need to run a different part of the project, return to the top-level directory:

```bash
cd ..
```

### Questions to Consider

Here are some good questions to review with your mentor, to check your understanding and ask for advice:

- Why do visitors want to know about the topic of this question?
    - Can we offer insight into this question with the data we have?
    - What are some of the limitations of the data for this question or things to keep in mind when interpreting the results?
- What steps are needed to transform the data into the views needed for the question? What will be done in the frontend, backend, and offline pipelines?
- What views do you want to use to represent the data? (Data visualizations, tables, text, videos, audio?)

### Pull Requests

Before you add a new question, make sure you have the necessary data. See [this guide](new_dataset.md) for instructions on how to add new datasets in the offline pipeline.

The first time you add a new question, we recommend you do it over three separate pull requests (PRs):

- PR#1 to implement backend endpoints with unit tests
- PR#2 to add a site entry to the frontend for your question
    - When merged, this will make a preview of your question appear on the Questions page of the website
- PR#3 to implement the frontend component for your question

This makes it easier for your reviewer to follow the changes you are making. In the future, or if you feel the changes make more sense together, you can do all or some of those steps in a single pull request.

Remember to [keep your branch updated](git.md#update-your-branch)!

## Instructions

There are three main steps to add a question to the project:

1. Create supporting endpoints to the backend API
2. Add an entry for your question in `app/site/questions.js`
3. Implement a frontend component to display your question in `app/components/questions/`

This guide will walk you through [the Pooled Trips question](https://scarletstudio.github.io/transithealth/questions/pooled-trips) as an example.

### 1. Create Endpoints

For more instructions on this step, follow the [Add a New Endpoint guide](new_endpoint.md).

Implementations and tests for questions will go in the `questions` module instead of the `metrics` module. But they can import methods from any module.

For the backend implementation of the Pooled Trips question:

- The implementation is in the file `api/questions/pooled_trips.py`
- The tests are in the file `api/questions/pooled_trips_test.py`
- Throughout the API, we can import from its submodule like this:

```python
from api.questions.pooled_trips import PooledTripMetrics
```

Refer to this implementation and tests as an idea for how to write the code for your own use case.

The [testing guide](testing.md) can help you write better tests for your implementation.

- Choose a name to refer to the topic of your question throughout the codebase
- Create your implementation in `api/questions/{NAME_FOR_YOUR_TOPIC}.py`
- Write your unit tests in `api/questions/{NAME_FOR_YOUR_TOPIC}_test.py`
- Add your endpoints to the blueprint in `api/endpoints/question.py`

By convention, your file names should be in snake case, since it is an internal file path.

### 2. Add Site Entry

Open the file `app/site/questions.js`. This file provides the frontend app with metadata about all the questions.

- The variable `questionsParams` contains the entries for each question.
- The variable `questionComponents` tells the site which React component to render for a question.

Based on the name you chose for the topic of your question, create a URL slug. This will be the unique key to identify your question.

Add an entry to `questionsParams` like this:

```javascript
export const questionsParams = {
  ...
  "pooled-trips": {
    title: "How has stopping pooled rideshare trips affected communities?",
    author: "Vinesh Kannan",
    component: "pooled-trips",
    description: "In a pooled trip, riders pay a lower fare by splitting a ride with strangers. In March 2020, ridesharing platforms stopped allowing pooled trips due to social distancing. What has been the impact of this decision?"
  },
```

- Use your question's URL slug as the key (`"pooled-trips"`)
- Write a `title` for your question
- Add your name as `author`
- Write a `description` as preview text for your question
- Specify a key for `component` that will be used to look up a React component from `questionComponents`
    - For now, you can use `"sample"` as the `component`, which is a default for new questions

By convention, your question slug should be in kebab case, since it will be used for a URL.

When this change is deployed, your question will appear in the list on the Questions page of the website. If visitors go to the page for your question, they will see the `Sample` component. You can open `app/components/questions/Sample.js` to read the code for this default component.

Your question page will be at `/transithealth/questions/{your-question-slug}` on the website.

### 3. Implement Frontend Component

Create a file named `app/components/questions/{YourComponentName}.js`.

Open `app/site/questions.js` and add an entry to `questionComponents` for your new component:

```javascript
import YourComponentName from '../components/questions/YourComponentName'

export const questionComponents = {
  "sample": Sample,
  ...
  "your-component-name": YourComponentName
};
```

Then update the `component` field of your question entry in `questionParams` to the key for your component.

By convention, the name of your component and its file should be in camel case since it is a React component name. The key for your component in the question entry should be in kebab case to match the others.

The component that renders the content of the Pooled Trips question is in the file `app/components/questions/PooledTrips.js`. The file has four main sections:

1. Imports
2. Constants
3. Helper Functions
4. React Component Definition

```JSX
// 1. Imports
import { useState, useEffect } from 'react'
// Omitted: more imports

// 2. Constants
const METRIC_POOLED_TRIP_RATE = "pooled_trip_rate_before";
const CITY_PART_COLOR = {
  "Central": "#332288",
  "Far North Side": "#1978AD",
  "Far Southeast Side": "#117733",
  "Far Southwest Side": "#44AA99",
  "North Side": "#88CCEE",
  "Northwest Side": "#DCA139",
  "South Side": "#CC6677",
  "Southwest Side": "#AA4499",
  "West Side": "#882255",
};
// Omitted: more constants

// 3. Helper Functions
async function fetchAllData() {
  // This sends the request to an API endpoint
  const req = await fetch(`${process.env.NEXT_PUBLIC_API}/question/pooled_trips`);
  const res = await req.json();
  return res.metrics;
}

// Omitted: function bodies for helper functions
function augmentMetrics(metrics) { }
function getPooledTripsRateByArea(metrics) { }
function QuestionBarChart({ data }) { }

// 4. React Component Definition
export default function PooledTrips(props) {
  const [ pooledTripRate, setPooledTripRate ] = useState([]);
  // Omitted: more code to use React component state

  // Simplified and omitted: more code to get data and update component state
  useEffect(() => {

    async function getData() {
      const rawMetrics = await fetchAllData();
      const metrics = augmentMetrics(rawMetrics);
      const pooledTripRateData = getPooledTripsRateByArea(metrics);
      setPooledTripRate(pooledTripRateData);
    }

    getData();
  }, []);

  // Omitted: more computations before rendering the component
  const detailForPooledRate = (...);

  // HTML/JSX for rendering the component
  return (
    <div className="QuestionPooledTrips">
      <div className="center medium-width">
        <h2>Pooled Trip Rates by Community Area</h2>
        <p>This chart shows the percentage of all rides that were pooled in the year before COVID, by community area where the rider was picked up.</p>
      </div>
      <QuestionBarChart data={pooledTripRate} />
      {detailForPooledRate}
      <br />
    </div>
  );
};
```
