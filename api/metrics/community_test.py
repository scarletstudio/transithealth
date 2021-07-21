import sys
sys.path.append("../")

from api.metrics.community import CommunityMetrics
from api.utils.testing import create_test_db


def test_population():
    population_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 13000
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 27000
        },
        {
            "area_number": 1,
            "period_end_year": 2010,
            "segment": "all",
            "value": 10000
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/population.sql" ],
        tables={ "population": population_table }
    )

    metric = CommunityMetrics(con)

    assert metric.population(year=2019, segment="all") == [
        { "area_number": 1, "value": 13000 },
        { "area_number": 2, "value": 27000 }
    ], "Should have two results for 2019."

    assert metric.population(year=2010, segment="all") == [
        { "area_number": 1, "value": 10000 }
    ], "Should have one result for 2010."

    assert metric.population(year=2013, segment="all") == [], "Should have no results for 2013."

def test_income():
    income_table = [
        {
            "area_number": 1,
            "period_end_year": 2019,
            "segment": "all",
            "value": 13000
        },
        {
            "area_number": 2,
            "period_end_year": 2019,
            "segment": "all",
            "value": 27000
        },
        {
            "area_number": 1,
            "period_end_year": 2010,
            "segment": "all",
            "value": 10000
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/income.sql"
        ],
        tables={
            "income": income_table
        }
    )

    metric = CommunityMetrics(con)

    assert metric.income(year=2019, segment="all") == [
        { "area_number": 1, "value": 13000 },
        { "area_number": 2, "value": 27000 }
    ], "Should have two results for 2019."

    assert metric.income(year=2010, segment="all") == [
        { "area_number": 1, "value": 10000 }
    ], "Should have one result for 2010."

    assert metric.income(year=2013, segment="all") == [], "Should have no results for 2013."

def test_pooled_trips():
    rideshare_table = [
        {
            "pickup_community_area": 1,
            "week": "2018-04-21",
            "n_trips_pooled": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 1,
            "week": "2019-08-04",
            "n_trips_pooled": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 2,
            "week": "2019-08-04",
            "n_trips_pooled": 700,
            "n_trips": 1000
        },
        {
            "pickup_community_area": 1,
            "week": "2019-08-04",
            "n_trips_pooled": 400,
            "n_trips": 500
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = CommunityMetrics(con)

    assert metric.rideshare_pooled_trip_rate(year=2019) == [
        { "area_number": 1, "value": 0.6 },
        { "area_number": 2, "value": 0.7 }
    ], "Should calculate pooled trip rate for two areas."

    assert metric.rideshare_pooled_trip_rate(year=2018) == [
        { "area_number": 1, "value": 0.4 }
    ], "Should calculate pooled trip rate for separate years."

def test_pool_requests():
    rideshare_table = [
        {
            "pickup_community_area": 1,
            "week": "2018-04-21",
            "n_trips_pooled_authorized": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 1,
            "week": "2019-08-04",
            "n_trips_pooled_authorized": 200,
            "n_trips": 500
        },
        {
            "pickup_community_area": 2,
            "week": "2019-08-04",
            "n_trips_pooled_authorized": 700,
            "n_trips": 1000
        },
        {
            "pickup_community_area": 1,
            "week": "2019-08-04",
            "n_trips_pooled_authorized": 400,
            "n_trips": 500
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = CommunityMetrics(con)

    assert metric.rideshare_pool_request_rate(year=2019) == [
        { "area_number": 1, "value": 0.6 },
        { "area_number": 2, "value": 0.7 }
    ], "Should calculate pool request rate for two areas."

    assert metric.rideshare_pool_request_rate(year=2018) == [
        { "area_number": 1, "value": 0.4 }
    ], "Should calculate pool request rate for separate years."

def test_belonging():
    belonging_table = [
        {
            "area_number": 1,
            "period_end_year": 2017,
            "segment": "all",
            "value": 45.6
        },
        {
            "area_number": 2,
            "period_end_year": 2017,
            "segment": "all",
            "value": 35.2
        },
        {
            "area_number": 1,
            "period_end_year": 2018,
            "segment": "all",
            "value": 67.1
        }
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/belonging.sql" ],
        tables={ "belonging": belonging_table }
        )
    
    metric = CommunityMetrics(con)
    
    assert metric.belonging(year=2017, segment="all") == [
        { "area_number": 1, "value": 45.6 / 100 },
        { "area_number": 2, "value": 35.2 / 100 }
    ], "Should have two results for 2017."
    
    assert metric.belonging(year=2018, segment="all") == [
        { "area_number": 1, "value": 67.1 / 100 }
    ], "Should have one result for 2018."
    
    assert metric.belonging(year=2015, segment="all") == [], "Should have no results for 2015."

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

    metric = CommunityMetrics(con)

    assert metric.rent_burdened(year=2019, segment="all") == [
        { "area_number": 1, "value": 0.527029065195125 },
        { "area_number": 2, "value": 0.562945422971736 }
    ], "Should have two results for 2019."

    assert metric.rent_max_burdened() == [
        { 'value': 0.562945422971736, 'area_number': 2, 'period_end_year': 2019}
    ], "Double check the max result and period end year."
    
    assert metric.rent_min_burdened() == [
        { "area_number": 3, "value": 0.339090007521057, "period_end_year": 2017}
    ], "Double check the min result and period end year."

    assert metric.rent_average_burden_area() == [
        {'value': 0.47178547580318553, 'area_number': 1}, 
        {'value': 0.562945422971736, 'area_number': 2}, 
        {'value': 0.4471954371377327, 'area_number': 3}
    ], "Check if the results are correct"