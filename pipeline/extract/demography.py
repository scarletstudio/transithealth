import argparse
import os
import pandas as pd
import requests
from time import sleep
from timeit import default_timer as timer
from tqdm import tqdm


cli = argparse.ArgumentParser(description="Download demography data for each community area.")
cli.add_argument("--areas_file", help="File path to read community areas from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

API = os.environ.get("CHICAGO_HEALTH_ATLAS_API")

df_areas = pd.read_csv(args.areas_file)

# Request endpoint for each area
rows = []
community_areas = list(zip(df_areas["area_number"].values, df_areas["slug"].values))
for number, slug in tqdm(community_areas):
    r = requests.get(f"{API}/place/demography/{slug}")
    data = r.json()
    data["area_number"] = number
    data["area_slug"] = slug
    rows.append(data)
    sleep(0.1)

# Write all output
df_demo = pd.DataFrame(rows)
df_demo.to_csv(args.output_file)

# Show summary
end = timer()
secs = end - start
print(f"Fetched {len(df_demo)} records in {secs:.1f} secs.")
