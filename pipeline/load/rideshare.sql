DROP TABLE IF EXISTS rideshares;
CREATE TABLE rideshares (
    ymd TEXT,
    week TEXT,
    pickup_community_area INTEGER,
    dropoff_community_area INTEGER,
    n_trips INTEGER
);