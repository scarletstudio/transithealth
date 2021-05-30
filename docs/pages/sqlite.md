# SQLite

## Contents

- [Write Queries](#write-queries)
- [Create Tables](#create-table)
- [Command Line Interface](#command-line-interface)

## Write Queries

Coming soon...

## Create Tables

The main purpose of our offline pipeline is to process datasets and load them into a SQLite database that the backend API can query. Use these resources for help with creating database tables.

For more information, check out these external tutorials for creating tables in SQLite:

- [Create Table Statements](https://www.sqlitetutorial.net/sqlite-create-table/)
- Look under the "SQLite Data Definition" section of the right-hand sidebar for more features to use when creating tables

### Data Types

The SQLite Tutorial on [Data Types](https://www.sqlitetutorial.net/sqlite-data-types/) explains the main types you can choose from.

### Indexes

An index helps keep track of rows based on their values. Adding indexes for frequently-used columns can speed up filtering, sorting, and joining.

To learn more about indexes in SQLite, read [this tutorial from SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-index/).

## Command Line Interface

The `sqlite3` command line interface allows you to check a database an run queries from your terminal.

[The official SQLite guide](https://sqlite.org/cli.html) explains more commands you can use with the `sqlite3` CLI.

- CLI commands (which start with `.`) do not need a semicolon.
- SQL queries (like `SELECT`) can be written over multiple lines, so a semicolon is needed to signal the end of a query and run it.

### Example Usage

Run these commands in your terminal:

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
# End the session
.exit
```
