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
        Returns the maximum number of trips of any record.
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
