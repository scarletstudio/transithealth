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
