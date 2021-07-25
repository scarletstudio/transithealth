import sys
sys.path.append("../")

from api.metrics.taxitrips import TaxiTripMetrics
from api.utils.testing import create_test_db

#tests average speed per pickup location function
def test_avg_speed_per_pickup():
    spickup_table = [
        {
            "pickup_community_area": 76,
            "trip_miles": 4,
            "trip_minutes": 20
        },
        
        {
            "pickup_community_area": 76,
            "trip_miles": 10,
            "trip_minutes": 45
        },
        
        {
            "pickup_community_area": 45,
            "trip_miles": 2,
            "trip_minutes": 10
        },
        
        {
            "pickup_community_area": 3,
            "trip_miles": 6,
            "trip_minutes": 30
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

    assert metric.avg_speed_per_pickup() == [
        { "pickup_community_area": 3, "avg_speed": 12},
        { "pickup_community_area": 45, "avg_speed": 12},
        { "pickup_community_area": 76, "avg_speed": 12.66665}
    ], "Should have three results for each pickup_community_area."

#tests average speed per dropoff location function
def test_avg_speed_per_dropoff():
    sdropoff_table = [
        {
            "dropoff_community_area": 8,
            "trip_miles": 4,
            "trip_minutes": 20
        },
        
        {
            "dropoff_community_area": 67,
            "trip_miles": 10,
            "trip_minutes": 30
        },
        
        {
            "dropoff_community_area": 67,
            "trip_miles": 2,
            "trip_minutes": 10
        },
        
        {
            "dropoff_community_area": 24,
            "trip_miles": 6,
            "trip_minutes": 30
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

    assert metric.avg_speed_per_dropoff() == [
        { "avg_speed": 12, "dropoff_community_area": 8},
        { "avg_speed": 16, "dropoff_community_area": 67},
        {  "avg_speed": 12, "dropoff_community_area": 24}
    ], "Should have three results for each dropoff_community_area."

#tests most common dropoff location per pickup location function
def test_most_common_dropoff():
    cdropoff_table = [
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 8
        },
        
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 67
        },
        
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 67
        },
        
        {
            "pickup_community_area": 3,
            "dropoff_community_area": 24
        }
    ]
    
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": cdropoff_table
        }
    )
    
    metric = TaxiTripMetrics(connection)
    
    assert metric.most_common_dropoff(pickup_community_area=76) == [
        { "pickup_community_area": 76, "dropoff_community_area": 67 }
    ], "Should have 67 as most common dropoff_community_area for pickup_community_area = 76."
    
    assert metric.most_common_dropoff(pickup_community_area=3) == [
        { "pickup_community_area": 3, "dropoff_community_area": 24 }
    ], "Should have 24 as most common dropoff_community_area for pickup_community_area = 3."