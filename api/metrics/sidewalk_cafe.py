from api.utils.database import rows_to_dicts

class SidewalkCafeMetrics:
    """
    Metrics for sidewalk cafe permits data.
    """

    def __init__(self, con):
        self.con = con
    
    def get_total_permits_day(self):
        """
        Returns the number of permits issued per day.
        """
        query = """
        SELECT
            issued_date_dt as date,
            count(issued_date_dt) as value
        FROM sidewalk_cafe
        GROUP BY date
        """
        
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def get_total_permits_year(self):
        """
        Returns the number of permits issued in a year.
        """
        query = """
        SELECT
            strftime('%Y', issued_date_dt) || "-01-01" as year,
            count(issued_date_dt) as value
        FROM sidewalk_cafe
        GROUP BY year
        """
        
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows