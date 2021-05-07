import argparse
import pandas as pd
import requests
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Run SoQL query to download results from data portal.")
cli.add_argument("--json_url", help="JSON URL of resource.")
cli.add_argument("--soql_file", help="File path to read SoQL query from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

with open(args.soql_file) as soql_file:

    # Read SoQL query and send with data portal request
    raw_query = soql_file.read()
    res = requests.get(args.json_url, params={"$query": raw_query})
    
    # Parse results to JSON and save as CSV
    df = pd.DataFrame(res.json())
    df.to_csv(args.output_file, index=False)

    # Show summary
    end = timer()
    secs = end - start
    print(f"Fetched {len(df):,d} records in {secs:.1f} secs.")
