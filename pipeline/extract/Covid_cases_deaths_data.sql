select
    date_extract_y(lab_report_date) as year,
    date_extract_woy(lab_report_date) as week,
    sum(cases_age_0_17),
    sum(cases_age_18_29),
    sum(cases_age_30_39),
    sum(cases_age_40_49),
    sum(cases_age_50_59),
    sum(cases_age_60_69),
    sum(cases_age_70_79),
    sum(cases_age_80_),
    sum(deaths_0_17_yrs),
    sum(deaths_18_29_yrs),
    sum(deaths_30_39_yrs),
    sum(deaths_40_49_yrs),
    sum(deaths_50_59_yrs),
    sum(deaths_60_69_yrs),
    sum(deaths_70_79_yrs),
    sum(deaths_80_yrs),
    Min(lab_report_date) as week_start,
    Max(lab_report_date) as week_end
Where
    lab_report_date <= "2021-8-12"
Group by
    year,week
Order by
    year, week