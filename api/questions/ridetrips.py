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
        
    def get_total_trips_by_pickup_ohare_2019(self):
        """
        Returns the total number of total number of pickups from ohare in 2019
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as pickup_year_2019,
            pickup_community_area,
            sum(n_trips) as pickup_2019
        FROM 
            rideshare
        WHERE 
            pickup_year_2019 == 2019 AND pickup_community_area == 76
        GROUP BY
            pickup_year_2019
            AND pickup_community_area
        HAVING
            pickup_community_area not null
            AND pickup_year_2019 not null
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def get_total_trips_by_pickup_ohare_2020(self):
        """
        Returns the total number of total number of pickups from ohare in 2020
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as pickup_year_2020,
            pickup_community_area,
            sum(n_trips) as pickup_2020
        FROM 
            rideshare
        WHERE 
            pickup_year_2020 == 2020 AND pickup_community_area == 76
        GROUP BY
            pickup_year_2020
            AND pickup_community_area
        HAVING
            pickup_community_area not null
            AND pickup_year_2020 not null
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_total_trips_by_dropoff_ohare_2019(self):
        """
        Returns the total number of dropoffs from ohare in 2019.
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as dropoff_year_2019,
            dropoff_community_area,
            sum(n_trips) as dropoff_2019
        FROM 
            rideshare
        WHERE 
            dropoff_year_2019 == 2019 AND pickup_community_area == 76
        GROUP BY 
            dropoff_community_area
        HAVING
            dropoff_year_2019 not null
            AND pickup_community_area not null
            AND dropoff_community_area not null
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def get_total_trips_by_dropoff_ohare_2020(self):
        """
        Returns the total number of dropoffs from ohare in 2020.
        """
        query = """
        SELECT
            CAST(strftime('%Y', week) as INTEGER) as dropoff_year_2020,
            dropoff_community_area,
            sum(n_trips) as dropoff_2020
        FROM 
            rideshare
        WHERE 
            dropoff_year_2020 == 2020 AND pickup_community_area == 76
        GROUP BY 
            dropoff_community_area
        HAVING
            dropoff_year_2020 not null
            AND pickup_community_area not null
            AND dropoff_community_area not null
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows