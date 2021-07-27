DROP TABLE IF EXISTS traffic_intensity;
CREATE TABLE traffic_intensity (
    area_number INTEGER,
    segment TEXT,
    value REAL,
    std_error REAL,
    period INTEGER
);