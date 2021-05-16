SELECT
    date_trunc_ymd(trip_start_timestamp) as ymd,
    pickup_community_area,
    dropoff_community_area,
    count(1) as n_trips,
    sum(case(trips_pooled > 1, 1, true, 0)) as n_trips_pooled
GROUP BY ymd, pickup_community_area, dropoff_community_area
LIMIT 190000000