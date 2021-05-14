# Common Data Transformations

## Contents

- [Parse Date](#parse-date)
- [Convert Type](#convert-type)
- [Delete Columns](#delete-columns)
- [Delete Nulls](#delete-nulls)
- [Convert ZIP Code to Community Area](#convert-zip-code-to-community-area)

## Transformations

### Parse Date

```python
from utils.data import double_quote_json

df = extract_data_portal_dates(df, col="ymd", prefix="")
```

This helper method from `utils.data` parses a given date column and returns a DataFrame with three new columns:

- `dt`: a DateTime object giving you full access to the Python `datetime` module.
- `week_num`: the week and year number in ISO format (e.g. `2021-14` is the 14th week of 2021).
- `week`: the Sunday the week ends on in `YYYY-mm-dd` format.

If present, the argument `prefix` will be prepended to those column names. Otherwise, the name of the original column will be prepended.

### Convert Type

```python
df["dropoff_community_area"] = df["dropoff_community_area"].astype(int)
```

This code replaces the column `dropoff_community_area` with values converted to the type `int`.

### Delete Columns

```python
df.drop([
    "column_to_drop",
    "another_column",
    "yet_another"
], axis=1, inplace=True)
```

This method deletes the columns specified in the list.

- `axis=1` tells Pandas to delete along the column axis.
- `inplace=True` tells Pandas to modify `df` in place, otherwise we have to save the return value to a variable.

### Delete Nulls

```python
import pandas as pd

# Load data and drop nulls
raw_df = pd.read_csv(args.input_file)
df_spread = pd.DataFrame(raw_df.dropna())
print(f"Dropped {(len(raw_df) - len(df_spread)):,d} rows with nulls.")
```

This code reads a `.csv` file into a DataFrame, drops all rows with a null/NaN/missing value in **any** column, and then makes a copy of the DataFrame without nulls.

```python
raw_df.dropna(subset=["column_with_nulls"])
```

You can use the `subset` argument to only consider certain columns.

### Convert ZIP Code to Community Area

This helper method from `utils.geo` converts data grouped by ZIP code to data grouped by overlap of ZIP code and community area.

For more information, read the notebook [Converting Geographies](../notebooks/vkannan3/Converting%20Geographies.ipynb).

```python
import pandas as pd
import numpy as np
from utils.geo import convert_zip_to_community_area_proportionally

# Convert from weekly per zip code to weekly per zip code/community area overlap
df_zip_to_area = pd.read_csv(args.zip_to_area_file)
df = convert_zip_to_community_area_proportionally(
    df_zip_to_area,
    df_spread,
    cols_to_convert=["cases_weekly"],
    verbose=True
)
df["cases_weekly"] = df["cases_weekly"].apply(np.round)
```
