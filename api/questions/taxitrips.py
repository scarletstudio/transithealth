from api.utils.database import rows_to_dicts

#multiple taxi trip questions
class TaxiTripQuestions:
    def __init__(self, connection):
        self.connection = connection
   
    #takes in pickup_community_area and returns most common dropoff_community_area
    def most_common_dropoff(self):
        query = """
        SELECT
            pickup_community_area,
            dropoff_community_area,
            max(count) as max_count
        FROM (
            SELECT
                pickup_community_area,
                dropoff_community_area,
                count(1) as count
            FROM taxitrips
            GROUP BY
                pickup_community_area,
                dropoff_community_area
            )
        GROUP BY pickup_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #gets most used payment type by pickup location
    def get_payment_type_by_pickup(self):
        query = """
        SELECT
            pickup_community_area,
            payment_type,
            max(count) as max_count
        FROM (
            SELECT
                pickup_community_area,
                payment_type,
                count(1) as count
            FROM taxitrips
            GROUP BY
                pickup_community_area,
                payment_type
            )
        GROUP BY pickup_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #gets the most used payment type by dropoff location
    def get_payment_type_by_dropoff(self):
        query = """
        SELECT
            dropoff_community_area,
            payment_type,
            max(count) as max_count
        FROM (
            SELECT
                dropoff_community_area,
                payment_type,
                count(1) as count
            FROM taxitrips
            GROUP BY
                dropoff_community_area,
                payment_type
            )
        GROUP BY dropoff_community_area
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    