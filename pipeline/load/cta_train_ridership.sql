DROP TABLE IF EXISTS cta_train_ridership;
CREATE TABLE cta_train_ridership(
    station_id INTEGER,
    stationname TEXT,
    date DATE,
    daytype TEXT,
    rides INTEGER,
    dt TEXT,
    week_num TEXT,
    week TEXT
);