SELECT
    permit_number,
    account_number,
    legal_name,
    doing_business_as_name,
    issued_date,
    expiration_date,
    address,
    zip_code,
    latitude,
    longitude
WHERE issued_date <= "2021-07-15"
LIMIT 100000