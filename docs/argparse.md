# Argparse

The `argparse` module helps write a command line interface (CLI) for your Python script. [View the official documentation here](https://docs.python.org/3/library/argparse.html).

## Example Usage

### Python Script

```python
# In transform/daily_rideshare.py
import argparse

cli = argparse.ArgumentParser(description="Transform raw daily rideshare data.")
cli.add_argument("--input_file", help="File path to read raw data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

raw_df = pd.read_csv(args.input_file)
# More data processing code
df.to_csv(args.output_file, index=False)
```

This code block specifies two CLI flags:

- `--input_file`
- `--output_file`

### Terminal Command

```bash
# In your terminal or in a `make` command
data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
    python3 transform/daily_rideshare.py \
        --input_file="data/extracted/daily_rideshare.csv" \
        --output_file="data/transformed/rideshare.csv"
```

This command runs the Python script with values specified for the CLI flags.