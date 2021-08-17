from api.utils.database import rows_to_dicts

class Covid_CDD_Metric:
    """
    Metrics for community area data.
    """

    def __init__(self, con):
        self.con = con

    def cases_for_given_age(self, givenAge):
        """
        Returns the number of cases week by week from March 2020 - July 2021 given 
        age (in "minAge_maxAge" format in following increments:
            0_17, 18_29, 30_39, 40_49, 50_59, 60_69, 70_79, 80_)
        """
        query = """
        SELECT
            week as date, cases_age_{givenAge} as value
        From 
            Covid_cases_deaths_data
        """.format(givenAge = givenAge)
        print(query)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def deaths_for_given_age(self, givenAge):
        """
        Returns the number of cases week by week from March 2020 - July 2021 given 
        age (in "minAge_maxAge" format in following increments:
            0_17, 18_29, 30_39, 40_49, 50_59, 60_69, 70_79, 80_)
        """
        query = """
        SELECT
            week as date, deaths_{givenAge}yrs as value
        From 
            Covid_cases_deaths_data
        """.format(givenAge = givenAge)
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    def totalCases(self):
        """
        Returns the number of cases week by week from March 2020 - July 2021 
        """
        query = """
        SELECT
            week as date, cases_total as value
        From 
            Covid_cases_deaths_data
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def totalDeaths(self):
        """
        Returns the number of deaths week by week from March 2020 - July 2021 
        """
        query = """
        SELECT
            week as date, deaths_total as value
        From 
            Covid_cases_deaths_data
        """.format()
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows