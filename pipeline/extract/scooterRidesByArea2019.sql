select
	start_community_area_number, end_community_area_number, count(trip_id), avg(trip_distance)
where
	start_time <= "2019-10-16"
group by
	start_community_area_number, end_community_area_number
