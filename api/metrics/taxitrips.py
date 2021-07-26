from api.utils.database import rows_to_dicts

#multiple metrics for the taxi trip dataset
class TaxiTripMetrics:
    def __init__(self, connection):
        self.connection = connection
        
    #returns avergae trip speed per pickup area    
    def avg_speed_per_pickup(self):
        query = """
        SELECT pickup_community_area, AVG(trip_miles/(trip_minutes/60)) as avg_speed
        FROM taxitrips
        GROUP BY pickup_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #returns average trip speed per dropoff area
    def avg_speed_per_dropoff(self):
        query = """
        SELECT dropoff_community_area, AVG(trip_miles/(trip_minutes/60)) as avg_speed
        FROM taxitrips
        GROUP BY dropoff_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    
    #takes in pickup_community_area and returns most common dropoff_community_area
    def most_common_dropoff(self, pickup_community_area):
        query = """
        SELECT  pickup_community_area, dropoff_community_area
        FROM  taxitrips
        WHERE pickup_community_area == {pickup_community_area}
        GROUP BY pickup_community_area, dropoff_community_area
        ORDER BY COUNT(*) desc
        LIMIT 1
        """.format(pickup_community_area = pickup_community_area)
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        