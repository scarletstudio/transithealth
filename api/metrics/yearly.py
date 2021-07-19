from api.utils.database import rows_to_dicts


class YearlyMetrics:
    """
    Metrics for yearly timeline view.
    """

    def __init__(self, con):
        self.con = con

    def belonging(self, segment):
        """
        Returns the rate of belonging of a segment per year
        """
        query = """
        SELECT
            period_end_year || "-01-01" as date,
            value / 100 AS value,
            segment
        FROM belonging
        WHERE layer = "place"
        AND segment == "{segment}"
        GROUP BY date
        """.format(segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows