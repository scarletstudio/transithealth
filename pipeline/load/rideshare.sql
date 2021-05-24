DROP TABLE IF EXISTS rideshare;
CREATE TABLE rideshare (
    week TEXT NOT NULL,
    pickup_community_area INTEGER NOT NULL,
    dropoff_community_area INTEGER NOT NULL,
    n_trips INTEGER NOT NULL,
    n_trips_pooled_authorized INTEGER NOT NULL,
    n_trips_pooled INTEGER NOT NULL,
    avg_cost_no_tip_cents INTEGER NOT NULL,
    -- TODO: Combine sub-sample standard deviation values into weekly values
    -- std_cost_no_tip_cents INTEGER NOT NULL,
    PRIMARY KEY (week, pickup_community_area, dropoff_community_area)
);
CREATE INDEX idx_week ON rideshare (week);
CREATE INDEX idx_pickup_community_area ON rideshare (pickup_community_area);