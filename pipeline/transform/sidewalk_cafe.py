import sys
sys.path.append("./")

import argparse
import pandas as pd
import numpy as np
from timeit import default_timer as timer
from datetime import date
from utils.data import extract_data_portal_dates
from utils.geo import convert_zip_to_community_area_proportionally

cli = argparse.ArgumentParser(description="Transform sidewalk cafe permit data.")
cli.add_argument("--zip_to_area_file", help="File to transform zip to community area")
cli.add_argument("--input_file", help="File path to read sidewalk cafe permit data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()


#Read data
raw_df = pd.read_csv(args.input_file)


#Extract dates
#will use the issued_date to demonstrate the change in the number of permits
df = extract_data_portal_dates(raw_df, col="issued_date")
df = extract_data_portal_dates(df, col="expiration_date")

#drop lat lon columns, too many null 
df.drop([
    "latitude",
    "longitude",
], axis=1, inplace=True)



#Output
df.to_csv(args.output_file, index=False)

#Summary
end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")