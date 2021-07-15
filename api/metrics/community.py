from api.utils.database import rows_to_dicts


class CommunityMetrics:
    """
    Metrics for community area data.
    """

    def __init__(self, con):
        self.con = con

    def merge_metrics(self, metric_fns):
        """
        Runs all of the provided metric functions and merges the output.
        Args:
            metric_fns (dict<str: fn>): map of metric names to metric functions
        Returns:
            List of dicts with area information and metrics as keys
        """
        res = {}
        for area in self.community_areas():
            res[area["area_number"]] = area
        for metric_name, metric_fn in metric_fns.items():
            for row in metric_fn():
                number = row["area_number"]
                if number in res:
                    res[number][metric_name] = row["value"]
        return [ v for v in res.values() ]

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
        WHERE week >= "2020-03-01"
        GROUP BY area_number
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def rideshare_pooled_trip_rate(self, year):
        """
        Returns the fraction of rideshare trips that were pooled, by community area, in the given year.
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            CAST(sum(n_trips_pooled) as REAL) / CAST(sum(n_trips) as REAL) as value
        FROM rideshare
        WHERE strftime('%Y', week) == '{year}'
        GROUP BY area_number
        """.format(year=year)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def rideshare_pool_request_rate(self, year):
        """
        Returns the fraction of rideshare trips where a pool was requested, by community area, in the given year.
        """
        query = """
        SELECT
            pickup_community_area as area_number,
            CAST(sum(n_trips_pooled_authorized) as REAL) / CAST(sum(n_trips) as REAL) as value
        FROM rideshare
        WHERE strftime('%Y', week) == '{year}'
        GROUP BY area_number
        """.format(year=year)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def population(self, year, segment):
        """
        Returns the rounded population value for each community area.
        Args:
            year (int): period ending year to filter by
            segment (str): population segment to filter by
        """
        query = """
        SELECT
            area_number,
            CAST(value AS INTEGER) AS value
        FROM population
        WHERE period_end_year == {year}
        AND segment == "{segment}"
        """.format(year=year, segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows

    def income(self, year, segment):
        """
        Returns the rounded income value for each community area.
        Args:
            year (int): period ending year to filter by
            segment (str): population segment to filter by
        """
        query = """
        SELECT
            area_number,
            CAST(value AS INTEGER) AS value
        FROM income
        WHERE period_end_year == {year}
        AND segment == "{segment}"
        """.format(year=year, segment=segment)
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
        
    def disability_rate(self, year, segment):
        """
        Returns the rounded income value for each community area.
        Args:
            year (int): period ending year to filter by
            segment (str): population segment to filter by
        """
        query = """
        SELECT
            area_number,
            value / 100 AS value
        FROM disabilities
        WHERE period_end_year == {year}
        AND segment == "{segment}"
        """.format(year=year, segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
