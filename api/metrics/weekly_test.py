import sys
sys.path.append("../")

from api.metrics.weekly import WeeklyMetrics
from api.utils.testing import create_test_db


def test_rideshare_avg_price():
    rideshare_table = [
        {
            "week": "2018-04-07",
            "pickup_community_area": 1,
            "n_trips": 24,
            "avg_cost_no_tip_cents": 4040
        },
        {
            "week": "2018-04-14",
            "pickup_community_area": 1,
            "n_trips": 30,
            "avg_cost_no_tip_cents": 1000
        },
        {
            "week": "2018-04-14",
            "pickup_community_area": 2,
            "n_trips": 70,
            "avg_cost_no_tip_cents": 2000
        },
        {
            "week": "2018-04-21",
            "pickup_community_area": 1,
            "n_trips": 10,
            "avg_cost_no_tip_cents": 1500
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = WeeklyMetrics(con)

    assert metric.rideshare_avg_cost_cents(since="2018-04-14") == [
        { "week": "2018-04-14", "value": 1700 },
        { "week": "2018-04-21", "value": 1500 }
    ], "Should compute average cost in cents since per week given date."
