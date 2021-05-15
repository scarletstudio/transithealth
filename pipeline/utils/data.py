"""
Utility methods for data processing.
"""

from datetime import datetime as dt
import pandas as pd
import re


# Dictionary to rename columns from health atlas data points
HEALTH_ATLAS_VALUE_COLS = {
    "a": "topic",
    "l": "layer",
    "g": "geoid",
    "p": "population",
    "d": "period",
    "v": "value",
    "se": "std_error"
}

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

def week_num_to_week_date(week_num):
    """
    Converts from an ISO year and week number string to a date that
    represents the last date of that week with year, month, and day.
    """
    # Get Sunday as the last day of the week (%u = 7)
    week_with_day = f"{week_num}-7"
    week_date = dt.strptime(week_with_day, "%G-%V-%u")
    week_date_str = dt.strftime(week_date, "%Y-%m-%d")
    return week_date_str

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
    df[f"{pre}week_num"] = df[f"{pre}dt"].apply(lambda d: dt.strftime(d, "%G-%V"))
    df[f"{pre}week"] = df[f"{pre}week_num"].apply(week_num_to_week_date)
    return df
