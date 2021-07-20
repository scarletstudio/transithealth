DROP TABLE IF EXISTS rent_burdened_households;
CREATE TABLE rent_burdened_households (
    area_number INTEGER,
    segment TEXT,
    value REAL,
    std_error REAL,
    period_start_year INTEGER,
    period_end_year INTEGER,
    period TEXT
);