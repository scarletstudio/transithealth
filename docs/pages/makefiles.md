# Makefiles

`Make` is a tool that helps engineers and researchers specify how to create certain files. It is handy for mapping out data dependencies, creating reproducible results, and automating simple tasks. We write a `Makefile` to organize all the steps in our offline pipeline.

## Contents

- [Reading Makefiles](#reading-makefiles)
- [Running Makefiles](#running-makefiles)
- [Writing Makefiles](#writing-makefiles)

## Reading Makefiles

Each part of a `Makefile` has three parts:

- **Target:** the file path of the object to make.
- **Dependencies:** the targets that we must make before this one.
- **Commands:** the commands to run to make this target.

Steps in `make` look like this:

```make
TARGET_NAME: DEPENDENCY_TARGET_NAME_1 DEPENDENCY_TARGET_NAME_2 DEPENDENCY_TARGET_NAME_3
    COMMAND_1
    COMMAND_2 --flag_1="command with CLI flags"
    COMMAND_2 \
        --flag_1="command split over multiple lines with backslashes" \
        --flag_2="another option"
    COMMAND_4
```

Here is an example from our offline pipeline:

```make
data/transformed/rideshare.csv: data/extracted/daily_rideshare.csv
    python3 transform/daily_rideshare.py \
        --input_file="data/extracted/daily_rideshare.csv" \
        --output_file="data/transformed/rideshare.csv"
```

There can also be **phony targets**, where the target does not match any file name that gets created. These become like scripts we can run. One of the `make` commands you will run often is a phony target:

```bash
make reload
```

## Running Makefiles

### Specific Run

You can run a `make` command like this:

```bash
make TARGET_NAME
```

If `TARGET_NAME` has not been created, `make` will find all of its dependency targets recursively and run them to make it. If any of the target's dependencies have changed since this target file was last edited, then `make` will also update the current target.

If `TARGET_NAME` has already been created, `make` will tell you there is nothing to be done:

```bash
make: `TARGET_NAME` is up to date.
```

After you update a specific target, you can also run the phony target `reload`, which deletes your local database and triggers all steps to load it again.

```bash
make reload
```

### Complete Run

This is the most destructive `make` command you can run. It will delete all the files created by our Makefile and then run the entire pipeline from scratch.

```bash
make clean && make
```

### Partial Run

Sometimes you only want to run the parts of the pipeline that you affected. Luckily, `make` helps handle this. Recall that `make` will update any targets whose dependencies have changed. This means you can run part of the pipeline by following these steps:

1. Delete the earliest dependency for the target you want to update (usually one of the extracted files)
2. Reload the database, which will trigger all steps to load the database, but only update the steps that depend on the file you deleted

The commands are as follows:

```bash
rm PATH/TO/FILE/TO/DELETE
make reload
```

### Complete Run with Exceptions

Some files take a long time to make and we would prefer to avoid running their steps if we are sure that we do not affect them. We have created a special phony target to handle this.

```bash
make clean-except && make
```

You can use `clean-except` to clean all files except for some files we have given exceptions to. The exceptions are specified in the target, and they must satisfy two criteria:

1. They have no dependencies
2. They take a long time to make

Currently, the only datasets that we want to make exceptions for are the rideshare and taxi trips datasets, since they are the largest datasets we will extract.

## Writing Makefiles

To add a step, make sure you specify [all three parts](#reading-makefiles).

If one `make` step becomes too complicated, think about breaking it up into multiple steps with dependencies.

Read comments in the `Makefile` to understand which steps are organized together.

You can also put variables in your `Makefile` like this:

```bash
# This variable can be used in the Makefile
PORTAL_RIDESHARES := https://data.cityofchicago.org/resource/m6dm-c72p.json
# This variable can be used in the Makefile and read as an environment variable by commands
export CHICAGO_HEALTH_ATLAS_API=https://api.chicagohealthatlas.org/api/v1
```

In your `Makefile` steps, you can insert a variable like this:

```make
data/extracted/daily_rideshare.csv:
    python3 extract/from_data_portal.py \
        --json_url="$(PORTAL_RIDESHARES)" \
        --soql_file="extract/daily_rideshare.sql" \
        --output_file="data/extracted/daily_rideshare.csv"
```

In your Python code, you can access an environment variable like this:

```python
import os

API = os.environ.get("CHICAGO_HEALTH_ATLAS_API")
```

## Rerunning Makefiles

