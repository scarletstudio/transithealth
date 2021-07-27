import sys
sys.path.append("../")

from api.metrics.sidewalk_cafe import SidewalkCafeMetrics
from api.utils.testing import create_test_db

def test_total_permits_per_day():
    
    sidewalk_cafe_table = [ 
    
        { "permit_number" : 1017732,
          "doing_business_as_name" : "THAI ROOM RESTAURANT INC.",
          "issued_date_dt": "2002-05-07", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60618
        },
            
        { "permit_number" : 1017710,
          "doing_business_as_name" : "TRE KRONOR RESTAURANT",
          "issued_date_dt": "2002-05-07", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60625
        },
        
        { "permit_number" : 1531096,
          "doing_business_as_name" : "CAFE COLAO",
          "issued_date_dt": "2021-06-04", 
          "expiration_date_dt" : "2022-02-28", 
          "zip_code" : 60622
        },
        
        { "permit_number" : 1017363,
          "doing_business_as_name" : "KARMA CROSSING",
          "issued_date_dt": "2005-06-09", 
          "expiration_date_dt" : "2005-12-01", 
          "zip_code" : 60647
        },
        
        { "permit_number" : 1017874,
          "doing_business_as_name" : "LULA CAFE",
          "issued_date_dt": "2002-07-01", 
          "expiration_date_dt" : "2002-11-01", 
          "zip_code" : 60647
        }
    ]
    
   
    con, cur = create_test_db(
        scripts = ["./pipeline/load/sidewalk_cafe.sql"],
        tables={ "sidewalk_cafe": sidewalk_cafe_table }
        )

    metric = SidewalkCafeMetrics(con)

    
    assert metric.get_total_permits_day() == [
        {"date": "2002-05-07", "number_of_permits": 2 },
        {"date": "2002-07-01", "number_of_permits": 1 },
        {"date": "2005-06-09", "number_of_permits": 1 },
        {"date": "2021-06-04", "number_of_permits": 1 }
        ], "Should have 4 results. Check if number of permits are correct"
    
    assert metric.get_total_permits_year() == [
        {"year": "2002", "number_of_permits": 3 },
        {"year": "2005", "number_of_permits": 1 },
        {"year": "2021", "number_of_permits": 1 }
        ], "Should have 3 results. Check if number of permits are correct"
    

    
   