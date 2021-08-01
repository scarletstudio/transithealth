from api.utils.database import rows_to_dicts


class TrainWeeklyMetrics:
    """
    Metrics for weekly timeline view.
    """

    def __init__(self, con):
        self.con = con

    def cta_train_ridership_weekly(self, since):
        """
        Returns the number of train trips per week, since the given date
        Args:
            since (str): date string to use as the start of the time period
        """
        query = """
        SELECT
            week as date,
            SUM(rides) as value
        FROM cta_train_ridership
        WHERE week >= ?
        GROUP BY date
        """
        cur = self.con.cursor()
        cur.execute(query, (since,))
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
