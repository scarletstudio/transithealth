SELECT
    date_trunc_ymd(trip_start_timestamp) as ymd,
    pickup_community_area,
    dropoff_community_area,
    count(1) as n_trips
GROUP BY ymd, pickup_community_area, dropoff_community_area
LIMIT 190000000