import sys
sys.path.append("../")

from api.questions.ridetrips import RideTrips
from api.utils.testing import create_test_db

def test_total_trips_pooled_by_pickup_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips_pooled": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips_pooled": 30 },
                { "pickup_community_area": 5, "week": "2020-12-01", "n_trips_pooled": 2 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 20 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 10 },
                # This total should not be included in the output, because it has no part of city
                { "pickup_community_area": 54, "week": "2020-01-01", "n_trips_pooled": 70 },
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips_pooled": 25 },
            ],
        }
    )

    trips = RideTrips(con)

    assert trips.get_total_trips_pooled_by_pickup_specific_area_and_year(2020,76) == [
        { "year": 2020, "pickup_community_area": 76, "total_trips_pooled":30 },
    ], "Year is 2020, pickup area is 76, and total trips pooled must be 30."
    
    assert trips.get_total_trips_pooled_by_pickup_specific_area_and_year(2019,5) == [
        { "year": 2019, "pickup_community_area": 5, "total_trips_pooled":55 },
    ], "Year is 2019, pickup area is 5, and total trips pooled must be 55."

    assert trips.get_total_trips_pooled_by_pickup_specific_area_and_year(2020,5) == [
        { "year": 2020, "pickup_community_area": 5, "total_trips_pooled":32 },
    ], "Year is 2020, pickup area is 5, and total trips pooled must be 32."

def test_total_trips_pooled_by_dropoff_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips_pooled": 50, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 5, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 7, "dropoff_community_area" : 2 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 10, "dropoff_community_area" : 2 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips_pooled": 32, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips_pooled": 12, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 70, "dropoff_community_area" : 23},
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips_pooled": 1234, "dropoff_community_area" : 76 },
            ],
        }
    )

    trips = RideTrips(con)
    

    assert trips.get_total_trips_pooled_by_dropoff_specific_area_and_year(2019,5) == [
        { "year": 2019, "dropoff_community_area": 1, "total_trips_pooled":55 },
        { "year": 2019, "dropoff_community_area": 2, "total_trips_pooled":17 },
    ], "Year 2019, Pickup area is 5, Dropoff Community Areas are 1 and 2 with 55 and 17 total trips pooled respectively."
    
    assert trips.get_total_trips_pooled_by_dropoff_specific_area_and_year(2020,76) == [
        { "year": 2020, "dropoff_community_area": 8, "total_trips_pooled":44 },
        { "year": 2020, "dropoff_community_area": 23, "total_trips_pooled":70 },
    ], "Year 2020, Pickup area is 76, Dropoff Community Areas are 8 and 23 with 44 and 70 total trips pooled respectively."
    
def test_total_trips_by_pickup_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips_pooled": 50 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips_pooled": 5 },
                { "pickup_community_area": 5, "week": "2020-01-01", "n_trips_pooled": 30 },
                { "pickup_community_area": 5, "week": "2020-12-01", "n_trips_pooled": 2 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 20 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips_pooled": 10 },
                # This total should not be included in the output, because it has no part of city
                { "pickup_community_area": 54, "week": "2020-01-01", "n_trips_pooled": 70 },
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips_pooled": 25 },
            ],
        }
    )

    trips = RideTrips(con)

    assert trips.get_total_trips_by_pickup_specific_area_and_year(2020,76) == [
        { "year": 2020, "pickup_community_area": 76, "total_trips_pooled":30 },
    ], "Year is 2020, pickup area is 76, and total trips pooled must be 30."
    
    assert trips.get_total_trips_by_pickup_specific_area_and_year(2019,5) == [
        { "year": 2019, "pickup_community_area": 5, "total_trips_pooled":55 },
    ], "Year is 2019, pickup area is 5, and total trips pooled must be 55."

    assert trips.get_total_trips_by_pickup_specific_area_and_year(2020,5) == [
        { "year": 2020, "pickup_community_area": 5, "total_trips_pooled":32 },
    ], "Year is 2020, pickup area is 5, and total trips pooled must be 32."

def test_total_trips_by_dropoff_specific_area_and_year():
    con, cur = create_test_db(
        scripts=[
            "./pipeline/load/rideshare.sql",
        ],
        tables={
            "rideshare": [
                { "pickup_community_area": 5, "week": "2019-01-01", "n_trips": 50, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 5, "dropoff_community_area" : 1 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 7, "dropoff_community_area" : 2 },
                { "pickup_community_area": 5, "week": "2019-02-01", "n_trips": 10, "dropoff_community_area" : 2 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips": 32, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-02-01", "n_trips": 12, "dropoff_community_area" : 8 },
                { "pickup_community_area": 76, "week": "2020-01-01", "n_trips": 70, "dropoff_community_area" : 23},
                # This total should not be included in the output, because it has no year
                { "pickup_community_area": 5, "week": None, "n_trips": 1234, "dropoff_community_area" : 76 },
            ],
        }
    )

    trips = RideTrips(con)
    

    assert trips.get_total_trips_by_dropoff_specific_area_and_year(2019,5) == [
        { "year": 2019, "dropoff_community_area": 1, "total_trips":55 },
        { "year": 2019, "dropoff_community_area": 2, "total_trips":17 },
    ], "Year 2019, Pickup area is 5, Dropoff Community Areas are 1 and 2 with 55 and 17 total trips pooled respectively."
    
    assert trips.get_total_trips_by_dropoff_specific_area_and_year(2020,76) == [
        { "year": 2020, "dropoff_community_area": 8, "total_trips":44 },
        { "year": 2020, "dropoff_community_area": 23, "total_trips":70 },
    ], "Year 2020, Pickup area is 76, Dropoff Community Areas are 8 and 23 with 44 and 70 total trips pooled respectively."
    