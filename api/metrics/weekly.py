from api.utils.database import rows_to_dicts


class WeeklyMetrics:
    """
    Metrics for weekly timeline view.
    """

    def __init__(self, con):
        self.con = con

    def rideshare_pickups(self, since):
        """
        Returns the number of rideshare pickups per week, since the given date
        Args:
            since (str): date string to use as the start of the time period
        """
        query = """
        SELECT
            week as date,
            SUM(n_trips) as value
        FROM rideshare
        WHERE week >= ?
        GROUP BY date
        """
        cur = self.con.cursor()
        cur.execute(query, (since,))
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def rideshare_avg_cost_cents(self, since):
        """
        Returns the average cost in cents of rideshare trips per week, since the given date.
        Args:
            since (str): date string to use as the start of the time period
        """
        query = """
        SELECT
            week as date,
            CAST(
                SUM(n_trips * avg_cost_no_tip_cents)
                / SUM(n_trips)
                as INTEGER) as value
        FROM rideshare
        WHERE week >= ?
        GROUP BY date
        """
        cur = self.con.cursor()
        cur.execute(query, (since,))
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def covid_cases(self):
        """
        Returns the number of COVID cases per week.
        """
        query = """
        SELECT
            week as date,
            SUM(cases_weekly) as value
        FROM covid_spread
        GROUP BY date
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows