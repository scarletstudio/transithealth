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

    
def test_disabilities():
    disabilities_table = [
        {
            "area_number": 1,
            "period_end_year": 2018,
            "segment": "all",
            "value": 13.37
        },
        {
            "area_number": 2,
            "period_end_year": 2016,
            "segment": "all",
            "value": 11.02
        },
        {
            "area_number": 3,
            "period_end_year": 2016,
            "segment": "all",
            "value": 8.46
        },
        {
            "area_number": 4,
            "period_end_year": 2015,
            "segment": "other",
            "value": 13.37
        },
        
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/disabilities.sql"
        ],
        tables={
            "disabilities": disabilities_table
        }
    )

    metric = CommunityMetrics(con)

    assert metric.disability_rate(year=2018, segment="all") == [
        { "area_number": 1, "value": 13.37 / 100},
    ], "Should have one result for 2018."
    
    assert metric.disability_rate(year=2016, segment="all") == [
        { "area_number": 2, "value": 11.02 / 100 },
        { "area_number": 3, "value": 8.46 / 100 }
    ], "Checks that multiple value are returned. Should have two results for 2016."

    assert metric.disability_rate(year=2011, segment="all") == [], "Checks that year filter works. Should have no results for 2011."
    
    assert metric.disability_rate(year=2015, segment="all") == [], "Checks that segment filter works. Should have no results."
    
def test_total_cefe_permits_by_area():
    
    sidewalk_cafe_table = [ 
    
        { "permit_number" : 1017732,
          "doing_business_as_name" : "THAI ROOM RESTAURANT INC.",
          "area_number" : 5.0,
          "issued_date_dt": "2002-05-07", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60618
        },
            
        { "permit_number" : 1017710,
          "doing_business_as_name" : "TRE KRONOR RESTAURANT",
          "area_number" : 13.0,
          "issued_date_dt": "2002-05-07", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60625
        },
        
        { "permit_number" : 1531096,
          "doing_business_as_name" : "CAFE COLAO",
          "area_number" : 24.0,
          "issued_date_dt": "2021-06-04", 
          "expiration_date_dt" : "2022-02-28", 
          "zip_code" : 60622
        },
        
        { "permit_number" : 1017363,
          "doing_business_as_name" : "KARMA CROSSING",
          "area_number" : 22.0,
          "issued_date_dt": "2005-06-09", 
          "expiration_date_dt" : "2005-12-01", 
          "zip_code" : 60647
        },
        
        { "permit_number" : 1017874,
          "doing_business_as_name" : "LULA CAFE",
          "area_number" : 22.0,
          "issued_date_dt": "2002-07-01", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60647
        }
    ]
    
   
    con, cur = create_test_db(
        scripts = ["./pipeline/load/sidewalk_cafe.sql"],
        tables={ "sidewalk_cafe": sidewalk_cafe_table }
        )

    metric = CommunityMetrics(con)

    
    assert metric.total_cafe_permits_by_area() == [
        { "area_number": 5.0, "value": 1},
        { "area_number": 13.0, "value": 1},
         { "area_number": 22.0, "value": 2},
        { "area_number": 24.0, "value": 1}
       
        ], "Should have 4 results. Check if number of permits are correct"
    
