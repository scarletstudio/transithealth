"""
Database utility functions.
"""


def is_valid_table_name(cur, table_name):
    """
    Checks whether a name is for a table in the database.
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


def rows_to_dicts(cur, rows):
    """
    Converts cursor result to a list of dicts rather than list of tuples.
    Args:
        cur: sqlite3 database cursor object
        rows (list<tuple>): output of cursor fetch
    Returns:
        List of dicts where each key is a column name
    """
    cols = [col[0] for col in cur.description]
    return [ dict(zip(cols, vals)) for vals in rows ]
