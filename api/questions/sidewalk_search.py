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
        # Create a view for matching results
        statements = """
        
        -- Remove this view if it exists
        DROP VIEW IF EXISTS sidewalk_search;
        
        -- Get matching sidewalk permits
        CREATE VIEW sidewalk_search AS
        SELECT *
        FROM sidewalk_cafe
        WHERE LOWER(doing_business_as_name) LIKE '%{search}%';
        
        """.format(search=search)
        # Then sort the results
        query = """
        SELECT *
        FROM sidewalk_search
        ORDER BY issued_date_dt DESC
        """
        cur = self.con.cursor()
        cur.executescript(statements)
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows