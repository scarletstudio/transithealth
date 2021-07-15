DROP TABLE IF EXISTS belonging;
CREATE TABLE belonging (
    layer TEXT,
    area_number INTEGER,
    segment TEXT,
    value REAL,
    std_error REAL,
    period_start_year INTEGER,
    period_end_year INTEGER,
    period TEXT,
    PRIMARY KEY(layer,area_number,segment,period_end_year)
);
