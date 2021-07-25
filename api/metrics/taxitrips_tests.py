import sys
sys.path.append("../")

from api.metrics.taxitrips import TaxiTripMetrics
from api.utils.testing import create_test_db

#tests average taxi speed function
def test_avgtaxispeed():
    taxi_table = [
        {
            "taxi_id": "d23",
            "trip_miles": 4,
            "trip_minutes": 20
        },
        
        {
            "taxi_id": "b65",
            "trip_miles": 10,
            "trip_minutes": 45
        },
        
        {
            "taxi_id": "w87",
            "trip_miles": 2,
            "trip_minutes": 10
        },
        
        {
            "taxi_id": "b65",
            "trip_miles": 6,
            "trip_minutes": 30
        }
    ]
    
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxitrip.sql"
        ],
        tables={
            "taxi": taxi_table
        }
    )
    
    metric = TaxiTripMetrics(connection)

    assert metric.avgtaxispeed() == [
        { "taxi_id": "d23", "trip_miles": 4, "trip_minutes": 20 },
        { "taxi_id": "b65", "trip_miles": 10, "trip_minutes": 45 },
        { "taxi_id": "w87", "trip_miles": 2, "trip_minutes": 10 },
        { "taxi_id": "b65", "trip_miles": 6, "trip_minutes": 30 }
    ], "Should have four results for all taxis in dataset."


def test_maxdropoff():
    dropoff_table = [
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 45
        },
        
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 33
        },
        
        {
            "pickup_community_area": 76,
            "dropoff_community_area": 45
        },
        
        {
            "pickup_community_area": 8,
            "dropoff_community_area": 23
        }
    ]
    
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxitrip.sql"
        ],
        tables={
            "dropoff": dropoff_table
        }
    )
    
    metric = TaxiTripMetrics(connection)
    
    assert metric.maxdropoff(pickup_community_area=76) == [
        { "dropoff_community_area": 45 },
        { "dropoff_community_area": 33  }
    ], "Should have two results for pickup_community_area #76 in dataset."
    
    assert metric.maxdropoff(pickup_community_area=8) == [
        { "dropoff_community_area": 8 }
    ], "Should have one result for pickup_community_area #8 in dataset."