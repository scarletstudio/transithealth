SELECT
    route,
    date,
    daytype,
    rides
WHERE
    date >= "2020-01-01" AND date <= "2021-03-31"
LIMIT 200000