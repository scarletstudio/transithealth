from api.utils.database import rows_to_dicts


class EscooterMetric:
    """
    Metrics for escooter travel metric
    """

    def __init__(self, con):
        self.con = con
        
    def avg_distance_x_to_y(self, x, y):
        """
        Returns the average distance riders take from a location x to a location y
        Args:
            x (int)
            y (int)
        """
        query = """
        SELECT
            avg_trip_distance
        From 
            Escooter
        Where
            start_community_area_number == {x} And end_community_area_number == {y}
        """.format(x = x, y = y)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def avg_distance_based_on_start(self, start_location):
        """
        Returns the avg distance traveled by riders starting a specific location to different locations
        Args:
            start_location (int)
        """
        query = """
        SELECT
            avg_trip_distance
        From 
            Escooter
        Where
            start_community_area_number == {start_location}
        """.format(start_location= start_location)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def avg_distance_based_on_end(self, end_location):
        """
        Returns the avg distance traveled by riders starting at different locations to a specific end location
        Args:
            end_location (int)
        """
        query = """
        SELECT
            avg_trip_distance
        From
            Escooter
        Where
            end_community_area_number = {end_location}
        """.format(end_location = end_location)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def number_of_trips_x_to_y (self, x, y):
        """
        Returns the number of trips from one specific area to another specific area
        Args:
            x (int)
            y (int)
        """
        query = """
        SELECT
            count_trip_id
        From 
            Escooter
        Where
            start_community_area_number == {x} And end_community_area_number == {y}
        """.format(x = x, y = y)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def number_of_trips_from_this_start (self, x):
        """
        Returns the number of trips from one specific area
        Args:
            x (int)
        """
        query = """
        SELECT
            sum(count_trip_id)
        From 
            Escooter
        Where
            start_community_area_number == {x}
        """.format(x = x)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def number_of_trips_from_this_end (self, y):
        """
        Returns the number of trips from one specific end
        Args:
            x (int)
        """
        query = """
        SELECT
            sum(count_trip_id)
        From 
            Escooter
        Where
            end_community_area_number == {x}
        """.format(y = y)
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
            sum(count_trip_id)
        From 
            Escooter
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows