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
        { "pickup_community_area": 45, "dropoff_community_area": 3, "max_count": 2},
        { "pickup_community_area": 67, "dropoff_community_area": 90, "max_count": 1}
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
        { "pickup_community_area": 3, "payment_type": "credit card", "max_count": 1},
        { "pickup_community_area": 57, "payment_type": "cash", "max_count": 2}
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
        { "dropoff_community_area": 44, "payment_type": "credit card", "max_count": 1},
        { "dropoff_community_area": 87, "payment_type": "credit card", "max_count": 2}
    ], "Should have two results for each dropoff_community_area."