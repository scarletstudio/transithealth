select
    week_number,
    week_start,
    week_end,
    zip_code as zip,
    population,
    cases_weekly
where
    week_end <= "2021-05-08"
limit 100000