SELECT
    station_id,
    stationname,
    date,
    daytype,
    rides
WHERE
    date >= "2019-01-01" AND date <= "2020-12-31"
LIMIT 105000