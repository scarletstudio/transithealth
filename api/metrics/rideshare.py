from api.utils.database import rows_to_dicts


class RideshareMetrics:
    """
    Metrics for rideshare data.
    """

    def __init__(self, cur):
        self.cur = cur

    def get_max_trips(self):
        """
        Returns the maximum number of trips of any record.
        """
        query = """
        SELECT max(n_trips)
        FROM rideshare
        """
        self.cur.execute(query)
        val = self.cur.fetchone()[0]
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
        self.cur.execute(query)
        return rows_to_dicts(self.cur, self.cur.fetchall())
