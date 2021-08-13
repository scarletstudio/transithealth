import sys
sys.path.append("./")

import argparse
import pandas as pd
import numpy as np
from timeit import default_timer as timer
from utils.data import extract_data_portal_dates
import calendar
import datetime


cli = argparse.ArgumentParser(description="Transform raw COVID spread data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Load data and drop nulls
raw_df = pd.read_csv(args.input_file)
df = pd.DataFrame(raw_df.dropna(subset=[
	"week",
	"year"
]))

print(f"Dropped {(len(raw_df) - len(df)):,d} rows with nulls.")

# rename



df.rename(
    inplace=True,
    columns={
        "sum_cases_age_0_17" : "cases_age_0_17" ,
    	"sum_cases_age_18_29" : "cases_age_18_29",
    	"sum_cases_age_30_39": "cases_age_30_39",
    	"sum_cases_age_40_49": "cases_age_40_49",
    	"sum_cases_age_50_59": "cases_age_50_59",
    	"sum_cases_age_60_69": "cases_age_60_69",
    	"sum_cases_age_70_79": "cases_age_70_79",
    	"sum_cases_age_80_": "cases_age_80_",
    	"sum_deaths_0_17_yrs": "deaths_0_17_yrs",
    	"sum_deaths_18_29_yrs": "deaths_18_29_yrs",
    	"sum_deaths_30_39_yrs": "deaths_30_39_yrs",
    	"sum_deaths_40_49_yrs": "deaths_40_49_yrs",
    	"sum_deaths_50_59_yrs": "deaths_50_59_yrs",
    	"sum_deaths_60_69_yrs": "deaths_60_69_yrs",
    	"sum_deaths_70_79_yrs": "deaths_70_79_yrs",
    	"sum_deaths_80_yrs": "deaths_80_yrs"
    }
)


# change format of week to yyyy-mm-dd //
df = extract_data_portal_dates(df, col="week_start", prefix="")

df.drop([
    "week_start",
    "week_end",
    "dt",
    "week_num"
], axis=1, inplace=True)


df.to_csv(args.output_file, index=False)

end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")
