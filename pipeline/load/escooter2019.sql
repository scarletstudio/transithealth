DROP TABLE IF EXISTS Escooter;
CREATE TABLE Escooter (
	start_community_area_name varchar(30) NOT NULL,
	count_trip_id Integer,
	avg_trip_distance Decimal(10,3)
);