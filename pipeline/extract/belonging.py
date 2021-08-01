import sys
sys.path.append("./")

import argparse
import json
import os
import pandas as pd
import requests
from time import sleep
from timeit import default_timer as timer
from tqdm import tqdm
from utils.data import HEALTH_ATLAS_VALUE_COLS


cli = argparse.ArgumentParser(description="Download belonging data for each community area.")
cli.add_argument("--coverage_file", help="File path to read coverages from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

API = os.environ.get("CHICAGO_HEALTH_ATLAS_API")

with open(args.coverage_file) as coverage_file:
    coverage_json = json.loads(coverage_file.read())
    # Gets coverage for community areas
    df_coverage_area = pd.DataFrame(coverage_json["coverages"]["neighborhood"])
    df_coverage_area["layer"] = "neighborhood"
    n_periods = len(df_coverage_area["period"].unique())
    n_populations = len(df_coverage_area["population"].unique())
    print(f"Belonging data for community areas covers {n_periods} periods and {n_populations} populations.")
    # Gets coverage for the city
    df_coverage_city = pd.DataFrame(coverage_json["coverages"]["place"])
    df_coverage_city["layer"] = "place"
    n_periods = len(df_coverage_city["period"].unique())
    n_populations = len(df_coverage_city["population"].unique())
    print(f"Belonging data for city covers {n_periods} periods and {n_populations} populations.")

df_coverages_all = pd.concat([df_coverage_area,df_coverage_city], axis = 0)

# Request endpoint for each period
rows = []
coverages = df_coverages_all.to_dict(orient="records")
for coverage in tqdm(coverages):
    r = requests.get(f"{API}/data", params={
        "layer": coverage["layer"],
        "topic": "HCSCBP",
        "period": coverage["period"],
        "population": coverage["population"]
    })
    data = r.json()
    for record in data["results"]:
        rows.append(record)
    sleep(0.1)

# Finalize columns and write all output
df_pop = pd.DataFrame(rows)
df_pop.rename(inplace=True, columns=HEALTH_ATLAS_VALUE_COLS)
df_pop.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Fetched {len(df_pop)} records in {secs:.1f} secs.")

