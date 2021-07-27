select 
    start_community_area_number, end_community_area_number, count(trip_id), avg(trip_distance)
where 
    start_time <= "2020-12-12"
group by 
    start_community_area_number, end_community_area_number