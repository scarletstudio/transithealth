import sys
sys.path.append("../")

from api.metrics.Covid_cdd_metric import Covid_CDD_Metric
from api.utils.testing import create_test_db

...

def test_CDD():
    test1_table = [
        {
            "week" : "2020-04-05",
            "cases_total": 2914,
            "deaths_total": 139,
            "cases_age_0_17":23,
            "cases_age_18_29":363,
            "cases_age_30_39": 473,
            "cases_age_40_49": 537,
            "cases_age_50_59": 587,
            "cases_age_60_69": 462,
            "cases_age_70_79": 265,
            "cases_age_80_": 204,
            "deaths_0_17_yrs": 0,
            "deaths_18_29_yrs": 0,
            "deaths_30_39_yrs": 3,
            "deaths_40_49_yrs": 14,
            "deaths_50_59_yrs": 17,
            "deaths_60_69_yrs": 20,
            "deaths_70_79_yrs": 43,
            "deaths_80_yrs": 42
        },
        {
            "week" : "2020-04-26",
            "cases_total": 4050,
            "deaths_total": 199,
            "cases_age_0_17": 453,
            "cases_age_18_29":111,
            "cases_age_30_39": 222,
            "cases_age_40_49": 333,
            "cases_age_50_59": 444,
            "cases_age_60_69": 555,
            "cases_age_70_79": 666,
            "cases_age_80_": 777,
            "deaths_0_17_yrs": 0,
            "deaths_18_29_yrs": 0,
            "deaths_30_39_yrs": 3,
            "deaths_40_49_yrs": 14,
            "deaths_50_59_yrs": 17,
            "deaths_60_69_yrs": 20,
            "deaths_70_79_yrs": 43,
            "deaths_80_yrs": 69
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/covid_cdd_load.sql"
        ],
        tables={
            "Covid_cases_deaths_data": test1_table
        }
    )

    metric = Covid_CDD_Metric(con)

    assert metric.cases_for_given_age("40_49") == [
        { "date": "2020-04-05", "value": 537},
        { "date": "2020-04-26", "value": 333}
        
    ], "Should have two results for this method"
    
    assert metric.deaths_for_given_age("80_") == [
        { "date": "2020-04-05", "value": 42},
        { "date": "2020-04-26", "value": 69}
        
    ], "Should have two results for this method"
    
    assert metric.totalCases() == [
        { "date": "2020-04-05", "value": 2914},
        { "date": "2020-04-26", "value": 4050}
        
    ], "Should have two results for this metho"