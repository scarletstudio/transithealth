# Variables

PORTAL_RIDESHARES := "https://data.cityofchicago.org/resource/m6dm-c72p.json"

# Database

all: database.db

latest:
	rm -f database.db
	make

compressed: database.db
	tar cfz compressed.db.tgz database.db

# Load Operations

database.db: data/transformed/rideshare.csv
	python3 load/create_table.py \
		--database="database.db" \
		--input_file="data/transformed/rideshare.csv" \
		--create_sql="load/rideshare.sql" \
		--table_name="rideshare"

# Transform Operations

data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
	python3 transform/daily_rideshare.py \
		--input_file="data/extracted/daily_rideshare.csv" \
		--output_file="data/transformed/rideshare.csv"

# Extract Operations

data/extracted/daily_rideshare.csv:
	python3 extract/from_data_portal.py \
		--json_url=$(PORTAL_RIDESHARES) \
		--soql_file="extract/daily_rideshare.sql" \
		--output_file="data/extracted/daily_rideshare.csv"

# Clean

clean:
	rm -f database.db
	rm -rf data
	mkdir data
	mkdir data/extracted
	mkdir data/transformed
