DROP TABLE IF EXISTS Covid_cases_deaths_data;
CREATE TABLE Covid_cases_deaths_data (
	WeekDate text,
	cases_age_0_17 SMALLINT,
	cases_age_18_29 SMALLINT,
	cases_age_30_39 SMALLINT,
	cases_age_40_49 SMALLINT,
	cases_age_50_59 SMALLINT,
	cases_age_60_69 SMALLINT,
	cases_age_70_79 SMALLINT,
	cases_age_80_ SMALLINT,
	deaths_0_17_yrs SMALLINT,
	deaths_18_29_yrs SMALLINT,
	deaths_30_39_yrs SMALLINT,
	deaths_40_49_yrs SMALLINT,
	deaths_50_59_yrs SMALLINT,
	deaths_60_69_yrs SMALLINT,
	deaths_70_79_yrs SMALLINT,
	deaths_80_yrs SMALLINT
);