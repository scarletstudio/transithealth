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

def test_yearly_disability_rate():
    disabilities_table = [
        {
            "area_number": "1",
            "segment": "all",
            "value": 12.75,
            "period_end_year": 2012,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 13.75,
            "period_end_year": 2013,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 14.75,
            "period_end_year": 2014,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 15.75,
            "period_end_year": 2015,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 16.75,
            "period_end_year": 2016,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 17.75,
            "period_end_year": 2017,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 18.75,
            "period_end_year": 2018,
        },
        {
            "area_number": "1",
            "segment": "all",
            "value": 19.75,
            "period_end_year": 2019,
        },
        

    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/disabilities.sql" ],
        tables={ "disabilities": disabilities_table}
        )

    metric = YearlyMetrics(con)

    assert metric.disability_rate(segment="all") == [
        { "date": "2012-01-01", "value": 12.75 / 100, "segment": "all" },
        { "date": "2013-01-01", "value": 13.75 / 100, "segment": "all" },
        { "date": "2014-01-01", "value": 14.75 / 100, "segment": "all" },
        { "date": "2015-01-01", "value": 15.75 / 100, "segment": "all" },
        { "date": "2016-01-01", "value": 16.75 / 100, "segment": "all" },
        { "date": "2017-01-01", "value": 17.75 / 100, "segment": "all" },
        { "date": "2018-01-01", "value": 18.75 / 100, "segment": "all" },
        { "date": "2019-01-01", "value": 19.75 / 100, "segment": "all" },], "Should return eight values."