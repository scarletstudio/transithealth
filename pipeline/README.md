# Offline Pipeline

Offline pipeline for the backend.

## Directory Structure

```
pipeline
├── data/               (Ignore, not committed) Interim files produced by the pipeline.
|   ├── extracted/      (Ignore, not committed) Interim files extracted from other sources.
|   └── transformed/    (Ignore, not committed) Interim files transformed from other inputs.
├── extract/            Python and SQL scripts for extracting data from other sources.
├── load/               Python and SQL scripts for loading tables into the database.
└── transform/          Python and SQL scripts for data transformations.
```

## Common Commands

Before starting work on the offline pipeline, activate your virtual environment and change to its directory.

```bash
source .venv/bin/activate
cd pipeline
```

Delete only the local database and recreate it from files in `data/`. If files are missing, those steps will run.

```bash
make latest
```

Delete all existing pipeline data and run the entire pipeline from scratch (takes a long time!).

```bash
make clean && make
```
