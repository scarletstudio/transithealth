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

    # Get columns from schema
    table_name = args.table_name
    cur.execute("select * from {table_name} limit 1".format(table_name=table_name))
    cols = [col[0] for col in cur.description]
    
    # Insert data into table from file, using only columns in the schema
    df = pd.read_csv(args.input_file)[cols]
    df.to_sql(table_name, con, schema=table_name, if_exists="append", index=False)

    with open(f"data/loaded/{table_name}.txt", "w") as done_file:
        done_file.write("\n".join([
            f"rows: {len(df)}",
            f"cols: {len(cols)}"
        ]))

    # Show summary
    end = timer()
    secs = end - start
    print(f"Wrote {len(df):,d} rows to table `{table_name}` in {secs:.1f} secs.")
