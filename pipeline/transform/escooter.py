import sys
sys.path.append("./")

import argparse
import numpy as np
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Transform raw daily escooter data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Load data and drop nulls
raw_df = pd.read_csv(args.input_file)
df = pd.DataFrame(raw_df.dropna(subset=[
    "start_community_area_number",
    "end_community_area_number",
    "count_trip_id",
    "avg_trip_distance"
]))
print(f"Dropped {(len(raw_df) - len(df)):,d} rows with nulls.")

# Parse dates and add week column

# Convert community area numbers to integers
df["avg_trip_distance"] = df["avg_trip_distance"].astype(int)

#Sort data by average trip distance
df["avg_trip_distance"] = sorted(df["avg_trip_distance"])
print("dataframe was sorted successfully!") 

df.to_csv(args.output_file, index=False) 

end = timer()
secs = end - start

print(f"Transformed {len(df)} records in {secs:.1f} secs.")