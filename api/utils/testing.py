"""
Testing utility functions.
"""

import pandas as pd
import sqlite3


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
    for table_name, rows in tables.items():
        df = pd.DataFrame(rows)
        df.to_sql("rideshare", con, if_exists="replace", index=False)
    return con, cur
