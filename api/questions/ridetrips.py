from api.utils.database import rows_to_dicts

class RideTrips:
    """
    Pooled rideshares and dropoffs by areas.
    """

    def __init__(self, con):
        self.con = con

    def get_total_trips_pooled_by_pickup_specific_area_and_year(self, year, pickup_area):
        """
        Returns the total number of pooled trips from the chosen part for the particular year.
        Args:
            year (int)
            pickup_area (int)
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as year,
            pickup_community_area,
            sum(n_trips_pooled) as total_trips_pooled
        FROM 
            rideshare
        WHERE 
            year == {year} AND pickup_community_area == {pickup_area}
        GROUP BY
            year
            AND pickup_community_area
        HAVING
            pickup_community_area not null
            AND year not null
        """.format(year=year, pickup_area=pickup_area)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_total_trips_pooled_by_dropoff_specific_area_and_year(self, year, pickup_area):
        """
        Returns the total number of pooled trips from the chosen part for the particular year.
        Args:
            year (int)
            pickup_area (int)
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as year,
            dropoff_community_area,
            sum(n_trips_pooled) as total_trips_pooled
        FROM 
            rideshare
        WHERE 
            year == {year} AND pickup_community_area == {pickup_area}
        GROUP BY 
            dropoff_community_area
        HAVING
            year not null
            AND pickup_community_area not null
            AND dropoff_community_area not null
        """.format(year=year, pickup_area=pickup_area)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def get_total_trips_by_pickup_specific_area_and_year(self, year, pickup_area):
        """
        Returns the total number of trips from the chosen part for the particular year.
        Args:
            year (int)
            pickup_area (int)
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as year,
            pickup_community_area,
            sum(n_trips) as total_trips
        FROM 
            rideshare
        WHERE 
            year == {year} AND pickup_community_area == {pickup_area}
        GROUP BY
            year
            AND pickup_community_area
        HAVING
            pickup_community_area not null
            AND year not null
        """.format(year=year, pickup_area=pickup_area)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_total_trips_by_dropoff_specific_area_and_year(self, year, pickup_area):
        """
        Returns the total number of trips from the chosen part for the particular year.
        Args:
            year (int)
            pickup_area (int)
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as year,
            dropoff_community_area,
            sum(n_trips) as total_trips
        FROM 
            rideshare
        WHERE 
            year == {year} AND pickup_community_area == {pickup_area}
        GROUP BY 
            dropoff_community_area
        HAVING
            year not null
            AND pickup_community_area not null
            AND dropoff_community_area not null
        """.format(year=year, pickup_area=pickup_area)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def community_areas(self):
        """
        Returns all of the community areas.
        """
        query = """
        SELECT
            area_number,
            name,
            part
        FROM community_area
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def metrics_by_area(self,rows):
        """
        Returns the rows, but with a new column that contains the area names
        """
        ls = self.community_areas()
        
        for area in ls:
            y = area['area_number'] 
            #x = rows[y-1]['dropoff_community_area']
            x = rows[y-1]['dropoff_community_area']
            if x == y:
                rows[y-1]['area_name'] = area['name']
                
        return rows