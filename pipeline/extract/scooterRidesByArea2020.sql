select 
<<<<<<< HEAD
	start_community_area_number, end_community_area_number, count(trip_id), avg(trip_distance)
=======
    start_community_area_number, end_community_area_number, count(trip_id), avg(trip_distance)
>>>>>>> main
where 
	start_time <= "2020-12-12"
group by 
<<<<<<< HEAD
	start_community_area_number, end_community_area_number
=======
    start_community_area_number, end_community_area_number
>>>>>>> main
