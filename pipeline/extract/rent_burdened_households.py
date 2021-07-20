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


cli = argparse.ArgumentParser(description="Download rent burdened household data for each community area.")
cli.add_argument("--coverage_file", help="File path to read coverages from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

API = os.environ.get("CHICAGO_HEALTH_ATLAS_API")

with open(args.coverage_file) as coverage_file:
    coverage_json = json.loads(coverage_file.read())
    df_coverage = pd.DataFrame(coverage_json["coverages"]["neighborhood"])
    n_periods = len(df_coverage["period"].unique())
    n_populations = len(df_coverage["population"].unique())
    print(f"Population data covers {n_periods} periods and {n_populations} populations.")

# Get periods only for the full population (empty string)
periods_full_population = df_coverage[df_coverage["population"] == ""]["period"].values

# Request endpoint for each period
rows = []
for period in tqdm(periods_full_population):
    r = requests.get(f"{API}/data", params={
        "layer": "neighborhood",
        "topic": "RBU", #topic is RBU: rent burdened households
        "period": period,
        # empty string = entire population
        "population": ""
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
