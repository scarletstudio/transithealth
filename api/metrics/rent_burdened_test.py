import sys
sys.path.append("../")

from api.metrics.rent_burdened import RentBurdenedMetrics
from api.utils.testing import create_test_db

...

def test_RBU():
    rent_burdened_households_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 52.7029065195125
        },
        {
            "area_number": 1,
            "period_end_year": 2018,
            "segment": "all",
            "value": 41.6541886411246
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 56.2945422971736
        },
        {
            "area_number": 3,
            "period_end_year": 2014,
            "segment": "all",
            "value": 51.4589913593531
        },
        {
            "area_number": 3,
            "period_end_year": 2018,
            "segment": "all",
            "value": 48.790639029861
        },
        {
            "area_number": 3,
            "period_end_year": 2017,
            "segment": "all",
            "value": 33.9090007521057
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
        { "area_number": 1, "value": 0.527029065195125 },
        { "area_number": 2, "value": 0.562945422971736 }
    ], "Should have two results for 2019."

    assert metric.get_max_burdened() == [
        { 'value': 0.562945422971736, 'area_number': 2, 'period_end_year': 2019}
    ], "Should have max result of 0.5777931000000001, area_number of 2, and period end year of 2019."
    
    assert metric.get_min_burdened() == [
        { "area_number": 3, "value": 0.339090007521057, "period_end_year": 2017}
    ], "Should have min result of 32 and area_number of 3."

    assert metric.average_burden_area() == [
        {'avg value': 0.47178547580318553, 'area_number': 1}, 
        {'avg value': 0.562945422971736, 'area_number': 2}, 
        {'avg value': 0.4471954371377327, 'area_number': 3}
    ], "Check if the results are correct"