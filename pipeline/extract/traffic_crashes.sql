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
WHERE
    date_extract_y(crash_date) > 5
ORDER BY 
    crash_date desc
LIMIT 1000