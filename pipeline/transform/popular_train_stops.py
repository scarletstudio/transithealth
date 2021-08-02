import sys
sys.path.append("./")

import argparse
import pandas as pd
import numpy as np
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates

cli = argparse.ArgumentParser(description="Transform CTA L Train ridership data for transfer points.")
cli.add_argument("--input_file", help="File path to read CTA L Train ridership data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file
df = pd.read_csv(args.input_file)

# add week column
df = extract_data_portal_dates(df, col="date", prefix="")

# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")

