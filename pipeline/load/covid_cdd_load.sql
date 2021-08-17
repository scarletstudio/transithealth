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
	deaths_0_17_yrs INTEGER,
	deaths_18_29_yrs INTEGER,
	deaths_30_39_yrs INTEGER,
	deaths_40_49_yrs INTEGER,
	deaths_50_59_yrs INTEGER,
	deaths_60_69_yrs INTEGER,
	deaths_70_79_yrs INTEGER,
	deaths_80_yrs INTEGER
);