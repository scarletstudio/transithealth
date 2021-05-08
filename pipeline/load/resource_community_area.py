import sys
sys.path.append("./")

import argparse
import json
import pandas as pd
from timeit import default_timer as timer
from utils.data import double_quote_json


cli = argparse.ArgumentParser(description="Create community area resource for the frontend app.")
cli.add_argument("--input_file", help="File path to read community area data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Finalize columns
df_areas = pd.read_csv(args.input_file)
df_areas = df_areas[[
    "area_number",
    "area_slug",
    "name",
    "part",
    "geometry_geojson",
    "centroid"
]]
df_areas["geometry_geojson"] = df_areas["geometry_geojson"].apply(lambda s: json.loads(double_quote_json(s)))


# Match GeoJSON format
features = [
    {
        "type": "Feature",
        "geometry": r["geometry_geojson"],
        "properties": {
            "name": r["name"],
            "number": r["area_number"],
            "slug": r["area_slug"],
            "part": r["part"],
            "centroid": r["centroid"]
        }
        
    }
    for r in df_areas.to_dict("records")
]
community_areas = {
    "type": "FeatureCollection",
    "features": features
}

# Export as JSON
with open(args.output_file, "w") as output_file:
    json.dump(community_areas, output_file)

# Show summary
end = timer()
secs = end - start
print(f"Exported {len(community_areas)} records in {secs:.1f} secs.")
