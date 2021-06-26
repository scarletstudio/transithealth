# Add a New Endpoint

This guide walks you through how to add a new endpoint to the backend API.

## Contents

- [Tips](#tips)
    - [Terminology](#terminology)
    - [Terminal Tips](#terminal-tips)
    - [Questions to Consider](#questions-to-consider)
    - [Pull Requests](#pull-requests)
- [Instructions](#instructions)
    - [1. Implement Logic](#1-implement-logic)
    - [2. Add to API](#2-add-to-api)
    - [3. Add Metric to App](#3-add-metric-to-app)

## Tips

### Terminology

Here are some web concepts that are helpful to know:

- **Client:** a system that requests data and receives a response. In this project, the client is a browser that visits the TransitHealth website.
- **Server:** a system that responds to requests. In this project, our Flask app is the server that sends data back to the client.
- **CRUD:** stands for Create, Read, Update, Delete, the four main operations that a server might perform.
- **HTTP:** a protocol for transmitting documents (like web pages and data) over the internet, usually between browsers and servers.
- **HTTP Verbs:** short names that describe what kind of action a server will perform.
    - There are four main HTTP verbs and they correspond to parts of CRUD:
        - `POST`: create some data
        - `GET`: read some data
        - `PUT`: update some data
        - `DELETE`: delete some data

Those concepts can help you understand these concepts about designing server-side functionality:

- **API:** Stands for Application Programming Interface.
    - An API is any description that specifies a program's functionality, inputs, and outputs.
    - For example, a class has an API that tells you what methods, parameters, and return values it supports.
    - A server can also have an API that tells you what functionality, requests, and responses it supports.
- **Endpoint:** a path that helps organize a server's functionality.
    - HTTP verbs describe what an endpoint can do, for example: `GET /api/population` might be an endpoint to get population data.
    - The path may include input parameters, for example: `GET /api/population/:area` might get the population data for the community area matching the given id `:area`.
- **REST:** Stands for REpresentational State Transfer.
    - REST is a style for communication between clients and servers.
    - Systems that follow REST style are called RESTful.
    - Usually when we say API in this project, we mean a RESTful API.
    - If the server has a RESTful API, the client sends the server a request with this information:
        - **Header:** specifies the request parameters
        - **Body:** includes additional data
        - **Endpoint:** gives the path to the server-side functionality
        - **Verb:** an HTTP verb that describes the operation
    - Then the client receives a response with either the results or an error.

And with those concepts, you can understand these that are specific to our server in this project:

- **Flask:** a Python-based framework for creating RESTful APIs ([official documentation](https://flask.palletsprojects.com/en/2.0.x/)).
- **Blueprint:** a group of endpoints in an API built with Flask, organized in the same file.
    - Grouping related endpoints helps organize a server with a lot of functionality and allows engineers to develop the API with fewer merge conflicts.
- **Module:** a group of functions, classes, tests, and other objects in a Python project, organized in the same folder.
    - Grouping related code helps organize Python code with a lot of functionality and allows engineers to develop the project with fewer merge conflicts.
- **Pytest:** a Python library for testing Python programs.
- **Unit Tests:** code that runs one part of a system with given inputs to verify that it returns the correct outputs.
- **Functional Tests:** code that runs an entire system or multiple systems to verify that it does what it should (also called Integration Tests).

### Terminal Tips

You can work on the backend API from the root directory. Below are common terminal commands you will use.

Before you start working, remember to activate your virtual environment:

```bash
source .venv/bin/activate
```

To start the API server locally:

```bash
./api/dev.sh
```

To run all Python tests in the repository:

```bash
pytest
```

### Questions to Consider

Here are some good questions to review with your mentor, to check your understanding and ask for advice:

- How will this endpoint be used by the frontend?
    - What inputs, if any, will be specified in the request?
    - What outputs will be needed in the response?
- What are the important cases in the logic to test?
    - What is the main functionality?
    - What is likely to break as the codebase changes in the future?
- What do you notice about other endpoints already implemented?
    - In what ways will your endpoint be similar to the existing endpoints? In what ways will it be different?
- How performant is your endpoint?
    - How often will the server receive requests for this endpoint?
    - How long does it take to complete requests for this endpoint? (Especially in the worst-case scenario)
    - How much memory is used to complete requests for this endpoint? (Especially in the worst-case scenario)
    - Does the performance of the endpoint need to be improved for the sake of the user or the system?
    - Should the performance issues be addressed in just your endpoint or system-wide?

### Pull Requests

Before you add a new endpoint, make sure you have the necessary data. See [this guide](new_dataset.md) for instructions on how to add new datasets in the offline pipeline.

The first time you add a new endpoint, we recommend you do it over three separate pull requests (PRs):

- PR#1 to implement logic with unit tests
- PR#2 to add the logic to the API
- PR#3 to add the metric to the app

This makes it easier for your reviewer to follow the changes you are making. In the future, or if you feel the changes make more sense together, you can do all or some of those steps in a single pull request.

After you add a new endpoint, the frontend can send requests to use it. See [this guide](new_question.md) for instructions on how to add new features to the frontend that use API requests.

Remember to [keep your branch updated](git.md#update-your-branch)!

## Instructions

There are two main steps to add a new endpoint to our backend API, plus a third step to add it to our frontend app:

1. Implement Logic
    - Choose a module for the logic and tests (probably either `metrics` or `questions`)
    - Write a method or class with methods
    - Write unit tests
2. Add to API
    - Choose a blueprint to add the endpoints to
    - Specify the endpoint path, parameters, verb(s) and handle the request/response/errors
    - Test the endpoint by sending a request from your browser, terminal, or a specialized tool
3. Add Metric to App
    - Update the config variables in `app/site/metrics.js`

### 1. Implement Logic

Most likely, your logic will go in one of these two modules, in their respective subdirectories:

- `api/metrics/` contains logic for the TransitHealth Data Explorer (e.g., Timeline View, Community View)
- `api/questions/` contains logic for TransitHealth Questions (data vignettes that each engineer creates)

In this guide, we will review an example from the `metrics` module. An example from the `questions` module will be covered in [the guide for adding new questions](new_question.md).

#### A. Metric Implementation

Below is the entire implementation for a metric that returns the median household income for each of the 77 community areas.

```python
from api.utils.database import rows_to_dicts


class CommunityMetrics:
    """
    Metrics for community area data.
    """

    def __init__(self, con):
        self.con = con

    ...

    def income(self, year, segment):
        """
        Returns the rounded income value for each community area.
        Args:
            year (int): period ending year to filter by
            segment (str): population segment to filter by
        """
        query = """
        SELECT
            area_number,
            CAST(value AS INTEGER) AS value
        FROM income
        WHERE period_end_year == {year}
        AND segment == "{segment}"
        """.format(year=year, segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    ...
```

- This metric is a method in the `CommunityMetrics` class: a class used to return data for the Community View in the Data Explorer.
- The constructor for the class accepts one argument: a connection to the `sqlite3` database, which the metric method can access via the instance variable `self.con`.
- The method takes two parameters: `year` and `segment`.
- The method creates a SQL query to return the income value for each community area, subject to the requested year and population segment.
- The data comes from the `income` table, which is described by the schema in this file: `pipeline/load/income.sql`.
- From the database connection, a cursor is created. The cursor is used to execute the query and fetch all the resulting rows.
- A helper method imported from the `api.utils.database` module is used to convert the rows from a list of tuples into a list of dictionaries.
- Each dictionary in the returned list has two keys: `"area_number"` and `"value"`, with values corresponding to the query result for each community area.

#### B. Metric Test

Below is the entire unit test for the implementation.

```python
import sys
sys.path.append("../")

from api.metrics.community import CommunityMetrics
from api.utils.testing import create_test_db

...

def test_income():
    income_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 13000
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 27000
        },
        {
            "area_number": 1,
            "period_end_year": 2010,
            "segment": "all",
            "value": 10000
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/income.sql"
        ],
        tables={
            "income": income_table
        }
    )

    metric = CommunityMetrics(con)

    assert metric.income(year=2019, segment="all") == [
        { "area_number": 1, "value": 13000 },
        { "area_number": 2, "value": 27000 }
    ], "Should have two results for 2019."

    assert metric.income(year=2010, segment="all") == [
        { "area_number": 1, "value": 10000 }
    ], "Should have one result for 2010."

    assert metric.income(year=2013, segment="all") == [], "Should have no results for 2013."
```

- The test file uses the `sys` module to go up one directory, so that it can import any module in the project.
- The unit test has three main parts:
    - The input: a test database with test values for the `income` table
    - The actual values: a `CommunityMetrics` object is instantiated with a connection to the test database in order to use its `income()` method
    - The expectations: each test case is checked by an **assertion** which compares the actual value to the correct result

To set up the input:

- A helper method from the `api.utils.testing` module is used to create a test database
- It takes a list of file paths of scripts to run, this will create the table schemas we will use
- It takes a dictionary where the keys are table names and the values are lists of dictionaries that hold the table rows, this will create test tables
- It returns a connection that we will need to give to the implementation
- A variable called `income_table` represents the test table data, in each value, the dictionary has keys for column names that map to row values

To compute the actual values:

- We run any code needed to set up the implementation
- We call the method with the given inputs (it gets the tables via the connection, while the year and segment come from the method parameters)
- The returned value is immediately compared to the expected value

To check the expectations:

- We write one `assert` statement per test case, which will pass if the condition is true
- We create a condition by comparing the actual value to the expected value
- The expected value is also a list of dictionaries, representing output rows
- After the condition, we specify a message as a string that specifies what the test case is checking
- If the test case fails, `pytest` will show us that message along with the difference between the actual and expected values

Some notes about the unit test:

- It may seem long in number of lines, but the test follows a clear pattern of input, actual value, and expectation, which helps us read and understand it
- It covers three different cases, which the test author chose based on what requirements and scenarios they felt were important
- The test uses different values for `year`, but not `segment`
    - Because, when this test was written, the only values in the `income` table were for the entire population (`segment="all"`)

### 2. Add to API

API endpoints are defined in the `endpoints` module, where each file specifies a blueprint.

#### A. Endpoint Implementation

Metrics added to `CommunityMetrics` are used in the endpoints defined in this file: `api/endpoints/community.py`.

Below is the blueprint, showing the parts of the code that use the `income()` implementation.

```python
from flask import Blueprint, jsonify, request
from api.metrics.community import CommunityMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to community areas.
    """

    app = Blueprint('community', __name__)
    
    metric = CommunityMetrics(con)

    supported_metrics = {
        ... # Omitted: definitions of other metrics
        "median_income_2010": lambda: metric.income(year=2010, segment="all"),
        "median_income_2019": lambda: metric.income(year=2019, segment="all"),
        ...
    }


    @app.route("/community/metrics", methods=["POST"])
    def community_metrics():
        """
        Returns the requested metrics by community area.
        """
        body = request.get_json()
        metric_list = body["metrics"] if "metrics" in body else []
        metric_fns = {
            metric_name: supported_metrics[metric_name]
            for metric_name in metric_list
            if metric_name in supported_metrics
        }
        metrics = metric.merge_metrics(metric_fns)
        return jsonify({ "metrics": metrics })

    return app

```

The file defines a method called `make_blueprint()` which is used in `api/server.py` to register these endpoints with the Flask API.

- The method takes an input parameter: a connection to the `sqlite3` database.
- The method returns a variable called `app` which is a Flask blueprint.
- The method instantiates a `CommunityMetrics` object to compute metrics.
- The method defines a dictionary called `supported_metrics` where keys are metric names and values are metric functions.
    - Python lambda functions are used so that metric functions that take multiple arguments can be turned into different methods that take no arguments.

Then, the method defines one endpoint for getting all supported community area metrics.

- A Python decorator function is used to turn the method `community_metrics()` into an endpoint with the path `POST /community/metrics`.
- Why is this endpoint `POST` and not `GET`, since it is only retrieving data?
    - `GET` requests cannot have a request body, they must send all their information in the request headers or URL parameters.
    - `POST` is sometimes used, not just for creating records, but for sending data via body.

This method executes whenever the server receives a request matching this endpoint:

- The endpoint method gets the request data from a variable called `request`, which is imported from Flask.
- It calls a method to convert the request body from JSON to a dictionary.
- It gets the list of requested metrics from the body.
- It uses a dictionary comprehension:
    - To filter the list of metrics to only those that are in the `supported_metrics` dictionary.
    - To return key value pairs where the key is the metric name and the value is the metric function.
- It calls the `merge_metrics()` method of the `CommunityMetrics` class which will run all the given metric functions and merge their results by community area.
- It uses `jsonify()` method imported from Flask to convert a dictionary to a JSON response to send back to the frontend.

#### B. Endpoint Test

Check out the guide on how to [inspect API requests](inspect_api_requests.md) to test if requests to your new endpoint work as expected.

### 3. Add Metric to App

The file `app/site/metrics.js` configures the metrics for the TransitHealth Data Explorer. This allows engineers to add new metrics to the app with minimal changes to the frontend.

You will mostly likely add your new metric to one of these two configs:

- `communityMetrics` specifies metrics for the Community View
- `weeklyMetrics` specifies metrics for the Timeline View

Add your metric like this:

```javascript
export const communityMetrics = {
  ...
  rideshare_pooled_trip_rate_2019: {
    name: "2019 Rideshare Pooled Trip Rate",
    units: "of trips",
    format: Formatter.percentWithNoDecimal,
    fullFormat: Formatter.percentWithOneDecimal,
  },
  ...
```

- Add the unique name to use as a key for your metric name. Replace any spaces in the key name with underscores (this is called snake case 🐍).
    - This should match the name you gave the metric on the server-side, so that the app can tell the API what metric to return.
- Give your metric a `name` that visitors will read when selecting it.
- Specify the `units` to display after a value for this metric (e.g. "29% of trips"). You can also use the empty string `""` for units.
- Specify the formatting method to use for the short version (`format`) and long version (`fullFormat`) of values for this metric.

The variable `Formatter` in this file specifies functions that take in a value for a metric and returns a formatted version.

- If the format you want is not present, you can add a new formatting function.
- Using format functions on the frontend allows us to return metric values unformatted (e.g., for pooled trip rates, we can return `0.2900014` and have it formatted to `29%`).

After adding your metric to the config, try out the site locally. Start your API in one terminal:

```bash
source .venv/bin/activate
./api/dev.sh
```

Then start the frontend in another terminal:

```bash
cd app
yarn dev
```

Go to [localhost:8001/transithealth/explorer](http://localhost:8001/transithealth/explorer) and pick the view your metric appears in. Select the metric and check if the feature works as expected. You can also take a screenshot of the result to include in your pull request, so you can show your reviewer that the change worked.

Congratulations! By now, you have added a feature to TransitHealth from end-to-end: contributing to the offline pipeline, backend API, and now having your feature show up in the frontend app.
