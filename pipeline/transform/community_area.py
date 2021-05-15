import sys
sys.path.append("./")

import argparse
import json
import pandas as pd
from timeit import default_timer as timer
from utils.data import double_quote_json


cli = argparse.ArgumentParser(description="Download and link community area datasets into one reference file.")
cli.add_argument("--geojson_file", help="File path to read community area GeoJSON from.")
cli.add_argument("--neighborhood_file", help="File path to read community area neighborhoods from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Get dataset with area geoids
with open(args.neighborhood_file) as neighborhood_file:
    neighborhood_json = json.loads(neighborhood_file.read())
    df_neighborhoods = pd.DataFrame(neighborhood_json["results"])
    print(f"{len(df_neighborhoods)} community areas in the neighborhoods data.")

# Get dataset with area numbers
with open(args.geojson_file) as geojson_file:
    geojson_json = json.loads(geojson_file.read())
    df_geojson = pd.DataFrame(geojson_json["features"])
    print(f"{len(df_geojson)} community areas in the GeoJSON data.")

# Link by uppercase name
df_neighborhoods["name"] = df_neighborhoods["name"].apply(lambda s: s.split(" (")[0])
df_neighborhoods["name_upper"] = df_neighborhoods["name"].apply(lambda s: s.upper())
df_geojson["name_upper"] = df_geojson["properties"].apply(lambda p: p["community"])
df_joined = pd.merge(left=df_neighborhoods, right=df_geojson, on="name_upper")
n_null_cells = df_joined.isnull().sum(axis=0).sum(axis=0)
print(f"{len(df_joined)} community areas in the joined data, with {n_null_cells} null cells.")

# Get primary keys
df_areas = df_joined.reset_index()
df_areas["area_number"] = df_areas["properties"].apply(lambda p: p["area_numbe"]) # not a typo haha
df_areas["area_geoid"] = df_areas["geoid"]

# Get other neighborhood columns
df_areas["part"] = df_areas["notes"]

# Parse GeoJSON columns
df_areas["geometry"] = df_areas["geometry"].apply(lambda g: json.dumps(g))

# Finalize columns and sort order
df_areas["order"] = df_areas["area_number"].apply(lambda s: s.zfill(2))
df_areas = df_areas.sort_values(by="order", ascending=True)
df_areas = df_areas[[
    "area_number",
    "area_geoid",
    "name",
    "part",
    "population",
    "geometry"
]]
df_areas.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Linked and wrote {len(df_areas)} records in {secs:.1f} secs.")
