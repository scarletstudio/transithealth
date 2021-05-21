from api.utils.database import rows_to_dicts


class PooledTripMetrics:
    """
    Metrics for pooled trips question.
    """

    def __init__(self, con):
        self.con = con

    def avg_cost_per_trip_cents_by_area(self, start, end):
        """
        Returns the average cost in cents of rideshare trips by community area,
        in the given date range.
        Args:
            start (str): date string for start of time period (inclusive)
            end (str): date string for end of time period (exclusive)
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            CAST(
                SUM(n_trips * avg_cost_no_tip_cents)
                / SUM(n_trips)
                as INTEGER) as value
        FROM rideshare
        WHERE ymd >= ? AND ymd < ?
        GROUP BY area_number
        """
        cur = self.con.cursor()
        cur.execute(query, (start, end))
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def avg_trips_per_day_by_area(self, start, end):
        """
        Returns the average number of rideshare trips by day by community area,
        in the given date range.
        Args:
            start (str): date string for start of time period (inclusive)
            end (str): date string for end of time period (exclusive)
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            CAST(
                SUM(n_trips)
                / (JULIANDAY(?) - JULIANDAY(?))
                as INTEGER) as value
        FROM rideshare
        WHERE ymd < ? AND ymd >= ?
        GROUP BY area_number
        """
        cur = self.con.cursor()
        cur.execute(query, (end, start, end, start))
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
