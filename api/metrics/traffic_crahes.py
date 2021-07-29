from api.utils.database import rows_to_dicts

class TrafficCrashMetrics:
    """
    Metrics for traffic crashes.
    """

    def __init__(self, con):
        self.con = con

    def traffic_crashes(self):
        """
        Returns all traffic crashes
        """
        query = """
        SELECT
            crash_date,
            posted_speed_limit,
            weather_condition,
            lighting_condition,
            report_type,
            crash_type,
            hit_and_run_i,
            damage,
            date_police_notified,
            injuries_total,
            injuries_fatal,
            injuries_incapacitating, 
            crash_day_of_week,
            latitude, 
            longitude
        FROM traffic_crashes
        """
        cur = self.con.cursor()
        cur.execute(query)
        rows = rows_to_dicts(cur, cur.fetchall())
        return rows
    
    
