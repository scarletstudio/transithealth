select start_community_area_name, count(trip_id), avg(trip_distance)
where start_time <= "2019-10-16"
group by start_community_area_name