import sys
sys.path.append("../")

from api.metrics.cta_train_ridership import TrainWeeklyMetrics
from api.utils.testing import create_test_db


def test_weekly_train_ridership():
    train_ridership_table = [
        {
            "week_num": "2019-05",
            "station_id": 1,
            "rides": 24
        },
        {
            "week_num": "2019-05",
            "station_id": 1,
            "rides": 30
        },
        {
            "week_num": "2019-05",
            "station_id": 2,
            "rides": 70
        },
        {
            "week_num": "2019-05",
            "station_id": 1,
            "rides": 10
        },
        {
            "week_num": "2019-06",
            "station_id": 1,
            "rides": 10
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/cta_train_ridership.sql" ],
        tables={ "cta_train_ridership": train_ridership_table }
    )

    metric = TrainWeeklyMetrics(con)

    assert metric.cta_train_ridership_weekly(since="2019-01-01") == [
        { "date": "2019-05", "value": 134 },
        { "date": "2019-06", "value": 10 }
    ], "Should compute average cost in cents since per week given date."
