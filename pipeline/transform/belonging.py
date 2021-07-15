import argparse
import pandas as pd
from timeit import default_timer as timer

# Function used to check if a particular string has a "-" to help identify between layers
def split_by_dash(text: str):
    if "-" in text:
        return text.split("-")
    return [text,text]
    
cli = argparse.ArgumentParser(description="Transform belonging data.")
cli.add_argument("--input_file", help="File path to read belonging data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file
df = pd.read_csv(args.input_file)


# Split the period (e.g. 2015-2019) into start and end year
df["period_start_year"] = df["period"].apply(lambda s: split_by_dash(s)[0]).astype(int)
df["period_end_year"] = df["period"].apply(lambda s: split_by_dash(s)[1]).astype(int)

# If population is the empty string, then the value represents the total population
df["segment"] = df["population"].fillna("all")
# Split area number (e.g. 1714000-35) to separate the neighborhood ID (35 in this case)
df["area_number"] = df["geoid"].apply(lambda s: split_by_dash(s)[1]).astype(int)


# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")
