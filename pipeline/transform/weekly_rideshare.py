import sys
sys.path.append("./")

import argparse
import numpy as np
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
df = pd.DataFrame(raw_df.dropna(subset=[
    "ymd",
    "pickup_community_area",
    "dropoff_community_area"
]))
print(f"Dropped {(len(raw_df) - len(df)):,d} rows with nulls.")

# Parse dates and add week column
df = extract_data_portal_dates(df, col="ymd", prefix="")

# Convert community area numbers to integers
df["pickup_community_area"] = df["pickup_community_area"].astype(int)
df["dropoff_community_area"] = df["dropoff_community_area"].astype(int)

# Fill missing values for aggregated numerical fields
df["n_trips"] = df["n_trips"].fillna(0)
df["n_trips_pooled_authorized"] = df["n_trips_pooled_authorized"].fillna(0)
df["n_trips_pooled"] = df["n_trips_pooled"].fillna(0)
df["avg_cost_no_tip"] = df["avg_cost_no_tip"].fillna(0)
# TODO: Combine sub-sample standard deviation values into weekly values
# df["std_cost_no_tip"] = df["std_cost_no_tip"].fillna(0)

# Compute total cost per week
df["total_cost_no_tip"] = df["avg_cost_no_tip"] * df["n_trips"]

# Group by week

df_weekly = df.groupby(by=[
    "week",
    "pickup_community_area",
    "dropoff_community_area"
]).agg({
    "n_trips": np.sum,
    "n_trips_pooled_authorized": np.sum,
    "n_trips_pooled": np.sum,
    "total_cost_no_tip": np.sum,
}).reset_index()

# Convert average dollar value to cents
df_weekly["avg_cost_no_tip"] = df_weekly["total_cost_no_tip"] / df_weekly["n_trips"]
df_weekly["avg_cost_no_tip_cents"] = np.ceil(df_weekly["avg_cost_no_tip"].astype(float) * 100).astype(int)

# TODO: Combine sub-sample standard deviation values into weekly values
# df["std_cost_no_tip_cents"] = df["std_cost_no_tip"].astype(float) * 100

# Sort by date and save
df_weekly.sort_values(by="week", ascending=True, inplace=True)
df_weekly.to_csv(args.output_file, index=False)

end = timer()
secs = end - start
print(f"Transformed {len(df_weekly):,d} records in {secs:.1f} secs.")
