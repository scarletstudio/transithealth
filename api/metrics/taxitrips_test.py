import sys
sys.path.append("../")

from api.metrics.taxitrips import TaxiTripMetrics
from api.utils.testing import create_test_db

#tests average speed per pickup location function
def test_avg_speed_per_pickup():
    spickup_table = [
        {
            "pickup_community_area": 76,
            "trip_miles": 4.0,
            "trip_minutes": 20.0
        },
        
        {
            "pickup_community_area": 76,
            "trip_miles": 10.0,
            "trip_minutes": 30.0
        },
        
        {
            "pickup_community_area": 45,
            "trip_miles": 2.0,
            "trip_minutes": 10.0
        },
        
        {
            "pickup_community_area": 3,
            "trip_miles": 6.0,
            "trip_minutes": 30.0
        }
    ]
    
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": spickup_table
        }
    )
    
    metric = TaxiTripMetrics(connection)

    assert metric.get_avg_speed_per_pickup() == [
        { "area_number": 3, "value": 12.0},
        { "area_number": 45, "value": 12.0},
        { "area_number": 76, "value": 16.0}
    ], "Should have three results for each pickup_community_area."

#tests average speed per dropoff location function
def test_avg_speed_per_dropoff():
    sdropoff_table = [
        {
            "dropoff_community_area": 8,
            "trip_miles": 4.0,
            "trip_minutes": 20.0
        },
        
        {
            "dropoff_community_area": 67,
            "trip_miles": 10.0,
            "trip_minutes": 30.0
        },
        
        {
            "dropoff_community_area": 67,
            "trip_miles": 2.0,
            "trip_minutes": 10.0
        },
        
        {
            "dropoff_community_area": 24,
            "trip_miles": 6.0,
            "trip_minutes": 30.0
        }
    ]
    
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": sdropoff_table
        }
    )
    
    metric = TaxiTripMetrics(connection)

    assert metric.get_avg_speed_per_dropoff() == [
        { "area_number": 8, "value": 12.0},
        { "area_number": 24, "value": 12.0},
        { "area_number": 67, "value": 16.0}
        
    ], "Should have three results for each dropoff_community_area."
    
    