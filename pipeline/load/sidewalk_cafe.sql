DROP TABLE IF EXISTS sidewalk_cafe;
CREATE TABLE sidewalk_cafe (
  permit_number INTEGER,
  issued_date_dt TEXT,
  issued_date_week_num TEXT,
  expiration_date_dt TEXT,
  expiration_date_week_num TEXT,
  zip INTEGER,
  area INTEGER
);