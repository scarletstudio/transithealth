from api.utils.database import rows_to_dicts

class CommunityMetrics:
    """
    Metrics for community area data.
    """

    def __init__(self, con):
        self.con = con

    def cases_by_age_given_week(self, date):
        """
        Returns the number of cases grouped demographically
        by age
        """
        query = """
        SELECT
            
        From 
            Covid_cases_deaths_data
        Group by
            year, month
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        
    def deaths_by_age_given_month(self, m, y):
        """
        Returns the number of cases grouped demographically
        by age
        """
        query = """
        SELECT
            deaths_age_0_17,
            deaths_age_18_29,
            deaths_age_30_39,
            deaths_age_40_49,
            deaths_age_50_59,
            deaths_age_60_69,
            deaths_age_70_79,
            deaths_age_80_
        From 
            Covid_cases_deaths_data
        Where
            month == {m}
            AND year == {y}
        """.format( m = m, y = y)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())