from api.utils.database import rows_to_dicts

#multiple taxi trip questions
class TaxiTripQuestions:
    def __init__(self, connection):
        self.connection = connection
   
    #takes in pickup_community_area and returns most common dropoff_community_area
    def most_common_dropoff(self):
        query = """
        SELECT q.area_number, q.value
        FROM(
            SELECT p.area_number, p.value, p.count
            FROM (
                SELECT pickup_community_area as area_number, dropoff_community_area as value, count(1) as count
                FROM  taxitrips
                GROUP BY pickup_community_area, dropoff_community_area
            ) as p
            GROUP BY p.area_number, p.count
        ) as q
        GROUP BY q.area_number
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #gets most used payment type by pickup location
    def get_payment_type_by_pickup(self):
        query = """
        SELECT q.area_number, q.value
        FROM(
            SELECT p.area_number, p.value, p.count
            FROM (
                SELECT pickup_community_area as area_number, payment_type as value, count(1) as count
                FROM  taxitrips
                GROUP BY pickup_community_area, payment_type
            ) as p
            GROUP BY p.area_number, p.count
        ) as q
        GROUP BY q.area_number
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #gets the most used payment type by dropoff location
    def get_payment_type_by_dropoff(self):
        query = """
        SELECT q.area_number, q.value
        FROM(
            SELECT p.area_number, p.value, p.count
            FROM (
                SELECT dropoff_community_area as area_number, payment_type as value, count(1) as count
                FROM  taxitrips
                GROUP BY dropoff_community_area, payment_type
            ) as p
            GROUP BY p.area_number, p.count
        ) as q
        GROUP BY q.area_number
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    