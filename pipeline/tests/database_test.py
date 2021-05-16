import sqlite3
from pipeline.utils.testing import DatabaseTestHelper


"""
Test Fixtures
"""

DATABASE_PATH = "pipeline/database.db"

# Connect to database with read-only permissions
con = sqlite3.connect(DATABASE_PATH, uri=True, check_same_thread=False)
# Create test helper with access to the database
test = DatabaseTestHelper(con)


"""
Test Cases
"""

def test_table_counts():
    test.assert_table_count("community_area", 77)
    test.assert_table_count("population", 770)
    test.assert_table_count("covid_spread", 13375)
    test.assert_table_count("rideshare", 3692997)

def test_population():
    years_2010_to_2019 = list(range(2010, 2020, 1))
    test.assert_distinct_values("population", "period_end_year", years_2010_to_2019)
    test.assert_distinct_values("population", "segment", ["all"])

def test_rideshare_pooled_trips():
    cur = con.cursor()
    query = """
        SELECT count(1) as count
        FROM rideshare
        WHERE
            n_trips < n_trips_pooled_authorized
            OR n_trips_pooled_authorized < n_trips_pooled
    """
    cur.execute(query)
    count = cur.fetchone()[0]
    msg = "Table `rideshare` should have no records with more pooled trips than total trips."
    assert count == 0, msg
