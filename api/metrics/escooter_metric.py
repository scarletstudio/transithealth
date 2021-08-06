from api.utils.database import rows_to_dicts


class EscooterMetric:
    """
    Metrics for escooter travel metric
    """

    def __init__(self, con):
        self.con = con
        
    def avg_distance_x_to_y(self):
        """
        Returns the average distance riders take throughout
        the city
        """
        query = """
        SELECT
            start_community_area_number, end_community_area_number, avg_trip_distance
        From 
            Escooter
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def avg_distance_based_on_start_can(self):
        """
        Returns the avg distance traveled based on starting community area numbers
        """
        query = """
        SELECT
            start_community_area_number AS area_number, avg(avg_trip_distance_miles) AS value
        From 
            Escooter
        Group by
            start_community_area_number
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def avg_distance_based_on_end_can(self):
        """
        Returns the avg distance traveled based on end community area numbers
        """
        query = """
        SELECT
            end_community_area_number AS area_number, avg(avg_trip_distance_miles) AS value
        From 
            Escooter
        Group by
            end_community_area_number
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def number_of_trips_x_to_y (self):
        """
        Returns the number of trips logged from one specific area
        to another
        """
        query = """
        SELECT
            start_community_area_number, end_community_area_number, count_trip_id
        From 
            Escooter
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def number_of_trips_based_on_start_cn (self):
        """
        Returns the number of trips from all communities that had at least
        one ride start there
        """
        query = """
        SELECT
            start_community_area_number AS area_number, sum(count_trip_id) AS value
        From 
            Escooter
        Group by
            start_community_area_number
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def number_of_trips_based_on_end_cn (self):
        """
        Returns the number of trips from all communities that had
        at least one ride end there
        """
        query = """
        SELECT
            end_community_area_number AS area_number, sum(count_trip_id) AS value
        From 
            Escooter
        Group by
            end_community_area_number
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def total_escooter_rides(self):
        """
        Returns the number of trips taken by escooters in 2019
        """
        query = """
        SELECT
            sum(count_trip_id) AS value
        From 
            Escooter
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows