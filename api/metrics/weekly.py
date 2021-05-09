from api.utils.database import rows_to_dicts


class WeeklyMetrics:
    """
    Metrics for weekly timeline view.
    """

    def __init__(self, con):
        self.con = con

    def rideshare_pickups(self):
        """
        Returns the number of rideshare pickups per week, since March 2020.
        """
        query = """
        SELECT
            week,
            SUM(n_trips) as value
        FROM rideshare
        WHERE ymd >= "2020-03-02"
        GROUP BY week
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def covid_cases(self):
        """
        Returns the number of COVID cases per week.
        """
        query = """
        SELECT
            week,
            SUM(cases_weekly) as value
        FROM covid_spread
        GROUP BY week
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
