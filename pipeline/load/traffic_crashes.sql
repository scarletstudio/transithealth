DROP TABLE IF EXISTS traffic_crashes;
CREATE TABLE traffic_crashes (
    crash_date DATE,
    posted_speed_limit INTEGER,
    weather_condition TEXT,
    lighting_condition TEXT,
    report_type TEXT,
    crash_type TEXT,
    hit_and_run_i TEXT,
    damage TEXT,
    date_police_notified DATE,
    injuries_total INTEGER,
    injuries_fatal INTEGER,
    injuries_incapacitating INTEGER, 
    crash_day_of_week INTEGER,
    latitude DOUBLE, 
    longitude DOUBLE
);