import argparse
import json
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Create community area resource for the frontend app.")
cli.add_argument("--input_file", help="File path to read community area data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Finalize columns
df_areas = pd.read_csv(args.input_file)
df_areas = df_areas[[
    "area_number",
    "area_geoid",
    "name",
    "part",
    "geometry"
]]

# Match GeoJSON format
features = [
    {
        "type": "Feature",
        "geometry": json.loads(r["geometry"]),
        "properties": {
            "name": r["name"],
            "number": r["area_number"],
            "geoid": r["area_geoid"],
            "part": r["part"]
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
