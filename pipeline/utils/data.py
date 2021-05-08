"""
Utility methods for data processing.
"""

from datetime import datetime as dt
import pandas as pd
import re


def double_quote_json(s):
    """
    Converts JSON to use double quotes instead of single quotes.
    From StackOverflow: https://stackoverflow.com/a/50257217
    Args:
        s (str): Stringified JSON that uses single quotes.
    Returns:
        Stringified JSON that uses double quotes (str).
    """
    p = re.compile('(?<!\\\\)\'')
    s = p.sub('\"', s)
    return s

def extract_data_portal_dates(df_input, col, prefix=None):
    """
    Parses a given data portal timestamp field by column and adds columns for
    a datetime object and ISO-standard week and year.
    Args:
        df_input (DataFrame): data to extract date from
        col (str): column of timestamp field to extract
        prefix (str: optional): prefix to use for newly created columns
    Returns:
        Copy of a DataFrame with the parsed and extracted columns.
    """
    pre = prefix if prefix is not None else col + "_"
    df = pd.DataFrame(df_input)
    df[col] = df[col].apply(lambda s: s.split("T")[0])
    df[f"{pre}dt"] = df[col].apply(lambda s: dt.strptime(s, "%Y-%m-%d"))
    df[f"{pre}week"] = df[f"{pre}dt"].apply(lambda d: dt.strftime(d, "%G-%V"))
    return df
