import argparse
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Create equivalency factors for converting from zip codes to community areas.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Load data and rename columns
df_input = pd.read_csv(args.input_file)
df_input.rename(columns={ "ZCTA5": "zip", "CHGOCA": "area", "TOT2010": "pop" }, inplace=True)


df_area_pop = df_input.groupby(by="area")["pop"].sum().reset_index()

# Compute fraction of total community area population in the zip code
df_left = df_input.set_index("area")
df_right = df_area_pop.set_index("area")
df_zip_to_area = df_left.join(df_right, rsuffix="_area").reset_index()
df_zip_to_area["pop_frac_area"] = df_zip_to_area["pop"] / df_zip_to_area["pop_area"]

# Check join integrity
n_distinct = len(df_zip_to_area[["zip", "area"]].drop_duplicates())
assert len(df_input) == len(df_zip_to_area), "Number of rows should be the same after join."
assert len(df_zip_to_area) == n_distinct, "Rows should be unique on area and zip."

# Sort by primary keys and save
df = pd.DataFrame(df_zip_to_area)
df.sort_values(by=["zip", "area"], ascending=True, inplace=True)
df.to_csv(args.output_file, index=False)

end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")
