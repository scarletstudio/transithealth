from api.utils.database import rows_to_dicts


class DisabilitiesMetrics:
    """
    Metrics for disabilities question.
    """

    def __init__(self, con):
        self.con = con
    
    def disabilities_rideshare_metrics(self):
        """
        Compares rideshare trips per day before and since covid 
        along with the rate of disabilities in each area. 
        """
        
        query = """
        SELECT 
            c.name,
            c.part,
            c.population,
            c.area_number,
            r.*,
            d.*
        FROM community_area c
            LEFT JOIN (
                SELECT 
                    pickup_community_area,
                    SUM(CASE WHEN week < '2021-03-01' THEN n_trips ELSE 0 END) / 365 AS avg_trips_before,
                    SUM(CASE WHEN week >= '2020-03-01' THEN n_trips ELSE 0 END) / 365 AS avg_trips_since
                FROM rideshare
                WHERE 
                    week >= '2019-03-01'
                    AND week < '2021-03-01'
                GROUP BY 
                    pickup_community_area 
            ) r
                ON c.area_number = r.pickup_community_area
            LEFT JOIN (
                SELECT *
                FROM disabilities
                WHERE period_end_year = 2019
                AND segment = 'all'
            ) d 
                ON c.area_number = d.area_number
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows