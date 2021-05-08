import sys
sys.path.append("./")

import argparse
import pandas as pd
import numpy as np
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates
from utils.geo import convert_zip_to_community_area_proportionally


cli = argparse.ArgumentParser(description="Transform raw COVID spread data.")
cli.add_argument("--zip_to_area_file", help="File path to equivalency factors.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Load data and drop nulls
raw_df = pd.read_csv(args.input_file)
df_spread = pd.DataFrame(raw_df.dropna())
print(f"Dropped {(len(raw_df) - len(df_spread)):,d} rows with nulls.")

# Parse dates and add week column
df_spread = extract_data_portal_dates(df_spread, col="week_start", prefix="start_")
df_spread = extract_data_portal_dates(df_spread, col="week_end", prefix="end_")

# Convert from weekly per zip code to weekly per zip code/community area overlap
df_zip_to_area = pd.read_csv(args.zip_to_area_file)
df = convert_zip_to_community_area_proportionally(
    df_zip_to_area,
    df_spread,
    cols_to_convert=["cases_weekly"],
    verbose=True
)
df["cases_weekly"] = df["cases_weekly"].apply(np.round)

# Finalize columns
df.rename(
    inplace=True,
    columns={
        "week_start": "start_date",
        "week_end": "end_date",
        "end_week": "week"
    }
)

# Sort by primary keys and save
df.sort_values(by=["week", "zip", "area"], ascending=True, inplace=True)
df.to_csv(args.output_file, index=False)

end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")
