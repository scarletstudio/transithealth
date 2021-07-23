# Makefile Variables

COMMUNITY_AREAS_GEOJSON_URL := https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON
ZIP_CODE_TO_COMMUNITY_AREA_URL := https://docs.google.com/spreadsheets/d/1oHZy7sDlpZmCvymCg0mcd_bDBj-tn8oorsOmuo8odZI/export?format=csv&gid=0

PORTAL_RIDESHARE_TRIPS := https://data.cityofchicago.org/resource/m6dm-c72p.json
PORTAL_COVID_SPREAD := https://data.cityofchicago.org/resource/yhhz-zm2v.json
PORTAL_ESCOOTER := https://data.cityofchicago.org/resource/2kfw-zvte.json
PORTAL_SIDEWALK_CAFE := https://data.cityofchicago.org/resource/nxj5-ix6z.json
PORTAL_CTA_TRAIN := https://data.cityofchicago.org/resource/5neh-572f.json
PORTAL_BUS_RIDESHIP := https://data.cityofchicago.org/resource/jyb9-n7fm.json

TAXI_TRIPS := https://data.cityofchicago.org/resource/wrvz-psew.json

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
	mkdir -p data/loaded
	make data/loaded/community_area.txt
	make data/loaded/belonging.txt
	make data/loaded/disabilities.txt
	make data/loaded/population.txt
	make data/loaded/rent_burdened_households.txt
	make data/loaded/income.txt
	make data/loaded/covid_spread.txt
	make data/loaded/rideshare.txt
	make data/loaded/cta_train_ridership.txt
	make data/loaded/sidewalk_cafe.txt
	make data/loaded/taxi_trips.txt
	touch "data/loaded/all_tables.txt"
	
data/loaded/taxi_trips.txt: data/transformed/taxi_trips.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/taxi_trips.csv" \
		--create_sql="load/taxi_trip.sql" \
		--table_name="taxitrips"
		
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
		
data/loaded/rent_burdened_households.txt: data/transformed/rent_burdened_households.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/rent_burdened_households.csv" \
		--create_sql="load/rent_burdened_households.sql" \
		--table_name="rent_burdened_households"

data/loaded/income.txt: data/transformed/income.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/income.csv" \
		--create_sql="load/income.sql" \
		--table_name="income"

data/loaded/disabilities.txt: data/transformed/disabilities.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/disabilities.csv" \
		--create_sql="load/disabilities.sql" \
		--table_name="disabilities"

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

data/loaded/belonging.txt: data/transformed/belonging.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/belonging.csv" \
		--create_sql="load/belonging.sql" \
		--table_name="belonging"

data/loaded/cta_train_ridership.txt: data/transformed/cta_train_ridership.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/cta_train_ridership.csv" \
		--create_sql="load/cta_train_ridership.sql" \
		--table_name="cta_train_ridership"

data/loaded/sidewalk_cafe.txt: data/transformed/sidewalk_cafe.csv
	python3 load/create_table.py \
	--database="database.db" \
	--input_file="data/transformed/sidewalk_cafe.csv" \
	--create_sql="load/sidewalk_cafe.sql" \
	--table_name="sidewalk_cafe"

# Transform Operations

data/transformed/taxi_trips.csv: data/extracted/taxi_trips.csv
	python3 transform/taxi_trips.py \
		--input_file="data/extracted/taxi_trips.csv" \
		--output_file="data/transformed/taxi_trips.csv"

data/transformed/community_area.csv: data/extracted/community_area.geojson data/extracted/health_atlas_neighborhoods.json
	python3 transform/community_area.py \
		--geojson_file="data/extracted/community_area.geojson" \
		--neighborhood_file="data/extracted/health_atlas_neighborhoods.json" \
		--output_file="data/transformed/community_area.csv"
		
data/transformed/rent_burdened_households.csv: data/extracted/rent_burdened_households.csv
	python3 transform/rent_burdened_households.py \
		--input_file="data/extracted/rent_burdened_households.csv" \
		--output_file="data/transformed/rent_burdened_households.csv"

data/transformed/zip_code_to_community_area.csv: data/extracted/zip_code_to_community_area.csv
	python3 transform/zip_code_to_community_area.py \
		--input_file="data/extracted/zip_code_to_community_area.csv" \
		--output_file="data/transformed/zip_code_to_community_area.csv"

data/transformed/population.csv: data/extracted/population.csv
	python3 transform/population.py \
		--input_file="data/extracted/population.csv" \
		--output_file="data/transformed/population.csv"

data/transformed/traffic_intensity.csv: data/extracted/traffic_intensity.csv
	python3 transform/traffic_intensity.py \
		--input_file="data/extracted/traffic_intensity.csv" \
		--output_file="data/transformed/traffic_intensity.csv"

data/transformed/income.csv: data/extracted/income.csv
	python3 transform/income.py \
		--input_file="data/extracted/income.csv" \
		--output_file="data/transformed/income.csv"

data/transformed/disabilities.csv: data/extracted/disabilities.csv
	python3 transform/disabilities.py \
		--input_file="data/extracted/disabilities.csv" \
		--output_file="data/transformed/disabilities.csv"

data/transformed/covid_spread.csv: data/extracted/covid_spread.csv data/transformed/zip_code_to_community_area.csv
	python3 transform/covid_spread.py \
		--zip_to_area_file="data/transformed/zip_code_to_community_area.csv" \
		--input_file="data/extracted/covid_spread.csv" \
		--output_file="data/transformed/covid_spread.csv"

data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
	python3 transform/weekly_rideshare.py \
		--input_file="data/extracted/daily_rideshare.csv" \
		--output_file="data/transformed/rideshare.csv"
		
data/transformed/belonging.csv: data/extracted/belonging.csv
	python3 transform/belonging.py \
		--input_file="data/extracted/belonging.csv" \
		--output_file="data/transformed/belonging.csv"

data/transformed/cta_train_ridership.csv: data/extracted/cta_train_ridership.csv
	python3 transform/cta_train_ridership.py \
		--input_file="data/extracted/cta_train_ridership.csv" \
		--output_file="data/transformed/cta_train_ridership.csv"


data/transformed/sidewalk_cafe.csv: data/extracted/sidewalk_cafe.csv
	python3 transform/sidewalk_cafe.py \
		--zip_to_area_file="data/transformed/zip_code_to_community_area.csv" \
		--area_to_name="data/transformed/community_area.csv" \
		--input_file="data/extracted/sidewalk_cafe.csv" \
		--output_file="data/transformed/sidewalk_cafe.csv"
		

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
		
data/extracted/traffic_intensity.csv: data/extracted/traffic_intensity_coverage.csv
	python3 extract/traffic_intensity.py \
		--coverage_file="data/extracted/traffic_intensity_coverage.csv" \
		--output_file="data/extracted/traffic_intensity.csv"

data/extracted/traffic_intensity_coverage.csv:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/TRF" \
		--create-dirs -o "data/extracted/traffic_intensity_coverage.csv" \
		-d layers="neighborhood"

data/extracted/rent_burdened_households.csv: data/extracted/rent_burdened_households_coverage.csv
	python3 extract/rent_burdened_households.py \
		--coverage_file="data/extracted/rent_burdened_households_coverage.csv" \
		--output_file="data/extracted/rent_burdened_households.csv"

data/extracted/rent_burdened_households_coverage.csv:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/RBU" \
		--create-dirs -o "data/extracted/rent_burdened_households_coverage.csv" \
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

data/extracted/disabilities.csv: data/extracted/disabilities_coverage.csv
	python3 extract/disabilities.py \
		--coverage_file="data/extracted/disabilities_coverage.csv" \
		--output_file="data/extracted/disabilities.csv"

data/extracted/disabilities_coverage.csv:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/DIS" \
		--create-dirs -o "data/extracted/disabilities_coverage.csv" \
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

data/extracted/taxi_trips.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(TAXI_TRIPS)" \
		--soql_file="extract/taxi_trips.sql" \
		--output_file="data/extracted/taxi_trips.csv"
	
data/extracted/belonging.csv: data/extracted/belonging_coverage.json
	python3 extract/belonging.py \
		--coverage_file="data/extracted/belonging_coverage.json" \
		--output_file="data/extracted/belonging.csv"

data/extracted/belonging_coverage.json:
	# -G tells curl to use each -d option as query parameters instead of body parameters
	curl -J -L -G "$(CHICAGO_HEALTH_ATLAS_API)/coverage/HCSCBP" \
		--create-dirs -o "data/extracted/belonging_coverage.json" \
		-d layers="neighborhood,place"

data/extracted/daily_ESCOOTER.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_ESCOOTER)" \
		--soql_file="extract/scooterRidesByArea2019.sql" \
		--output_file="data/extracted/daily_escooter.csv"

data/extracted/sidewalk_cafe.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_SIDEWALK_CAFE)" \
		--soql_file="extract/sidewalk_cafe.sql" \
		--output_file="data/extracted/sidewalk_cafe.csv"

data/extracted/cta_train_ridership.csv:
	python3 extract/from_data_portal.py \
		--json_url="$(PORTAL_CTA_TRAIN)" \
		--soql_file="extract/cta_train_ridership.sql" \
		--output_file="data/extracted/cta_train_ridership.csv"
		

data/extracted/daily_bus_rideship.csv:
    python3 extract/from_data_portal.py \
        --json_url="$(PORTAL_BUS_RIDESHIP)" \
        --soql_file="extract/daily_bus_rideship.sql" \
        --output_file="data/extracted/daily_bus_rideship.csv"


# Exports For Frontend App

resources:
	make ../app/public/resources/community_area.json

../app/public/resources/community_area.json: data/transformed/community_area.csv
	python3 load/resource_community_area.py \
		--input_file="data/transformed/community_area.csv" \
		--output_file="../app/public/resources/community_area.json"

# Archive for files that take a long time to make

archive.tgz: data/transformed/rideshare.csv data/extracted/daily_rideshare.csv
	mkdir archive
	mkdir archive/extracted
	mkdir archive/transformed
	cp data/extracted/daily_rideshare.csv archive/extracted/daily_rideshare.csv
	cp data/transformed/rideshare.csv archive/transformed/rideshare.csv
	tar cfz archive.tgz archive/
	rm -rf archive

unpack-archive:
	rm -rf archive
	tar -xvf archive.tgz
	mkdir -p data/extracted
	mkdir -p data/transformed
	cp archive/extracted/daily_rideshare.csv data/extracted/daily_rideshare.csv
	cp archive/transformed/rideshare.csv data/transformed/rideshare.csv
	rm -rf archive

clean-archive:
	rm -rf data/archive
	rm -f archive.tgz

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
	# Exceptions are meant for files that:
	# - (a) take a long time to make
	# - (b) AND have no dependencies (OR their dependencies also have exceptions)
	mkdir tempdata
	mkdir tempdata/extracted
	mkdir tempdata/transformed
	cp data/extracted/daily_rideshare.csv tempdata/extracted/daily_rideshare.csv
	cp data/transformed/rideshare.csv tempdata/transformed/rideshare.csv
	make clean
	cp tempdata/extracted/daily_rideshare.csv data/extracted/daily_rideshare.csv
	cp tempdata/transformed/rideshare.csv data/transformed/rideshare.csv
	rm -rf tempdata
