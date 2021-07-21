select 
    start_community_area_name, count(trip_id), avg(trip_distance)
where 
    start_time <= "2020-12-12"
group by 
    start_community_area_name