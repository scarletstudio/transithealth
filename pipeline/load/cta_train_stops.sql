-- map_id is the same as the station_id value in cta_train_ridership
DROP TABLE IF EXISTS cta_train_stops;
CREATE TABLE cta_train_stops(
    stop_name TEXT,
    station_name TEXT,
    map_id INTEGER,
    ada TEXT,
    location
    PRIMARY KEY(stop_name)
);