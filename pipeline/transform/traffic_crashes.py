import sys
sys.path.append("./")

import argparse
import numpy as np
import pandas as pd
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates
from datetime import datetime


cli = argparse.ArgumentParser(description="Transform traffic crash data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

raw_df = pd.read_csv(args.input_file)

#replace null values for hit and run column with 'no'
raw_df["hit_and_run_i"] = raw_df["hit_and_run_i"].fillna("N")
#Parse dates
raw_df["crash_date"] = pd.to_datetime(raw_df["crash_date"])
# Write output
raw_df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(raw_df)} records in {secs:.1f} secs.")