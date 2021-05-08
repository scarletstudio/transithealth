# Makefile Variables

COMMUNITY_AREAS_GEOJSON_URL := https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON

PORTAL_RIDESHARES := https://data.cityofchicago.org/resource/m6dm-c72p.json

# Environment Variables

export CHICAGO_HEALTH_ATLAS_API=https://api.chicagohealthatlas.org/api/v1

# Database Operations

all: compressed.db.tgz

reload:
	rm -f database.db
	rm -rf data/loaded
	mkdir data/loaded
	make

uncompressed: compressed.db.tgz
	tar -xf compressed.db.tgz

compressed:
	make compressed.db.tgz

# Load Operations

compressed.db.tgz: database.db
	tar cfz compressed.db.tgz database.db

database.db: data/loaded/all_tables.txt

data/loaded/all_tables.txt:
	make data/loaded/community_area.txt
	make data/loaded/rideshare.txt
	make data/loaded/demography.txt
	touch "data/loaded/all_tables.txt"

data/loaded/community_area.txt: data/transformed/community_area.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/community_area.csv" \
		--create_sql="load/community_area.sql" \
		--table_name="community_area"

data/loaded/rideshare.txt: data/transformed/rideshare.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/rideshare.csv" \
		--create_sql="load/rideshare.sql" \
		--table_name="rideshare"

data/loaded/demography.txt: data/transformed/demography.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/demography.csv" \
		--create_sql="load/demography.sql" \
		--table_name="demography"

# Transform Operations

data/transformed/community_area.csv: data/extracted/community_area.geojson data/extracted/health_atlas_places.json
	python3 transform/community_area.py \
		--geojson_file="data/extracted/community_area.geojson" \
		--places_file="data/extracted/health_atlas_places.json" \
		--output_file="data/transformed/community_area.csv"

data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
	python3 transform/daily_rideshare.py \
		--input_file="data/extracted/daily_rideshare.csv" \
		--output_file="data/transformed/rideshare.csv"

data/transformed/demography.csv: data/extracted/demography.csv
	python3 transform/demography.py \
		--input_file="data/extracted/demography.csv" \
		--output_file="data/transformed/demography.csv"

# Extract Operations

data/extracted/community_area.geojson:
	curl "$(COMMUNITY_AREAS_GEOJSON_URL)" \
		--create-dirs -o "data/extracted/community_area.geojson"

data/extracted/health_atlas_places.json:
	curl "$(CHICAGO_HEALTH_ATLAS_API)/places" \
		--create-dirs -o "data/extracted/health_atlas_places.json"

data/extracted/daily_rideshare.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_RIDESHARES)" \
		--soql_file="extract/daily_rideshare.sql" \
		--output_file="data/extracted/daily_rideshare.csv"

data/extracted/demography.csv: data/transformed/community_area.csv
	python3 extract/demography.py \
		--areas_file="data/transformed/community_area.csv" \
		--output_file="data/extracted/demography.csv"

# Clean

clean:
	rm -f database.db
	rm -rf data
	mkdir data
	mkdir data/extracted
	mkdir data/transformed
	mkdir data/loaded
