import argparse
import pandas as pd
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Transform CTA L Train stop data.")
cli.add_argument("--input_file", help="File path to read CTA L Train stop data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file
df = pd.read_csv(args.input_file)

# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")

