"""
Testing utility functions.
"""

import pandas as pd
import sqlite3


def is_valid_table_name(cur, table_name):
    """
    Checks whether a name is for a table in the database.
    Note: Copied from utils.database for use in testing, to avoid
    a circular dependency between tests and implementation.
    Args:
        cur: sqlite3 database cursor object
        table_name (str): name to check
    Returns:
        True if valid, False otherwise
    """
    query = """
        SELECT 1
        FROM sqlite_master
        WHERE type == 'table'
        AND name == ?
    """
    res = cur.execute(query, (table_name,))
    return res.fetchone() is not None

def create_test_db(scripts, tables):
    """
    Creates an in-memory SQLite database for testing.
    Args:
        scripts (list<str>): file paths of SQL scripts to run.
        tables (dict<list<dict>>): dictionary with keys as table names
            and values as lists of dictionaries that represent rows.
    Returns:
        Tuple of (con, cur) with SQLite connection and cursor objects.
    """
    con = sqlite3.connect(":memory:")
    cur = con.cursor()
    for script_path in scripts:
        with open(script_path) as script_file:
            raw_script = script_file.read()
            cur.executescript(raw_script)
            print(cur.description)
    for table_name, rows in tables.items():
        if not is_valid_table_name(cur, table_name):
            raise ValueError(f"Trying to insert values into table that does not exist: `{table_name}`")
        df = pd.DataFrame(rows)
        df.to_sql(table_name, con, schema=table_name, if_exists="replace", index=False)
    return con, cur
