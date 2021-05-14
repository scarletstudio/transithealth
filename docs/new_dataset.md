# Adding a New Dataset

This guide walks you through how to add a new dataset to the offline pipeline.

## Contents

- [Tips](#tips)
    - [Terminal Tips](#terminal-tips)
    - [Related Docs](#related-docs)
    - [Questions to Consider](#questions-to-consider)
    - [Pull Requests](#pull-requests)
- [Instructions](#instructions)
    - [1. Extract](#1-extract)
    - [2. Transform](#2-transform)
    - [3. Load](#3-load)

## Tips

### Terminal Tips

All file paths in the offline pipeline are relative to the `pipeline/` directory. When working on the offline pipeline, it is recommended that you enter the `pipeline/` folder:

```bash
cd pipeline
```

You can run any `make` command from this folder by typing:

```bash
make NAME_OF_TARGET
```

### Related Docs

These docs make help you while going through this guide:

- [Extract, Transform, and Load (ETL)](etl.md)
- [Makefiles](makefiles.md)
- [Socrata Query Language (SoQL)](soql.md)
- [Common Data Transformations](transformations.md)
- [Creating SQLite Tables](create_table.md)

### Questions to Consider

Besides coding, you might get stuck on questions about the product and datasets. These are good questions to review with your mentor, to check your understanding and ask for advice:

- Why do we want to include this dataset?
- Does the data source contain the information we need? Do we need to join it with other datasets?
- What are some of the limitations of the dataset or things to keep in mind when using it?
- What steps are needed to transform this data from its current state to the state we want?

### Pull Requests

The first time you add a new dataset, we recommend you do it over three separate pull requests:

- PR#1 to extract data
- PR#2 to transform data
- PR#3 to load data

This makes it easier for your reviewer to follow the changes you are making. In the future, or if you feel the changes make more sense together, you can do all or some of those steps in a single pull request.

Remember to [keep your branch updated](git.md#update-your-branch)!

## Instructions

There are three steps to add a new dataset to our offline pipeline:

1. Extract data from external sources
    - Write the code to extact a dataset
    - Add the extract step to `Makefile`
    - Run the extract step to check if it worked
2. Transform data into the desired format
    - Write the code to transform a dataset
    - Add the transform step to `Makefile`
    - Run the transform step to check if it worked
3. Load data into the database
    - Write a SQLite schema for the new table
    - Add the load step to `Makefile`
    - Run the transform step to check if it worked

For example, here is how the rideshare dataset fits into the offline pipeline:

![ETL diagram showing the steps to make the rideshare dataset](images/etl_graph_rideshare.png)

## 1. Extract

- Code used to extract data should go in the `pipeline/extract/` directory.
- Data produced by extract steps should go in the `pipeline/data/extracted` folder.

There are three external sources we extract data from:

- A. [Chicago Data Portal](https://data.cityofchicago.org/)
- B. [Chicago Health Atlas API](https://chicagohealthatlas.org/api/v1/)
- C. Raw URL

Figure out where the dataset you want to extract comes from and read the corresponding subsection.

### A. Extract from the Chicago Data Portal

The Python script `pipeline/extract/from_data_portal.py` helps you extract data from the data portal by writing a SoQL query.

- Find the dataset you want to extract from [the data portal](https://data.cityofchicago.org/)
- Get the JSON URL for the dataset
    - Find the API button in the top-right corner, select the JSON endpoint, then click copy

![Screenshot showing how to find the JSON URL for a data portal dataset](images/data_portal_json_url.png)

- Write a SoQL query to get the data you want
    - Read [Socrata Query Language (SoQL)](soql.md) for a guide on how to write and run queries
- Write a `Makefile` step in the extract section

An example of a dataset extracted from the data portal is the rideshare data.

This is the SoQL query to get the rideshare data from the data portal dataset:

```sql
SELECT
    date_trunc_ymd(trip_start_timestamp) as ymd,
    pickup_community_area,
    dropoff_community_area,
    count(1) as n_trips
GROUP BY ymd, pickup_community_area, dropoff_community_area
LIMIT 190000000
```

Usually, we don't want to do any transformation in the extract step, but the rideshare trips dataset has over 190 million rows, so it would take too long to download the un-aggregated version. This query gets the total number of trips for each day, pickup community area, and dropoff community area.

This is the `make` step for extracting the rideshare data from the data portal:

```make
PORTAL_RIDESHARES := https://data.cityofchicago.org/resource/m6dm-c72p.json

data/extracted/daily_rideshare.csv:
    python3 extract/from_data_portal.py \
        --json_url="$(PORTAL_RIDESHARES)" \
        --soql_file="extract/daily_rideshare.sql" \
        --output_file="data/extracted/daily_rideshare.csv"
```

To use the `extract/from_data_portal.py` script, your step should specify the following information:

- Output file path, as both the `make` target and as a CLI flag, e.g. `data/extracted/daily_rideshare.csv`
- Data portal JSON URL, defined as a variable at the top of the `Makefile`
- SoQL query file path, e.g. `extract/daily_rideshare.sql`

Usually, extract steps don't depend on other `make` steps.

### B. Extract from the Chicago Health Atlas API

We use the Python `requests` module to make requests to an API. Create a new script under the `pipeline/extract/` directory.

An example of a dataset extracted from an API is the demography data. You can refer to `pipeline/extract/demography.py` as an example of how to make a request for every community area. Here is an example of the code:

```python
import requests

API = os.environ.get("CHICAGO_HEALTH_ATLAS_API")

slug = "bridgeport"
r = requests.get(f"{API}/place/demography/{slug}")
data = r.json()
print(data)
```

The API URL is set as an environment variable by `Makefile`. Then we make a `GET` request to the endpoint for a specific community area based on its slug name. Then we get the response data as JSON and save the information we want.

This is the `make` step for extracting the demography data from the Chicago Health Atlas API:

```make
data/extracted/demography.csv: data/transformed/community_area.csv
    python3 extract/demography.py \
        --areas_file="data/transformed/community_area.csv" \
        --output_file="data/extracted/demography.csv"
```

This is an example of an extract step that depends on another `make` step. In fact, it depends on a transformed dataset.

### C. Extract from a Raw URL

An example of a dataset extracted from a raw URL is the ZIP code to community area equivalency file. We download it using `curl`. This is its `make` step:

```make
ZIP_CODE_TO_COMMUNITY_AREA_URL := https://docs.google.com/spreadsheets/d/1oHZy7sDlpZmCvymCg0mcd_bDBj-tn8oorsOmuo8odZI/export?format=csv&gid=0

data/extracted/zip_code_to_community_area.csv:
    curl -J -L "$(ZIP_CODE_TO_COMMUNITY_AREA_URL)" \
        --create-dirs -o "data/extracted/zip_code_to_community_area.csv"
```

The `curl` command has several CLI flags:

- `-L` tells curl to follow redirects until it reaches a file
- `-J` tells curl to get the file type from the file content instead of the URL
- `--create-dirs` tells curl to make the output folder if it doesn't exist
- `-o` tells curl the output path to save the downloaded file to

## 2. Transform

- Code used to transform data should go in the `pipeline/transform/` directory.
- Data produced by transform steps should go in the `pipeline/data/transformed` folder.

Write a Python script that takes in data and outputs a `.csv` file with the columns and rows you want to have in the database.

Here are some of the tasks you might want to do during the transform step:

- Add a column that is a calculation based on existing columns
- Extract date information (like week and year)
- Rename columns
- Remove columns
- Sort values

Check out the [Common Data Transformations](transformations.md) guide for code blocks and examples of how to code these transformations.

It's okay to leave columns in the dataset even if they are not needed for the final database table. Keeping those columns can help you investigate the output file.

This is the `make` step for transforming the rideshare data:

```make
data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
    python3 transform/daily_rideshare.py \
        --input_file="data/extracted/daily_rideshare.csv" \
        --output_file="data/transformed/rideshare.csv"
```

Notice that it includes:

- The input file, both as a `make` dependency and as a CLI flag
- The output file, both as a `make` target and a CLI flag

## 3. Load

- Code used to load tables should go in the `pipeline/load/` directory.
- When a table is successfully loaded, it will write a metadata file to the `pipeline/data/loaded/` folder.
- New tables should be added to the common `make` command that lists all the tables that will be loaded into the database.

By this point, your data should be transformed into the format needed for the final table. The extract step should consist only of running a SQL create table statement to define the schema and table and then loading data into that table.

### Create a Schema

Here is the SQL create table statement for the rideshare table:

```sql
DROP TABLE IF EXISTS rideshare;
CREATE TABLE rideshare (
    ymd TEXT,
    week TEXT,
    pickup_community_area INTEGER,
    dropoff_community_area INTEGER,
    n_trips INTEGER
);
```

For more information, check out these external tutorials for creating tables in SQLite:

- [Create Table Statements](https://www.sqlitetutorial.net/sqlite-create-table/)
- [Data Types](https://www.sqlitetutorial.net/sqlite-data-types/)
- Look under the "SQLite Data Definition" section of the right-hand sidebar for more features to use when creating tables

This is the `make` step to load the rideshare table into the database:

```make
data/loaded/rideshare.txt: data/transformed/rideshare.csv
    python3 load/create_table.py \
        --database="database.db" \
        --input_file="data/transformed/rideshare.csv" \
        --create_sql="load/rideshare.sql" \
        --table_name="rideshare"
```

The `pipeline/load/create_table.py` script helps you load a table into the database. You need to specify:

- The input file, both as a `make` dependency and as a CLI flag
- The file path for the database
- The file path for the SQL create table statement
- The name of the table (should match the name in the create table statement)

This script will load the input file into the database using the SQL schema defined. Any columns in the input file that are not in the schema will not be loaded into the table.

The target (in this case `data/loaded/rideshare.txt`) will be a metadata file that contains the number of rows and columns in the loaded table, which also tells `make` that those tables do not need to be remade. If you want to reload just one table, delete its metadata file under `pipeline/data/loaded/` and then run `make reload`.

### Add Your Table

The `make` command that creates the database has a dependency on a file called `data/loaded/all_tables.txt`. The `make` step for that dependency runs all the `make` targets for tables to load. Add the `make` target for your new table to this list of commands.

```make
database.db: data/loaded/all_tables.txt

data/loaded/all_tables.txt:
    make data/loaded/community_area.txt
    make data/loaded/demography.txt
    make data/loaded/covid_spread.txt
    make data/loaded/rideshare.txt
    touch "data/loaded/all_tables.txt"
```

For convenience, we try to order the commands by increasing table size, so that if a step fails, we don't waste much time. In this example, the `community_area` table (77 rows) is the smallest and the `rideshare` table (3.6 million rows) is the largest.

After all tables are loaded into the database, another make target runs to compress the database.

When all your steps are added, run this command:

```bash
make reload
```

### Verify Your Table

This will create both the compressed and non-compressed database. You can check if your table was added to the database by launching the `sqlite3` command line interface. Run these commands:

```bash
# Change to the pipeline/ directory if you are not already there
cd pipeline
# Start an interactive sqlite3 session in your terminal
sqlite3
# Connect to our database
.open database.db
# Set sqlite3 to show column headers with output
.headers on
# List all the tables
.tables
# Show the schema of a table
.schema TABLE_NAME
# Show all columns for the first five rows of a table
select * from TABLE_NAME limit 5;
```

[The official SQLite guide](https://sqlite.org/cli.html) explains more commands you can use with the `sqlite3` CLI.

You can also use a Jupyter notebook to write SQL queries and inspect the data.

When you are happy with the loaded dataset, commit your changes and open a pull request. The database files are not human-readable, so any pull request that changes the compressed database files requires an explanation of what should be happening, for example you might write something like this:

> This PR should add a new table called X and not affect any other tables.

Include some information in your pull request that lets the reviewer know that you checked the loaded table, for example you could copy the output of your `sqlite3` CLI session or share results from your Jupyter notebook. 

Congratulations on loading a new dataset! All the other engineers will now be able to use the table you have added.
