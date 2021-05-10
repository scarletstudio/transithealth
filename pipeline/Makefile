# Makefile Variables

COMMUNITY_AREAS_GEOJSON_URL := https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON
ZIP_CODE_TO_COMMUNITY_AREA_URL := https://docs.google.com/spreadsheets/d/1oHZy7sDlpZmCvymCg0mcd_bDBj-tn8oorsOmuo8odZI/export?format=csv&gid=0

PORTAL_RIDESHARES := https://data.cityofchicago.org/resource/m6dm-c72p.json
PORTAL_COVID_SPREAD := https://data.cityofchicago.org/resource/yhhz-zm2v.json

# Environment Variables

export CHICAGO_HEALTH_ATLAS_API=https://api.chicagohealthatlas.org/api/v1

# Database Operations

all: compressed

reload:
	rm -f database.db
	rm -rf compressed
	rm -rf data/loaded
	mkdir data/loaded
	make

uncompressed:
	cat compressed/db-part-* > compressed.db.tgz
	tar -xf compressed.db.tgz
	rm compressed.db.tgz

compressed: database.db
	rm -rf compressed
	tar cfz compressed.db.tgz database.db
	mkdir compressed
	split -b 10m compressed.db.tgz compressed/db-part-
	rm compressed.db.tgz

# Load Operations

database.db: data/loaded/all_tables.txt

data/loaded/all_tables.txt:
	make data/loaded/community_area.txt
	make data/loaded/demography.txt
	make data/loaded/covid_spread.txt
	make data/loaded/rideshare.txt
	touch "data/loaded/all_tables.txt"

data/loaded/community_area.txt: data/transformed/community_area.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/community_area.csv" \
		--create_sql="load/community_area.sql" \
		--table_name="community_area"

data/loaded/demography.txt: data/transformed/demography.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/demography.csv" \
		--create_sql="load/demography.sql" \
		--table_name="demography"

data/loaded/covid_spread.txt: data/transformed/covid_spread.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/covid_spread.csv" \
		--create_sql="load/covid_spread.sql" \
		--table_name="covid_spread"

data/loaded/rideshare.txt: data/transformed/rideshare.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/rideshare.csv" \
		--create_sql="load/rideshare.sql" \
		--table_name="rideshare"

# Transform Operations

data/transformed/community_area.csv: data/extracted/community_area.geojson data/extracted/health_atlas_places.json
	python3 transform/community_area.py \
		--geojson_file="data/extracted/community_area.geojson" \
		--places_file="data/extracted/health_atlas_places.json" \
		--output_file="data/transformed/community_area.csv"

data/transformed/zip_code_to_community_area.csv: data/extracted/zip_code_to_community_area.csv
	python3 transform/zip_code_to_community_area.py \
		--input_file="data/extracted/zip_code_to_community_area.csv" \
		--output_file="data/transformed/zip_code_to_community_area.csv"

data/transformed/demography.csv: data/extracted/demography.csv
	python3 transform/demography.py \
		--input_file="data/extracted/demography.csv" \
		--output_file="data/transformed/demography.csv"

data/transformed/covid_spread.csv: data/extracted/covid_spread.csv data/transformed/zip_code_to_community_area.csv
	python3 transform/covid_spread.py \
		--zip_to_area_file="data/transformed/zip_code_to_community_area.csv" \
		--input_file="data/extracted/covid_spread.csv" \
		--output_file="data/transformed/covid_spread.csv"

data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
	python3 transform/daily_rideshare.py \
		--input_file="data/extracted/daily_rideshare.csv" \
		--output_file="data/transformed/rideshare.csv"

# Extract Operations

data/extracted/community_area.geojson:
	curl "$(COMMUNITY_AREAS_GEOJSON_URL)" \
		--create-dirs -o "data/extracted/community_area.geojson"

data/extracted/health_atlas_places.json:
	curl "$(CHICAGO_HEALTH_ATLAS_API)/places" \
		--create-dirs -o "data/extracted/health_atlas_places.json"

data/extracted/zip_code_to_community_area.csv:
	# -L tells curl to follow redirects until it reaches a file
	# -J tells curl to get the file type from the file content instead of the URL
	# https://unix.stackexchange.com/a/74337
	curl -J -L "$(ZIP_CODE_TO_COMMUNITY_AREA_URL)" \
		--create-dirs -o "data/extracted/zip_code_to_community_area.csv"

data/extracted/demography.csv: data/transformed/community_area.csv
	python3 extract/demography.py \
		--areas_file="data/transformed/community_area.csv" \
		--output_file="data/extracted/demography.csv"

data/extracted/covid_spread.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_COVID_SPREAD)" \
		--soql_file="extract/covid_spread.sql" \
		--output_file="data/extracted/covid_spread.csv"

data/extracted/daily_rideshare.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_RIDESHARES)" \
		--soql_file="extract/daily_rideshare.sql" \
		--output_file="data/extracted/daily_rideshare.csv"

# Exports For Frontend App

resources:
	make ../app/public/resources/community_area.json

../app/public/resources/community_area.json: data/transformed/community_area.csv
	python3 load/resource_community_area.py \
		--input_file="data/transformed/community_area.csv" \
		--output_file="../app/public/resources/community_area.json"

# Clean

clean:
	rm -f database.db
	rm -rf data
	rm -rf compressed
	mkdir data
	mkdir data/extracted
	mkdir data/transformed
	mkdir data/loaded

clean-resources:
	rm -f ../app/public/resources/community_area.json
	rm -f data/transformed/community_area.csv
