DROP TABLE IF EXISTS cta_train_stops;
CREATE TABLE cta_train_stops(
    stop_id INTEGER,
    direction_id INTEGER,
    stop_name TEXT,
    station_name TEXT,
    station_descriptive_name TEXT,
    map_id INTEGER,
    ada INTEGER,
    red INTEGER,
    blue INTEGER,
    g INTEGER,
    brn INTEGER,
    p INTEGER,
    pexp INTEGER,
    y INTEGER,
    pnk INTEGER,
    o INTEGER,
    location TEXT,
    PRIMARY KEY(stop_name)
);