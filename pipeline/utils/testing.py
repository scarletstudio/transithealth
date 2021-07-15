"""
Testing utility functions for testing the real database.
"""

class DatabaseTestHelper():
    """
    Class with access to database connection to help test database state.
    """

    def __init__(self, con):
        self.con = con

    def assert_table_count(self, table, expected_count):
        """
        Helper method to check the size of a table.
        Note: Unsafely injects table name into query.
        """
        cur = self.con.cursor()
        cur.execute("""
            SELECT count(1) AS count
            FROM {table};
        """.format(table=table))
        actual_count = cur.fetchone()[0]
        msg = f"Table `{table}` should have {expected_count} rows, not {actual_count} rows."
        assert actual_count == expected_count, msg

    def assert_distinct_values(self, table, column, expected_values):
        """
        Helper method to check the distinct values of a table column.
        Note: Unsafely injects table and column name into query.
        """
        cur = self.con.cursor()
        cur.execute("""
            SELECT DISTINCT
                {column} AS value
            FROM {table}
            ORDER BY value ASC;
        """.format(table=table, column=column))
        actual_values = set([ row[0] for row in cur.fetchall()])
        msg = f"Distinct values for column `{column}` in table `{table}` do not match the expected values."
        assert actual_values == expected_values, msg
