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
        scripts=[ "./pipeline/load/population.sql" ],
        tables={ "population": population_table }
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

def test_pooled_trips():
    rideshare_table = [
        {
            "pickup_community_area": 1,
            "ymd": "2018-04-21",
            "n_trips_pooled": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-08-04",
            "n_trips_pooled": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 2,
            "ymd": "2019-08-04",
            "n_trips_pooled": 700,
            "n_trips": 1000
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-08-04",
            "n_trips_pooled": 400,
            "n_trips": 500
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = CommunityMetrics(con)

    assert metric.rideshare_pooled_trip_rate(year=2019) == [
        { "area_number": 1, "value": 0.6 },
        { "area_number": 2, "value": 0.7 }
    ], "Should calculate pooled trip rate for two areas."

    assert metric.rideshare_pooled_trip_rate(year=2018) == [
        { "area_number": 1, "value": 0.4 }
    ], "Should calculate pooled trip rate for separate years."
