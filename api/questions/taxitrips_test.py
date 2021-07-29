import sys
sys.path.append("../")

from api.questions.taxitrips import TaxiTripQuestions
from api.utils.testing import create_test_db

def test_most_common_dropoff():
    pickup_table = [
        {
            "pickup_community_area" : 45,
            "dropoff_community_area": 3
        },
        
        {
            "pickup_community_area": 45,
            "dropoff_community_area": 3
        },
        
        {
            "pickup_community_area": 45,
            "dropoff_community_area": 78
        },
        
        {
            "pickup_community_area": 67,
            "dropoff_community_area": 90
        }
        
    ]
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": pickup_table
        }
    )
    metric = TaxiTripQuestions(connection)

    assert metric.most_common_dropoff() == [
        { "area_number": 45, "value": 3},
        { "area_number": 67, "value": 90}
    ], "Should have two results for each pickup_community_area."
    
    
def test_payment_type_by_pickup():
    payment_pickup_table = [
        {
            "pickup_community_area": 57,
            "payment_type": "cash"
        },
        
        {
            "pickup_community_area": 57,
            "payment_type": "cash"
        },
        
        {
            "pickup_community_area": 57,
            "payment_type": "credit card"
        },
        
        {
            "pickup_community_area": 3,
            "payment_type": "credit card"
        }
    ]
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": payment_pickup_table
        }
    )
    metric = TaxiTripQuestions(connection)

    assert metric.get_payment_type_by_pickup() == [
        { "area_number": 3, "value": "credit card"},
        { "area_number": 57, "value": "cash"}
    ], "Should have two results for each pickup_community_area."
    
def test_payment_type_by_dropoff():
    payment_dropoff_table = [
        {
            "dropoff_community_area": 87,
            "payment_type": "credit card"
        },
        
        {
            "dropoff_community_area": 87,
            "payment_type": "credit card"
        },
        
        {
            "dropoff_community_area": 87,
            "payment_type": "cash"
        },
        
        {
            "dropoff_community_area": 44,
            "payment_type": "credit card"
        }
    ]
    connection, cur = create_test_db(
        scripts=[
            "./pipeline/load/taxi_trip.sql"
        ],
        tables={
            "taxitrips": payment_dropoff_table
        }
    )
    metric = TaxiTripQuestions(connection)

    assert metric.get_payment_type_by_dropoff() == [
        { "area_number": 44, "value": "credit card"},
        { "area_number": 87, "value": "credit card"}
    ], "Should have two results for each dropoff_community_area."