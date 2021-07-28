
        
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
        
    #gets most used payment type by pickup location
    def get_payment_type_by_pickup(self):
        query = """
        SELECT  pickup_community_area as area_number, payment_type as value
        FROM  taxitrips
        GROUP BY pickup_community_area, payment_type
        ORDER BY COUNT(*) desc
        LIMIT 1
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    #gets the most used payment type by dropoff location
    def get_payment_type_by_dropoff(self):
        query = """
        SELECT  dropoff_community_area as area_number, payment_type as value
        FROM  taxitrips
        GROUP BY dropoff_community_area, payment_type
        ORDER BY COUNT(*) desc
        LIMIT 1
        """
        cur = self.connection.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    