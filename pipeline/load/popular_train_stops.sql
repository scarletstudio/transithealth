DROP TABLE IF EXISTS popular_train_stops;
CREATE TABLE popular_train_stops(
    station_id INTEGER,
    stationname TEXT,
    date DATE,
    daytype TEXT,
    rides INTEGER,
    dt TEXT,
    week_num TEXT,
    week TEXT
);