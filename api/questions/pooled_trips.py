from api.utils.database import rows_to_dicts


class PooledTripMetrics:
    """
    Metrics for pooled trips question.
    """

    def __init__(self, con):
        self.con = con
    
    def pooled_trip_comparison(self, before, since):
        """
        Computes metrics to compare pooled rideshare trips by community
        area between a before date range and a since date range.
        Metrics:
            - rideshare_pooled_trip_rate_before
            - avg_cost_per_trip_cents_before
            - avg_trips_per_day_before
            - avg_cost_per_trip_cents_since
            - avg_trips_per_day_since
        Args:
            before (tuple): date range for before period as (start, end)
                where start is inclusive and end is exclusive
            since (tuple): date range for since period as (start, end)
                where start is inclusive and end is exclusive
        Returns:
            list of dicts with community area information and
            metrics as keys
        """
        before_start, before_end = before
        since_start, since_end = since
        query_vars = (
            # Check before date range for period
            before_start, before_end,
            # Check since date range for period
            since_start, since_end,
            # Use only before period to compute denominator,
            # assumes before and since ranges are same length
            before_end, before_start
        )
        query = """
        SELECT
            pickup_community_area as area_number,
            CASE
                WHEN week >= ? AND week < ? THEN "before"
                WHEN week >= ? AND week < ? THEN "since"
                ELSE "other"
                END as period,
            CAST(SUM(n_trips_pooled) as REAL)
                / CAST(SUM(n_trips) as REAL) as pooled_trip_rate,
            CAST(
                SUM(n_trips * avg_cost_no_tip_cents)
                / SUM(n_trips)
                as INTEGER) as cost_per_trip,
            CAST(
                SUM(n_trips)
                / (JULIANDAY(?) - JULIANDAY(?))
                as INTEGER) as trips_per_day
        FROM rideshare
        GROUP BY area_number, period
        HAVING period != "other"
        """
        cur = self.con.cursor()
        cur.execute(query, query_vars)
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
    
    def metrics_by_area(self, rows):
        res = {}
        for area in self.community_areas():
            res[area["area_number"]] = area
        for row in rows:
            area = row["area_number"]
            if row["period"] == "before":
                res[area]["pooled_trip_rate_before"] = row["pooled_trip_rate"]
                res[area]["avg_cost_per_trip_cents_before"] = row["cost_per_trip"]
                res[area]["avg_trips_per_day_before"] = row["trips_per_day"]
            elif row["period"] == "since":
                res[area]["avg_cost_per_trip_cents_since"] = row["cost_per_trip"]
                res[area]["avg_trips_per_day_since"] = row["trips_per_day"]
        return list(res.values())
