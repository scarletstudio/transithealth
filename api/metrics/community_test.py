import sys
sys.path.append("../")

from api.metrics.community import CommunityMetrics
from api.utils.testing import create_test_db


def test_population():
    population_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 13000
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 27000
        },
        {
            "area_number": 1,
            "period_end_year": 2010,
            "segment": "all",
            "value": 10000
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/population.sql"
        ],
        tables={
            "population": population_table
        }
    )

    metric = CommunityMetrics(con)

    assert metric.population(year=2019, segment="all") == [
        { "area_number": 1, "value": 13000 },
        { "area_number": 2, "value": 27000 }
    ], "Should have two results for 2019."

    assert metric.population(year=2010, segment="all") == [
        { "area_number": 1, "value": 10000 }
    ], "Should have one result for 2010."

    assert metric.population(year=2013, segment="all") == [], "Should have no results for 2013."

def test_income():
    income_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 13000
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 27000
        },
        {
            "area_number": 1,
            "period_end_year": 2010,
            "segment": "all",
            "value": 10000
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/income.sql"
        ],
        tables={
            "income": income_table
        }
    )

    metric = CommunityMetrics(con)

    assert metric.income(year=2019, segment="all") == [
        { "area_number": 1, "value": 13000 },
        { "area_number": 2, "value": 27000 }
    ], "Should have two results for 2019."

    assert metric.income(year=2010, segment="all") == [
        { "area_number": 1, "value": 10000 }
    ], "Should have one result for 2010."

    assert metric.income(year=2013, segment="all") == [], "Should have no results for 2013."
