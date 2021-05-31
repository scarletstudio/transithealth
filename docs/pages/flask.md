# Flask

Flask is a Python-based framework for creating RESTful APIs ([official documentation](https://flask.palletsprojects.com/en/2.0.x/)). We use it for the TransitHealth backend API.

## Terminology

For a refresher on concepts related to RESTful APIs, check out [the terminology section](new_endpoint.md#terminology) of the guide on adding new endpoints to our backend API.

## Common Imports

We import many classes and methods from the Flask module to run our API server. This section explains what they do.

As much as possible, we try to keep our implementation free of Flask-specific logic. That means you should only find Flask imports in `api/server.py` and the `api/endpoints/` folder.

Here are some common imports from the Flask module:

```python
from flask import (
    Flask,
    Blueprint,
    jsonify,
    render_template,
    request
)
```

### Flask Class

`Flask` is a class for a Flask application. We instantiate the a Flask object like this:

```python
app = Flask(__name__)
```

This `app` is responsible for processes requests to server endpoints.

### Blueprint Class

`Blueprint` is a class that desribes how to configure part of a Flask application. We use blueprints as groups for related-endpoints. Blueprints can be instantiated and used in a very similar way to Flask applications:

```python
app = Blueprint('community', __name__)
```

### `jsonify` Method

The `jsonify` method converts a Python object into JSON (JavaScript Object Notation), which is the format that data endpoints should return.

For example, this endpoint from `api/endpoints/index.py` gets the number of rows in a given table and then returns the response. The Python object is a dictionary. The `jsonify` method converts it to a JSON object that the client can read as a JavaScript object.

```python
@app.route("/count/<table_name>")
def count_table_name(table_name):
    """
    Count the number of rows in a given table.
    """
    count = # get the number of rows in the requested table
    return jsonify({ "count": count })
```

The client will receive JSON like this:

```json
{
    "count": 77
}
```

### `render_template` Method

We currently do not use this method in our project.

The `render_template` method reads an HTML template from the server-side, possibly filling in the template with values specified in the server-side logic, and then returns an HTML response so the client can load the new webpage. Our frontend is separate from our backend, so we do not currently use Flask HTML templates.

## Alternatives

Other software development teams that develop RESTful APIs in Python might use these tools. You can use your knowledge of Flask as a reference point to learn more about them.

- [Django](https://www.djangoproject.com)
- [Bottle](https://bottlepy.org/docs/dev)
- [FastAPI](https://fastapi.tiangolo.com)
- [Sanic](https://sanicframework.org/en) (Note: Sanic cannot be deployed on Windows machines.)
