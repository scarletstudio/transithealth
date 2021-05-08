"""
Utility methods for working with geospatial and geographic data.
"""

import pandas as pd


def convert_zip_to_community_area_proportionally(
    df_zip_to_area,
    df_input,
    cols_to_convert=[],
    zip_col="zip",
    verbose=False
):
    """
    Converts zip code-level data to community area-level data in pairs of zip/area overlap
    - Overlap means each row represents the intersection of a zip code and community area
    - For a given zip code, there can be multiple community areas
    - And for a given community area, there can be multiple zip codes
    Args:
        df_zip_to_area (DataFrame): equivalency table for zip codes to community areas
        df_input (DataFrame): data to transform
        cols_to_convert (list<str>): list of columns to convert
        zip_col (str: optional): column in `df_input` that contains the zip code
        verbose (bool): if True, print details of conversion join
    Returns:
        DataFrame with the transformed columns and equivalency columns.
    """
    if len(cols_to_convert) == 0:
        raise ValueError("No columns requested to convert.")
    # Fix zip code join keys
    df_input[zip_col] = df_input[zip_col].astype(str)
    df_zip_to_area["zip"] = df_zip_to_area["zip"].astype(str)
    df = pd.merge(left=df_input, right=df_zip_to_area, on="zip")
    # Optionally, show results of exploding join from per-zip to per-zip-and-area
    if verbose:
        print(f"Before: {len(df_input)} rows at zip code granularity.")
        print(f"After:  {len(df)} rows at zip code and area overlap granularity.")
    # Transform requested columns by proportion
    for col in cols_to_convert:
        df[f"{col}_original"] = df[col]
        df[col] = df[col] * df["pop_frac_area"]
    return df
