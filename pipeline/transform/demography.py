import sys
sys.path.append("./")

import argparse
import json
import pandas as pd
from timeit import default_timer as timer
from utils.data import double_quote_json


cli = argparse.ArgumentParser(description="Transform demography data.")
cli.add_argument("--input_file", help="File path to read demography from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file and parse JSON columns
df = pd.read_csv(args.input_file)
df["total_population_data_json"] = df["total_population_data"].apply(lambda s: json.loads(double_quote_json(s)))

# Pull out population data
df["total_population_2010"] = df["total_population_data_json"].apply(lambda d: d["pop_2010"])
df["total_population_2000"] = df["total_population_data_json"].apply(lambda d: d["pop_2000"])
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")
