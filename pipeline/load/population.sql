DROP TABLE IF EXISTS population;
CREATE TABLE population (
    area_number INTEGER,
    segment TEXT,
    value REAL,
    std_error REAL,
    period_start_year INTEGER,
    period_end_year INTEGER,
    period TEXT
);
