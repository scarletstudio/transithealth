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
FLASK_APP=api/server.py FLASK_DEBUG=1 FLASK_ENV=development flask run
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

The first time you add a new endpoint, we recommend you do it over two separate pull requests (PRs):

- PR#1 to implement logic with unit tests
- PR#2 to add the logic to the API

This makes it easier for your reviewer to follow the changes you are making. In the future, or if you feel the changes make more sense together, you can do all or some of those steps in a single pull request.

After you add a new endpoint, the frontend can send requests to use it. See [this guide](new_question.md) for instructions on how to add new features to the frontend that use API requests.

Remember to [keep your branch updated](git.md#update-your-branch)!

## Instructions

There are two main steps to add a new endpoint to our backend API:

1. Implement Logic
    - Choose a module for the logic and tests (probably either `metrics` or `questions`)
    - Write a method or class with methods
    - Write unit tests
2. Add to API
    - Choose a blueprint to add the endpoints to
    - Specify the endpoint path, parameters, verb(s) and handle the request/response/errors
    - Test the endpoint by sending a request from your browser, terminal, or a specialized tool

### 1. Implement Logic

Most likely, your logic will go in one of these two modules, in their respective subdirectories:

- `api/metrics/` contains logic for the TransitHealth Data Explorer (e.g., timeline view, community view)
- `api/questions/` contains logic for TransitHealth Questions (data vignettes that each engineer creates)

In this guide, we will review an example from the `metrics` module. An example from the `questions` module will be covered in [the guide for adding new questions](new_question.md).

#### A. Implementation

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
        """.format(year=year)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    ...
```

- This metric is a method in the `CommunityMetrics` class: a class used to return data for the community view in the Data Explorer.
- The constructor for the class accepts one argument: a connection to the `sqlite3` database, which the metric method can access via the instance variable `self.con`.
- ...

#### B. Test

...

### 2. Add to API

...
