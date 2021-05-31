# Makefile Variables

COMMUNITY_AREAS_GEOJSON_URL := https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON
ZIP_CODE_TO_COMMUNITY_AREA_URL := https://docs.google.com/spreadsheets/d/1oHZy7sDlpZmCvymCg0mcd_bDBj-tn8oorsOmuo8odZI/export?format=csv&gid=0

PORTAL_RIDESHARE_TRIPS := https://data.cityofchicago.org/resource/m6dm-c72p.json
PORTAL_COVID_SPREAD := https://data.cityofchicago.org/resource/yhhz-zm2v.json

# Environment Variables

export CHICAGO_HEALTH_ATLAS_API=https://chicagohealthatlas.org/api/v1

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
	make data/loaded/population.txt
	make data/loaded/income.txt
	make data/loaded/covid_spread.txt
	make data/loaded/rideshare.txt
	touch "data/loaded/all_tables.txt"

data/loaded/community_area.txt: data/transformed/community_area.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/community_area.csv" \
		--create_sql="load/community_area.sql" \
		--table_name="community_area"

data/loaded/population.txt: data/transformed/population.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/population.csv" \
		--create_sql="load/population.sql" \
		--table_name="population"

data/loaded/income.txt: data/transformed/income.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/income.csv" \
		--create_sql="load/income.sql" \
		--table_name="income"

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

data/transformed/community_area.csv: data/extracted/community_area.geojson data/extracted/health_atlas_neighborhoods.json
	python3 transform/community_area.py \
		--geojson_file="data/extracted/community_area.geojson" \
		--neighborhood_file="data/extracted/health_atlas_neighborhoods.json" \
		--output_file="data/transformed/community_area.csv"

data/transformed/zip_code_to_community_area.csv: data/extracted/zip_code_to_community_area.csv
	python3 transform/zip_code_to_community_area.py \
		--input_file="data/extracted/zip_code_to_community_area.csv" \
		--output_file="data/transformed/zip_code_to_community_area.csv"

data/transformed/population.csv: data/extracted/population.csv
	python3 transform/population.py \
		--input_file="data/extracted/population.csv" \
		--output_file="data/transformed/population.csv"

data/transformed/income.csv: data/extracted/income.csv
	python3 transform/income.py \
		--input_file="data/extracted/income.csv" \
		--output_file="data/transformed/income.csv"

data/transformed/covid_spread.csv: data/extracted/covid_spread.csv data/transformed/zip_code_to_community_area.csv
	python3 transform/covid_spread.py \
		--zip_to_area_file="data/transformed/zip_code_to_community_area.csv" \
		--input_file="data/extracted/covid_spread.csv" \
		--output_file="data/transformed/covid_spread.csv"

data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
	python3 transform/weekly_rideshare.py \
		--input_file="data/extracted/daily_rideshare.csv" \
		--output_file="data/transformed/rideshare.csv"

# Extract Operations

data/extracted/community_area.geojson:
	curl "$(COMMUNITY_AREAS_GEOJSON_URL)" \
		--create-dirs -o "data/extracted/community_area.geojson"

data/extracted/health_atlas_neighborhoods.json:
	# -L tells curl to follow redirects until it reaches a file
	# -J tells curl to get the file type from the file content instead of the URL
	# https://unix.stackexchange.com/a/74337
	curl -J -L "$(CHICAGO_HEALTH_ATLAS_API)/geographies/neighborhood?format=json&limit=77" \
		--create-dirs -o "data/extracted/health_atlas_neighborhoods.json"

data/extracted/zip_code_to_community_area.csv:
	curl -J -L "$(ZIP_CODE_TO_COMMUNITY_AREA_URL)" \
		--create-dirs -o "data/extracted/zip_code_to_community_area.csv"

data/extracted/population.csv: data/extracted/population_coverage.csv
	python3 extract/population.py \
		--coverage_file="data/extracted/population_coverage.csv" \
		--output_file="data/extracted/population.csv"

data/extracted/population_coverage.csv:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/POP" \
		--create-dirs -o "data/extracted/population_coverage.csv" \
		-d layers="neighborhood"

data/extracted/income.csv: data/extracted/income_coverage.csv
	python3 extract/income.py \
		--coverage_file="data/extracted/income_coverage.csv" \
		--output_file="data/extracted/income.csv"

data/extracted/income_coverage.csv:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/INC" \
		--create-dirs -o "data/extracted/income_coverage.csv" \
		-d layers="neighborhood"

data/extracted/covid_spread.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_COVID_SPREAD)" \
		--soql_file="extract/covid_spread.sql" \
		--output_file="data/extracted/covid_spread.csv"

data/extracted/daily_rideshare.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_RIDESHARE_TRIPS)" \
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

clean-except:
	# Runs make clean on all files except those specified here
	# Gives you a quicker version of clean, use only if your change does not impact these files
	# Exceptions are meant for files that (a) have no dependencies and (b) take a long time to make
	mkdir tempdata
	mkdir tempdata/extracted
	cp data/extracted/daily_rideshare.csv tempdata/extracted/daily_rideshare.csv
	make clean
	cp tempdata/extracted/daily_rideshare.csv data/extracted/daily_rideshare.csv
	rm -rf tempdata
