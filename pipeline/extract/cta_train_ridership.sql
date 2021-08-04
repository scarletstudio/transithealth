SELECT
    station_id,
    stationname,
    date,
    daytype,
    rides
WHERE
    date >= "2019-01-01" AND date <= "2021-02-28"
LIMIT 115000