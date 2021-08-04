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

def test_total_trips_pooled_by_pickup_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips_pooled": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips_pooled": 30 },
                { "pickup_community_area": 5, "week": "2020-12-01", "n_trips_pooled": 2 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 20 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 10 },
                # This total should not be included in the output, because it has no part of city
                { "pickup_community_area": 54, "week": "2020-01-01", "n_trips_pooled": 70 },
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips_pooled": 25 },
            ],
        }
    )

    metric = RideshareMetrics(con)

    assert metric.get_total_trips_pooled_by_pickup_specific_area_and_year(2020,76) == [
        { "year": 2020, "pickup_community_area": 76, "total_trips_pooled":30 },
    ], "Year is 2020, pickup area is 76, and total trips pooled must be 30."
    
    assert metric.get_total_trips_pooled_by_pickup_specific_area_and_year(2019,5) == [
        { "year": 2019, "pickup_community_area": 5, "total_trips_pooled":55 },
    ], "Year is 2019, pickup area is 5, and total trips pooled must be 55."

    assert metric.get_total_trips_pooled_by_pickup_specific_area_and_year(2020,5) == [
        { "year": 2020, "pickup_community_area": 5, "total_trips_pooled":32 },
    ], "Year is 2020, pickup area is 5, and total trips pooled must be 32."

def test_total_trips_pooled_by_dropoff_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips_pooled": 50, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 5, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 7, "dropoff_community_area" : 2 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 10, "dropoff_community_area" : 2 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips_pooled": 32, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips_pooled": 12, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 70, "dropoff_community_area" : 23},
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips_pooled": 25, "n_trips_pooled": 1234, "dropoff_community_area" : 76 },
            ],
        }
    )

    metric = RideshareMetrics(con)

    assert metric.get_total_trips_pooled_by_dropoff_specific_area_and_year(2019,5) == [
        { "year": 2019, "dropoff_community_area": 1, "total_trips_pooled":55 },
        { "year": 2019, "dropoff_community_area": 2, "total_trips_pooled":17 },
    ], "Year 2019, Pickup area is 5, Dropoff Community Areas are 1 and 2 with 55 and 17 total trips pooled respectively."
    
    assert metric.get_total_trips_pooled_by_dropoff_specific_area_and_year(2020,76) == [
        { "year": 2020, "dropoff_community_area": 8, "total_trips_pooled":44 },
        { "year": 2020, "dropoff_community_area": 23, "total_trips_pooled":70 },
    ], "Year 2020, Pickup area is 76, Dropoff Community Areas are 8 and 23 with 44 and 70 total trips pooled respectively."
    