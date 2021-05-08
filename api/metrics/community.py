from api.utils.database import rows_to_dicts


class CommunityMetrics:
    """
    Metrics for community area data.
    """

    def __init__(self, con):
        self.con = con

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

    def rideshare_total_pickups(self):
        """
        Returns the total number of rideshare pickups, by community area, since March 2020.
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            sum(n_trips) as value
        FROM rideshare
        WHERE ymd >= "2020-03-01"
        GROUP BY area_number
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def demography(self, column_name):
        """
        Returns the demography value of `column_name` for each community area.
        """
        query = """
        SELECT
            area_number,
            {column_name} as value
        FROM demography
        """.format(column_name=column_name)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def covid_spread_sum_by_area(self, column_name):
        """
        Returns the sum of `column_name` from the COVID spread table for each community area.
        """
        query = """
        SELECT
            area as area_number,
            SUM({column_name}) as value
        FROM covid_spread
        GROUP BY area
        """.format(column_name=column_name)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
