import sys
sys.path.append("./")

import argparse
import pandas as pd
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates


cli = argparse.ArgumentParser(description="Transform raw daily rideshare data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Load data and drop nulls
raw_df = pd.read_csv(args.input_file)
df = pd.DataFrame(raw_df.dropna())
print(f"Dropped {(len(raw_df) - len(df)):,d} rows with nulls.")

# Parse dates and add week column
df = extract_data_portal_dates(df, col="ymd", prefix="")

# Convert community area numbers to integers
df["pickup_community_area"] = df["pickup_community_area"].astype(int)
df["dropoff_community_area"] = df["dropoff_community_area"].astype(int)

# Drop extra columns
df.drop(["dt"], axis=1, inplace=True)

# Sort by date and save
df.sort_values(by="ymd", ascending=True, inplace=True)
df.to_csv(args.output_file, index=False)

end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")
