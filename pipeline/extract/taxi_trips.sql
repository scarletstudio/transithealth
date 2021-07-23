SELECT date_trunc_ymd(trip_start_timestamp) as ymd, 
    trip_id, 
    taxi_id, 
    trip_miles, 
    trip_seconds/60 as trip_minutes,
    pickup_community_area,
    dropoff_community_area,
    payment_type
    
WHERE trip_end_timestamp > "2021-01-01"


LIMIT 100000
