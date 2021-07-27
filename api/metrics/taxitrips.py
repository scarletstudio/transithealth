from api.utils.database import rows_to_dicts

#multiple metrics for the taxi trip dataset
class TaxiTripMetrics:
    def __init__(self, connection):
        self.connection = connection
        
    #returns avergae trip speed per pickup area    
    def get_avg_speed_per_pickup(self):
        query = """
        SELECT pickup_community_area as area_number, AVG(trip_miles/(trip_minutes/60)) as value
        FROM taxitrips
        GROUP BY pickup_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #returns average trip speed per dropoff area
    def get_avg_speed_per_dropoff(self):
        query = """
        SELECT dropoff_community_area as area_number, AVG(trip_miles/(trip_minutes/60)) as value
        FROM taxitrips
        GROUP BY dropoff_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        