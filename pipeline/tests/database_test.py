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
    test.assert_table_count("belonging",220)
    test.assert_table_count("disabilities", 616)
    test.assert_table_count("population", 770)
    test.assert_table_count("income", 770)
    test.assert_table_count("covid_spread", 13375)
    test.assert_table_count("rideshare", 671938)

def test_population():
    years_2010_to_2019 = set(range(2010, 2020, 1))
    test.assert_distinct_values("population", "period_end_year", years_2010_to_2019)
    test.assert_distinct_values("population", "segment", {"all"})

def test_income():
    years_2010_to_2019 = set(range(2010, 2020, 1))
    test.assert_distinct_values("income", "period_end_year", years_2010_to_2019)
    test.assert_distinct_values("income", "segment", {"all"})
    
def test_belonging():
    years_2015_to_2018 = set(range(2015, 2019, 1))
    all_segments = set(["all","W","B","A","H","F","M","S","G","K","N","E","L","R","U","V","Z"])
    test.assert_distinct_values("belonging", "period_end_year", years_2015_to_2018)
    test.assert_distinct_values("belonging", "segment", all_segments)

def test_disabilities():
    end_years = set(range(2012, 2020, 1))
    test.assert_distinct_values("disabilities", "period_end_year", end_years)
    test.assert_distinct_values("disabilities", "segment", {"all"})
    
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
