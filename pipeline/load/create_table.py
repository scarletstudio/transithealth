import argparse
import pandas as pd
import sqlite3
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Transform raw daily rideshare data.")
cli.add_argument("--database", help="File path to SQLite database.")
cli.add_argument("--input_file", help="File path to read table data from.")
cli.add_argument("--create_sql", help="File path to read SQL create table statement from.")
cli.add_argument("--table_name", help="Name of SQL table to create or replace.")
args = cli.parse_args()

start = timer()

con = sqlite3.connect(args.database)
cur = con.cursor()

with open(args.create_sql) as create_script:
    
    # Run create table statement to create schema
    raw_statement = create_script.read()
    cur.executescript(raw_statement)
    
    # Insert data into table from file
    df = pd.read_csv(args.input_file)
    df.to_sql(args.table_name, con, if_exists="replace", index=False)

    # Show summary
    end = timer()
    secs = end - start
    print(f"Wrote {len(df):,d} rows to table `{args.table_name}` in {secs:.1f} secs.")
