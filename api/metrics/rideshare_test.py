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
    
def test_total_trips_by_pickup_part():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/community_area.sql",
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "community_area": [
                { "area_number": 5, "part": "Central" },
                { "area_number": 29, "part": "Southwest" },
            ],
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips": 30 },
                { "pickup_community_area": 29, "week": "2019-01-01", "n_trips": 20 },
                { "pickup_community_area": 29, "week": "2020-01-01", "n_trips": 10 },
            ],
        }
    )

    metric = RideshareMetrics(con)

    assert metric.get_total_trips_by_pickup_part() == [
        { "pickup_part": "Central", "total_trips": 85 },
        { "pickup_part": "Southwest", "total_trips": 30 }
    ], "Should sum trips by part of city."

    assert metric.get_total_trips_by_pickup_part(year=2019) == [
        { "pickup_part": "Central", "total_trips": 55 },
        { "pickup_part": "Southwest", "total_trips": 20 }
    ], "Should sum trips by part of city for 2019 only."
