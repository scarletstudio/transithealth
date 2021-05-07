import argparse
import json
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Download and link community area datasets into one reference file.")
cli.add_argument("--geojson_file", help="File path to read community area GeoJSON from.")
cli.add_argument("--places_file", help="File path to read community area places from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Get dataset with area slugs
with open(args.places_file) as places_file:
    places_json = json.loads(places_file.read())
    df_places = pd.DataFrame(places_json["community_areas"])
    print(f"{len(df_places)} community areas in the places data.")

# Get dataset with area numbers
with open(args.geojson_file) as geojson_file:
    geojson_json = json.loads(geojson_file.read())
    df_geojson = pd.DataFrame(geojson_json["features"])
    print(f"{len(df_geojson)} community areas in the GeoJSON data.")

# Link by uppercase name
df_places["name_upper"] = df_places["name"].apply(lambda s: s.upper())
df_geojson["name_upper"] = df_geojson["properties"].apply(lambda p: p["community"])
df_left = df_places.set_index("name_upper").drop("id", axis=1)
df_right = df_geojson.set_index("name_upper")
df_joined = df_left.join(df_right, rsuffix="_geojson")
n_null_cells = df_joined.isnull().sum(axis=0).sum(axis=0)
print(f"{len(df_joined)} community areas in the joined data, with {n_null_cells} null cells.")

# Finalize columns
df_areas = df_joined.reset_index()
df_areas["area_number"] = df_areas["properties"].apply(lambda p: p["area_numbe"]) # not a typo haha
df_areas["order"] = df_areas["area_number"].apply(lambda s: s.zfill(2))
df_areas["centroid_longitude"] = df_areas["centroid"].apply(lambda p: p[0])
df_areas["centroid_latitude"] = df_areas["centroid"].apply(lambda p: p[1])
df_areas = df_areas.sort_values(by="order", ascending=True)
df_areas = df_areas.drop([
    "geo_type",
    "geometry_geojson",
    "type",
    "order",
    "resource_cnt",
    "name_upper"
], axis=1)
df_areas.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Linked and wrote {len(df_areas)} records in {secs:.1f} secs.")
