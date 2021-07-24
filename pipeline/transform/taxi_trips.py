import sys
sys.path.append("./")

import argparse
import numpy as np
import pandas as pd
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates


cli = argparse.ArgumentParser(description="Transform raw taxi trip data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# handling NULL values in ymd column (dropping the row)
raw_df = pd.read_csv(args.input_file)
df = pd.DataFrame(raw_df.dropna(subset=[
    "ymd"
]))
print(f"Dropped {(len(raw_df) - len(df)):,d} rows with nulls.")

# Parse dates and add week column
df = extract_data_portal_dates(df, col="ymd", prefix="")

#replace null values in pickup/dropoff areas with 0
df["pickup_community_area"] = df["pickup_community_area"].fillna(0)
df["dropoff_community_area"] = df["dropoff_community_area"].fillna(0)

# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")