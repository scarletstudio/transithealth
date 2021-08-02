SELECT
    station_id,
    stationname,
    date,
    daytype,
    rides
WHERE
    date >= "2001-01-01" AND date <= "2021-02-28" AND
    stationname IN ('Howard', 'Wilson', 'Belmont', 'Fullerton', 'Merchandise Mart', 'Ashland', 'Roosevelt', 'Clinton', 'Clark/Lake', 'State/Lake', 'Lake', 'Washington', 'Washington/Wabash', 'Adams/Wabash', 'Jackson', 'Harold Washington Library', 'LaSalle/Van Buren', 'Quincy', 'Washington/Wells')
LIMIT 75000