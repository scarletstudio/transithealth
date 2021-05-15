DROP TABLE IF EXISTS community_area;
CREATE TABLE community_area (
    area_number INTEGER,
    area_geoid TEXT,
    name TEXT,
    part TEXT,
    population INTEGER,
    geometry BLOB
);
