DROP TABLE IF EXISTS rideshare;
CREATE TABLE rideshare (
    ymd TEXT NOT NULL,
    week TEXT NOT NULL,
    pickup_community_area INTEGER NOT NULL,
    dropoff_community_area INTEGER NOT NULL,
    n_trips INTEGER NOT NULL,
    n_trips_pooled_authorized INTEGER NOT NULL,
    n_trips_pooled INTEGER NOT NULL,
    avg_cost_no_tip_cents INTEGER NOT NULL,
    std_cost_no_tip_cents INTEGER NOT NULL,
    PRIMARY KEY (ymd, pickup_community_area, dropoff_community_area)
);
CREATE INDEX idx_week ON rideshare (week);