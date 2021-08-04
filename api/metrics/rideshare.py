from api.utils.database import rows_to_dicts


class RideshareMetrics:
    """
    Metrics for rideshare data.
    """

    def __init__(self, con):
        self.con = con

    def get_max_trips(self):
        """
        Returns the maximum number of trips of any record.
        """
        query = """
        SELECT max(n_trips)
        FROM rideshare
        """
        cur = self.con.cursor()
        cur.execute(query)
        val = cur.fetchone()[0]
        return { "max_trips": val }

    def get_total_trips_by_pickup_area(self):
        """
        Returns the total number of trips by pickup area.
        """
        query = """
        SELECT
            pickup_community_area,
            sum(n_trips) as total_trips
        FROM rideshare
        GROUP BY pickup_community_area
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def get_total_trips_by_pickup_part_and_year(self):
        """
        Returns the total number of trips by pickup part of city and year.
        """
        query = """
        SELECT
            a.part as pickup_part,
            CAST(strftime('%Y', r.week) as INTEGER) as year,
            sum(r.n_trips) as total_trips
        FROM rideshare r
            LEFT JOIN community_area a
            ON r.pickup_community_area == a.area_number
        GROUP BY
            pickup_part,
            year
        HAVING
            pickup_part not null
            AND year not null
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_total_trips_pooled_by_pickup_specific_area_and_year(self, year, pickup_area):
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
        Returns the total number of trips from the chosen part for the particular year.
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
