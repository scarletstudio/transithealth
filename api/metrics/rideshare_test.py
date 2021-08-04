import sys
sys.path.append("../")

from api.metrics.rideshare import RideshareMetrics
from api.utils.testing import create_test_db


def test_max_trips():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql"
        ],
        tables={
            "rideshare": [
                { "n_trips": 7 },
                { "n_trips": 14 },
                { "n_trips": 3 }
            ]
        }
    )

    metric = RideshareMetrics(con)
    actual = metric.get_max_trips()

    expected = { "max_trips": 14 }

    assert actual == expected

def test_total_trips_by_pickup_area():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql"
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 30, "n_trips": 17 },
                { "pickup_community_area": 17, "n_trips": 10 },
                { "pickup_community_area": 17, "n_trips": 5 },
                { "pickup_community_area": 30, "n_trips": 600 }
            ]
        }
    )

    metric = RideshareMetrics(con)
    actual = metric.get_total_trips_by_pickup_area()

    expected = [
        { "pickup_community_area": 17, "total_trips": 15 },
        { "pickup_community_area": 30, "total_trips": 617 }
    ]

    assert actual == expected
    
def test_total_trips_by_pickup_part_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/community_area.sql",
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "community_area": [
                { "area_number": 5, "part": "Central" },
                { "area_number": 29, "part": "Southwest" },
                # This area should not be included in the output, because it has no trips
                { "area_number": 13, "part": "Southwest" },
            ],
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips": 30 },
                { "pickup_community_area": 5, "week": "2020-12-01", "n_trips": 2 },
                { "pickup_community_area": 29, "week": "2019-01-01", "n_trips": 20 },
                { "pickup_community_area": 29, "week": "2020-01-01", "n_trips": 10 },
                # This total should not be included in the output, because it has no part of city
                { "pickup_community_area": 54, "week": "2020-01-01", "n_trips": 70 },
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips": 25 },
            ],
        }
    )

    metric = RideshareMetrics(con)

    assert metric.get_total_trips_by_pickup_part_and_year() == [
        { "pickup_part": "Central", "year": 2019, "total_trips": 55 },
        { "pickup_part": "Central", "year": 2020, "total_trips": 32 },
        { "pickup_part": "Southwest", "year": 2019, "total_trips": 20 },
        { "pickup_part": "Southwest", "year": 2020, "total_trips": 10 },
    ], "Should sum trips by part of city and year."

def test_total_trips_by_pickup_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips": 30 },
                { "pickup_community_area": 5, "week": "2020-12-01", "n_trips": 2 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips": 20 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips": 10 },
                # This total should not be included in the output, because it has no part of city
                { "pickup_community_area": 54, "week": "2020-01-01", "n_trips": 70 },
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips": 25 },
            ],
        }
    )

    metric = RideshareMetrics(con)

    assert metric.get_total_trips_by_pickup_specific_area_and_year(2020,76) == [
        { "year": 2020, "pickup_community_area": 76, "total_trips":30 },
    ], "Year is 2020, pickup area is 76, and total trips must be 30."
    
    assert metric.get_total_trips_by_pickup_specific_area_and_year(2019,5) == [
        { "year": 2019, "pickup_community_area": 5, "total_trips":55 },
    ], "Year is 2019, pickup area is 5, and total trips must be 55."

    assert metric.get_total_trips_by_pickup_specific_area_and_year(2020,5) == [
        { "year": 2020, "pickup_community_area": 5, "total_trips":32 },
    ], "Year is 2020, pickup area is 5, and total trips must be 32."
