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
            "avg_trip_distance" : 31
        },
        {
            "start_community_area_number": 7,
            "end_community_area_number": 31,
            "count_trip_id": 2,
            "avg_trip_distance" : 2089
        },
        {
            "start_community_area_number": 31,
            "end_community_area_number": 25,
            "count_trip_id": 6,
            "avg_trip_distance" : 14903
        }
    ]
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/escooter2019.sql"
        ],
        tables={
            "Escooter": test1_table
        }
    )

    metric = EscooterMetric(con)

    assert metric.number_of_trips_x_to_y(x = 7, y = 31) == [
        { "count_trip_id" : 2}
    ], "Should have one result for start= 7 to end = 31."
    
    assert metric.total_escooter_rides() == [
        { "sum(count_trip_id)" : 9}
    ], "Not same number of total trips"
    
    print(metric.avg_distance_x_to_y(7 , 31))
    
    assert metric.avg_distance_x_to_y(x = 7, y = 31) == [
        {"avg_trip_distance" : 2089}
    ], "Not same avg trip distance"
        