DROP TABLE IF EXISTS Covid_cases_deaths_data;
CREATE TABLE Covid_cases_deaths_data (
	week text,
	cases_total INTEGER,
	deaths_total INTEGER,
	cases_age_0_17 INTEGER,
	cases_age_18_29 INTEGER,
	cases_age_30_39 INTEGER,
	cases_age_40_49 INTEGER,
	cases_age_50_59 INTEGER,
	cases_age_60_69 INTEGER,
	cases_age_70_79 INTEGER,
	cases_age_80_ INTEGER,
	deaths_age_0_17 INTEGER,
	deaths_age_18_29 INTEGER,
	deaths_age_30_39 INTEGER,
	deaths_age_40_49 INTEGER,
	deaths_age_50_59 INTEGER,
	deaths_age_60_69 INTEGER,
	deaths_age_70_79 INTEGER,
	deaths_age_80_ INTEGER
);