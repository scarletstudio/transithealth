# Offline Pipeline

Offline pipeline for the backend.

- Extracts data from outside sources
- Applies transformations to data
- Loads data into the database

## Directory Structure

```
pipeline
├── data/               (Not committed) Interim files produced by the pipeline.
|   ├── extracted/      (Not committed) Interim files extracted from other sources.
|   ├── loaded/         (Not committed) Metadata for tables loaded into the database.
|   └── transformed/    (Not committed) Interim files transformed from other inputs.
├── extract/            Python and SQL scripts for extracting data from other sources.
├── load/               Python and SQL scripts for loading tables into the database.
├── transform/          Python and SQL scripts for data transformations.
├── utils/              Helper functions.
├── compressed.db.tgz   Compressed version of the database that we can commit.
├── database.db         (Not committed) SQLite database that we can use.
├── Makefile            Specifies the steps to build all the data used by the project.
└── README.txt          (This file!) Helps explain the offline pipeline.
```

## Common Commands

Before starting work on the offline pipeline, activate your virtual environment and change to its directory.

```bash
source .venv/bin/activate
cd pipeline
```

To unpack the compressed database into a file that the server can read, use this command:

```bash
make uncompressed
```

To rebuild the entire database from scratch, use these commands (takes a long time!):

```bash
make clean && make
```

To rebuild the database from interim files in `data/`, use this command. If any interim files are missing, those steps will run.

You can also delete the `extracted/` or `transformed/` folders and then run this command to rebuild those stages.

```bash
make reload
```
