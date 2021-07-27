DROP TABLE IF EXISTS cta_train_stops;
CREATE TABLE cta_train_stops(
    stop_id INTEGER,
    direction_id INTEGER,
    stop_name TEXT,
    station_name TEXT,
    station_descriptive_name TEXT,
    station_id INTEGER,
    ada INTEGER,
    red INTEGER,
    blue INTEGER,
    green INTEGER,
    brown INTEGER,
    purple INTEGER,
    purple_express INTEGER,
    yellow INTEGER,
    pink INTEGER,
    orange INTEGER,
    longitude REAL,
    latitude REAL,
    PRIMARY KEY(station_id, stop_id)
);