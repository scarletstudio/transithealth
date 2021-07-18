import argparse
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Transform traffic intensity data.")
cli.add_argument("--input_file", help="File path to read traffic intensity data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file
df = pd.read_csv(args.input_file)

#grabbing the year of the data
df["timeline"] = df["period"].astype(int)

# If population is the empty string, then the value represents the total population
df["segment"] = df["population"].fillna("all")
df["area_number"] = df["geoid"].apply(lambda s: s.split("-")[1]).astype(int)

# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")
