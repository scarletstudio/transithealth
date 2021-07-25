from api.utils.database import rows_to_dicts

#multiple metrics for the taxi trip dataset
class TaxiTripMetrics:
    def __init__(self, connection):
        self.connection = connection
        
        
#gets the average speed of a taxi 
    def avgtaxispeed(self):
        query = """
        SELECT
            trip_miles,
            trip_minutes/60 as trip_hours,
            trip_miles/trip_hours as trip_speed
        FROM taxitrips
        GROUP BY taxi_id
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
#takes in pickup_community_area and returns most common dropoff_community_area
    def maxdropoff(self, pickup_community_area):
        query = """
        SELECT max(dropoff_community_area)
        FROM taxitrips
        WHERE pickup_community_area == {pickup_community_area}
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        