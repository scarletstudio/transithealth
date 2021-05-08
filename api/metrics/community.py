from api.utils.database import rows_to_dicts


class CommunityMetrics:
    """
    Metrics for community area data.
    """

    def __init__(self, cur):
        self.cur = cur

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
        self.cur.execute(query)
        return rows_to_dicts(self.cur, self.cur.fetchall())

    def rideshare_total_pickups(self):
        """
        Returns the total number of rideshare pickups, by community area.
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            sum(n_trips) as value
        FROM rideshare
        GROUP BY area_number
        """
        self.cur.execute(query)
        return rows_to_dicts(self.cur, self.cur.fetchall())
    
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
        self.cur.execute(query)
        return rows_to_dicts(self.cur, self.cur.fetchall())
