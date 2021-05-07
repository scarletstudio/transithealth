DROP TABLE IF EXISTS community_area;
CREATE TABLE community_area (
    area_number INTEGER,
    slug TEXT,
    name TEXT,
    part TEXT,
    centroid_longitude REAL,
    centroid_latitude REAL,
    geometry BLOB
);
