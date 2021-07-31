from api.utils.database import rows_to_dicts

class SidewalkCafePermitSearch:
    """
    Search for sidewalk cafe permits.
    """

    def __init__(self, con):
        self.con = con
        
    def search_permits(self, search):
        """
        Returns permits for restaurants that match the search query.
        """
        query = """
        SELECT
            doing_business_as_name
        FROM sidewalk_cafe
        WHERE LOWER(doing_business_as_name) LIKE '%{search}%'
        ORDER BY issued_date_dt DESC
        """.format(search=search)
        
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        print(rows)
        return rows