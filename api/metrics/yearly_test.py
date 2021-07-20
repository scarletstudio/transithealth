import sys
sys.path.append("../")

from api.metrics.yearly import YearlyMetrics
from api.utils.testing import create_test_db


def test_annual_belonging_rate():
    belonging_table = [
        {
            "layer": "place",
            "period_end_year": 2015,
            "segment": "all",
            "value": 55.6
        },
        {
            "layer": "place",
            "period_end_year": 2016,
            "segment": "all",
            "value": 45.2
        },
        {
            "layer": "place",
            "period_end_year": 2017,
            "segment": "all",
            "value": 37.1
        },
        {
            "layer": "place",
            "period_end_year": 2018,
            "segment": "all",
            "value": 35.4
        },
        {
            "layer": "place",
            "period_end_year": 2016,
            "segment": "H",
            "value": 36.4
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/belonging.sql" ],
        tables={ "belonging": belonging_table }
        )

    metric = YearlyMetrics(con)

    assert metric.belonging(segment="all") == [
        { "date": "2015-01-01", "value": 55.6 / 100, "segment": "all" },
        { "date": "2016-01-01", "value": 45.2 / 100, "segment": "all" },
        { "date": "2017-01-01", "value": 37.1 / 100, "segment": "all" },
        { "date": "2018-01-01", "value": 35.4 / 100, "segment": "all" }
    ], "Should give the belonging rate per year with just the given segment."