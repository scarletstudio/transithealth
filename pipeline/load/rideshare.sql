DROP TABLE IF EXISTS rideshare;
CREATE TABLE rideshare (
    ymd TEXT,
    week TEXT,
    pickup_community_area INTEGER,
    dropoff_community_area INTEGER,
    n_trips INTEGER,
    n_trips_pooled_authorized INTEGER,
    n_trips_pooled INTEGER,
    avg_cost_no_tip_cents INTEGER,
    std_cost_no_tip_cents INTEGER
);