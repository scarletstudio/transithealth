DROP TABLE IF EXISTS covid_spread;
CREATE TABLE covid_spread (
    -- Data collected weekly
    start_date TEXT,
    end_date TEXT,
    week TEXT,
    -- Each record represents the overlap
    -- of a zip code and community area
    zip INTEGER,
    area INTEGER,
    -- COVID spread metrics 
    cases_weekly INTEGER
);