import sys
sys.path.append("../")

from api.metrics.community import CommunityMetrics
from api.utils.testing import create_test_db

...

def test_RBU():
    rent_burdened_households_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 43.31238192
        },
        {
            "area_number": 1,
            "period_end_year": 2018,
            "segment": "all",
            "value": 47.31238192
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 57.77931
        },
        {
            "area_number": 3,
            "period_end_year": 2014,
            "segment": "all",
            "value": 32.31283212
        },
        {
            "area_number": 3,
            "period_end_year": 2018,
            "segment": "all",
            "value": 52.771
        },
        {
            "area_number": 3,
            "period_end_year": 2017,
            "segment": "all",
            "value": 53.64153641
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rent_burdened_households.sql"
        ],
        tables={
            "rent_burdened_households": rent_burdened_households_table
        }
    )

    metric = RentBurdenedMetrics(con)
    
    assert metric.rent_burdened(year=2019, segment="all") == [
        { "area_number": 1, "value": 43 },
        { "area_number": 2, "value": 57 }
    ], "Should have two results for 2019."

    assert metric.get_max_burdened() == [
        { "area_number": 2, "value": 57.78, "period_end_year": 2019}
    ], "Should have max result of 57 and area_number of 2."

    assert metric.get_min_burdened() == [
        { "area_number": 3, "value": 32.31, "period_end_year": 2014}
    ], "Should have min result of 32 and area_number of 3."
    
    assert metric.average_burden_area() == [
        {'avg value': 45.31, 'area_number': 1}, 
        {'avg value': 57.78, 'area_number': 2}, 
        {'avg value': 46.24, 'area_number': 3}
    ], "Check if the results are correct"
    