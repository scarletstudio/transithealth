import sys
sys.path.append("../")

from api.metrics.escooter_metric import EscooterMetric
from api.utils.testing import create_test_db

...

def test_escooter():
    test1_table = [
        {
            "start_community_area_number": 3,
            "end_community_area_number": 3,
            "count_trip_id": 1,
            "avg_trip_distance" : 31,
            "avg_trip_distance_miles" : 0.01926662523
        },
        {
            "start_community_area_number": 7,
            "end_community_area_number": 31,
            "count_trip_id": 2,
            "avg_trip_distance" : 2089,
            "avg_trip_distance_miles": 1.29832193909
        },
        {
            "start_community_area_number": 31,
            "end_community_area_number": 25,
            "count_trip_id": 6,
            "avg_trip_distance" : 14903,
            "avg_trip_distance_miles": 9.26227470479
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/escooterSchema.sql"
        ],
        tables={
            "Escooter": test1_table
        }
    )

    metric = EscooterMetric(con)

    assert metric.avg_distance_based_on_start_can() == [
        { "area_number": 3, "value": 0.01926662523},
        { "area_number": 7, "value": 1.29832193909},
        { "area_number": 31, "value": 9.26227470479}
        
    ], "Should have three results for this method"
    
    assert metric.total_escooter_rides() == [
        { "value" : 9}
    ], "Not same number of total trips"
    
    assert metric.number_of_trips_based_on_end_cn() == [
        {"area_number": 3, "value": 1},
        {"area_number": 25, "value": 6},
        {"area_number": 31, "value": 2}
    ], "Should have three results for this method//"
        