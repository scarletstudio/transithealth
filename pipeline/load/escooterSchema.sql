DROP TABLE IF EXISTS Escooter;
CREATE TABLE Escooter (
	start_community_area_number Integer NOT NULL,
	end_community_area_number Integer Not Null,
	count_trip_id Integer,
	avg_trip_distance Decimal(10,3)
);