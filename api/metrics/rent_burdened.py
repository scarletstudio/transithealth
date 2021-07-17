from api.utils.database import rows_to_dicts


class RentBurdenedMetrics:
    """
    Metrics for rent burdened households data.
    """

    def __init__(self, con):
        self.con = con

    def rent_burdened(self, year, segment):
        """
        Returns the percent of households who are rent burdened in the area,
        and the area number.
        Args:
            year (int): period ending year to filter by
            segment (str): population segment to filter by
        """
        query = """
        SELECT
            area_number,
            value / 100.00 AS value
        FROM rent_burdened_households
        WHERE period_end_year == {year}
        AND segment == "{segment}"
        """.format(year=year, segment=segment)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def get_max_burdened(self):
        """
        Returns the highest percentage of rent burdened households in an area,
        its area number, and the period.
        """
        query = """
        SELECT
            max(ROUND(value,2)) AS value,
            area_number,
            period_end_year
        FROM rent_burdened_households
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_min_burdened(self):
        """
        Returns the smallest percentage of rent burdened households in an area,
        its area number, and the period end year.
        """
        query = """
        SELECT
            min(ROUND(value,2)) AS value,
            area_number,
            period_end_year
        FROM rent_burdened_households
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def average_burden_area(self):
        """
        Returns the average percentage of rent burdened households by area
        across all periods.
        """
        query = """
        SELECT
            ROUND(avg(value),2) AS "avg value",
            area_number
        FROM rent_burdened_households
        GROUP BY area_number
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows