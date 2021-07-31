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
            strftime('%Y', issued_date_dt) || "-01-01" as date,
            count(issued_date_dt) as value
        FROM sidewalk_cafe
        GROUP BY date
        """
        
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def search_permits(self, query):
        """
        Returns permits for restaurants that match the search query.
        """
        query = """
        SELECT *
        FROM sidewalk_cafe
        WHERE LOWER(doing_business_as_name) LIKE '%{query}%'
        """.format(query=query)
        
        cur = self.con.cursor()
        cur.executescript(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows