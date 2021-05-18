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
    test.assert_table_count("income", 770)
    test.assert_table_count("covid_spread", 13375)
    test.assert_table_count("rideshare", 3693108)

def test_population():
    years_2010_to_2019 = list(range(2010, 2020, 1))
    test.assert_distinct_values("population", "period_end_year", years_2010_to_2019)
    test.assert_distinct_values("population", "segment", ["all"])

def test_income():
    years_2010_to_2019 = list(range(2010, 2020, 1))
    test.assert_distinct_values("income", "period_end_year", years_2010_to_2019)
    test.assert_distinct_values("income", "segment", ["all"])