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
    
    def disabilities_ridership_per_station_metrics(self):
        """
        Returns average trips a year before and since covid 
        per CTA train stop. Also displays if stop is 
        ADA compatible or not. 
        """
        
        query = """
        SELECT 
            c.station_id,
            c.ada,
            r.*
        FROM cta_train_stops c
            LEFT JOIN (
                SELECT
                    station_id,
                    stationname,
                    SUM(CASE WHEN date < '2021-03-01' THEN rides ELSE 0 END) / 365 AS avg_trips_before,
                    SUM(CASE WHEN date >= '2020-03-01' THEN rides ELSE 0 END) / 365 AS avg_trips_since
                FROM cta_train_ridership
                WHERE 
                    date >= '2019-03-01'
                    AND date < '2021-03-01'
                GROUP BY
                    station_id
                ) r
            ON c.station_id = r.station_id
            GROUP BY station_id
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def disabilities_cta_percent_change_metrics(self):
        """
        Returns percent change between cta train stops 
        that are ADA accessible and stops that are not. 
        """
        
        query = """
        SELECT 
            c.ada,
            COUNT(DISTINCT r.station_id) AS num_stations,
            SUM(total_trips_before) / 365 AS avg_trips_before,
            SUM(total_trips_since) / 365 AS avg_trips_since,
            (total_trips_since - total_trips_before) / total_trips_before AS percent_change
        FROM cta_train_stops c
            LEFT JOIN (
                SELECT
                    station_id,
                    CAST(SUM(CASE WHEN date < '2021-03-01' THEN rides ELSE 0 END) AS REAL) AS total_trips_before,
                    CAST(SUM(CASE WHEN date >= '2020-03-01' THEN rides ELSE 0 END) AS REAL) AS total_trips_since
                FROM cta_train_ridership
                WHERE 
                    date >= '2019-03-01'
                    AND date < '2021-03-01'
                GROUP BY
                    station_id
                ) r
            ON c.station_id = r.station_id
        GROUP BY c.ada
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
        
    def disabilities_cta_by_community_area(self):
        """
        Returns the average number of rides per cta stop a year before 
        and since covid, by community area. 
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
                    area_number,
                    SUM(CASE WHEN date < '2021-03-01' THEN rides ELSE 0 END) / 365 AS avg_trips_before,
                    SUM(CASE WHEN date >= '2020-03-01' THEN rides ELSE 0 END) / 365 AS avg_trips_since
                FROM (
                    SELECT 
                        cta_train_ridership.*,
                        cta_train_stops.area_number
                    FROM cta_train_ridership
                    LEFT JOIN cta_train_stops 
                        ON cta_train_ridership.station_id = cta_train_stops.station_id          
                )
                WHERE 
                    date >= '2019-03-01'
                    AND date < '2021-03-01'
                GROUP BY 
                    area_number 
            ) r
                ON c.area_number = r.area_number
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