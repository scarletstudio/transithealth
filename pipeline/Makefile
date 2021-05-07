# Makefile Variables

COMMUNITY_AREAS_GEOJSON_URL := https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON
CHICAGO_HEALTH_ATLAS_API := https://api.chicagohealthatlas.org/api/v1

PORTAL_RIDESHARES := https://data.cityofchicago.org/resource/m6dm-c72p.json

# Environment Variables

# None

# Database

all: compressed.db.tgz

latest:
	rm -f database.db
	make

compressed: database.db
	tar cfz compressed.db.tgz database.db

uncompressed:
	tar -xf compressed.db.tgz

# Load Operations

compressed.db.tgz: database.db
	tar cfz compressed.db.tgz database.db

database.db: data/transformed/community_area.csv data/transformed/rideshare.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/community_area.csv" \
		--create_sql="load/community_area.sql" \
		--table_name="community_area"
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

data/extracted/daily_rideshare.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_RIDESHARES)" \
		--soql_file="extract/daily_rideshare.sql" \
		--output_file="data/extracted/daily_rideshare.csv"

# Clean

clean:
	rm -f database.db
	rm -rf data
	mkdir data
	mkdir data/extracted
	mkdir data/transformed
