from api.utils.database import rows_to_dicts


class AnnuallyMetrics:
    """
    Metrics for annually timeline view.
    """

    def __init__(self, con):
        self.con = con

    def belonging(self, segment):
        """
        Returns the rate of belonging of each segment per year
        """
        query = """
        SELECT
            period_end_year AS year,
            value / 100 AS value,
            segment
        FROM belonging
        WHERE layer = "place"
        AND segment == "{segment}"
        GROUP BY year
        """.format(segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows