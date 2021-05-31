SELECT
    date_trunc_ymd(trip_start_timestamp) as ymd,
    pickup_community_area,
    dropoff_community_area,
    count(1) as n_trips,
    sum(case(
        trips_pooled > 1, 1,
        shared_trip_authorized, 1,
        true, 0
        )) as n_trips_pooled_authorized,
    sum(case(
        trips_pooled > 1, 1,
        true, 0
        )) as n_trips_pooled,
    avg(fare + additional_charges) as avg_cost_no_tip,
    stddev_samp(fare + additional_charges) as std_cost_no_tip
WHERE
    (fare + additional_charges) <= 300
    AND fare is not null
    AND additional_charges is not null 
    AND trip_end_timestamp <= "2021-05-01"
GROUP BY
    ymd,
    pickup_community_area,
    dropoff_community_area
LIMIT 190000000