DROP TABLE IF EXISTS belonging;
CREATE TABLE belonging (
    area_number INTEGER,
    segment TEXT,
    value REAL,
    std_error REAL,
    period_start_year INTEGER,
    period_end_year INTEGER,
    period TEXT,
    PRIMARY KEY(area_number)
);
