import sys
sys.path.append("../")

from api.questions.pooled_trips import PooledTripMetrics
from api.utils.testing import create_test_db


def test_avg_trips_per_day():
    rideshare_table = [
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-01",
            "n_trips": 400
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-02",
            "n_trips": 100
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-03",
            "n_trips": 200
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-04",
            "n_trips": 300
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-06-23",
            "n_trips": 2
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-06-24",
            "n_trips": 3
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = PooledTripMetrics(con)

    assert metric.avg_trips_per_day_by_area(start="2019-04-01", end="2019-04-05") == [
        { "area_number": 1, "value": 250 }
    ], "Should compute average trips per day."

    assert metric.avg_trips_per_day_by_area(start="2019-04-01", end="2019-04-11") == [
        { "area_number": 1, "value": 100 }
    ], "Should compute average trips per day, using date range as the denominator."

    assert metric.avg_trips_per_day_by_area(start="2019-04-02", end="2019-04-04") == [
        { "area_number": 1, "value": 150 }
    ], "Should include the start date and exclude the end date."

    # Average trips without converting to integer is 2.5 trips
    assert metric.avg_trips_per_day_by_area(start="2019-06-23", end="2019-06-25") == [
        { "area_number": 1, "value": 2 }
    ], "Should return result as an integer in whole trips, not a fractional value."

def test_avg_cost_per_trip():
    rideshare_table = [
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-01",
            "avg_cost_no_tip_cents": 1000,
            "n_trips": 400
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-02",
            "avg_cost_no_tip_cents": 2000,
            "n_trips": 200
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-03",
            "avg_cost_no_tip_cents": 1000,
            "n_trips": 300
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-04-04",
            "avg_cost_no_tip_cents": 1300,
            "n_trips": 700
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-06-21",
            "avg_cost_no_tip_cents": 1,
            "n_trips": 3
        },
        {
            "pickup_community_area": 1,
            "ymd": "2019-06-22",
            "avg_cost_no_tip_cents": 4,
            "n_trips": 1
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = PooledTripMetrics(con)

    assert metric.avg_cost_per_trip_cents_by_area(start="2019-04-01", end="2019-04-02") == [
        { "area_number": 1, "value": 1000 }
    ], "Should compute average cost for one day of trips."

    assert metric.avg_cost_per_trip_cents_by_area(start="2019-04-02", end="2019-04-04") == [
        { "area_number": 1, "value": 1400 }
    ], "Should include the start date and exclude the end date."

    # Average cost without converting to integer is 1333.33333 (repeated) cents
    assert metric.avg_cost_per_trip_cents_by_area(start="2019-04-01", end="2019-04-03") == [
        { "area_number": 1, "value": 1333 }
    ], "Should return result as an integer in whole cents, not a fractional value."

    # Average cost without rounding down is 1.75 cents
    assert metric.avg_cost_per_trip_cents_by_area(start="2019-06-01", end="2019-06-30") == [
        { "area_number": 1, "value": 1 }
    ], "Should return result as an integer in whole cents, rounded down."
