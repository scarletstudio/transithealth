DROP TABLE IF EXISTS daily_bus_ridership;
CREATE TABLE daily_bus_ridership(
    route INTEGER,
    date DATE,
    daytype TEXT,
    rides INTEGER,
    week TEXT
);