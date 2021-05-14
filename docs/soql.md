# Socrata Query Language (SoQL)

SoQL (Socrata Query Language) is a special version of SQL that you can use to query any data portal that runs on Socrata. Chicago, Cook County, Illinois, and many other governments host their data on Socrata portals.

## More Resources

- [Website to run SoQL queries](https://vingkan.github.io/soql/)
- [Documentation of available SoQL functions](https://dev.socrata.com/docs/functions/)
- [W3Schools tutorial to learn SQL in general](https://www.w3schools.com/sql/)

## Notes

Some notes about SoQL that are different from SQL:

### One table at a time

SoQL only reads from one table at a time, so there is no `FROM` statement and no `JOIN` statements.

### Set a huge limit

SoQL are paginated by default, so to get all your results at once, you should set the `LIMIT` statement to be larger than the expected number of rows. For example, if you do a `GROUP BY`, it will definitely have the same number or less rows than the total number of rows in the dataset, so you can use a number larger than the number of total rows as your `LIMIT`.

### Get the JSON URL

To query a data portal dataset using SoQL, you need the JSON URL for the dataset API, not the URL of the dataset web page. To get the JSON URL, go to the dataset web page, find the API button in the top-right corner, select the JSON endpoint, then click copy. The screenshot below shows where to find this:

![Screenshot showing how to find the JSON URL for a data portal dataset](images/data_portal_json_url.png)

### Try out your queries

You can run SoQL queries using [this website](https://vingkan.github.io/soql/).

You can also follow this Python code block from the [Example Notebook](../notebooks/Example%20Notebook.ipynb):

```python
import pandas as pd
import requests

dataset_json_url = "https://data.cityofchicago.org/resource/m6dm-c72p.json"
query = """
SELECT
    pickup_community_area,
    trip_seconds / 60 as trip_minutes
LIMIT 5
"""
r = requests.get(dataset_json_url, params={"$query": query})
pd.DataFrame(r.json())
```