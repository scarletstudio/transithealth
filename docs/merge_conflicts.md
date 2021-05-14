# Merge Conflicts

Merge conflicts are tricky for all engineers because resolving them may require knowledge about code that other people recently changed. As a general rule, if you are unsure about how to handle a merge conflict or spend more than 10 minutes trying to resolve one, ask your mentor or someone else to pair program with you on it.

## What is a merge conflict?

Coming soon...

## Conflicts in Database Files

The database files are not human-readable, so we cannot figure out how to handle their merge markers. If you have a database merge conflict, run this command:

```bash
# Change to the pipeline/directory if you are not already there
cd pipeline
# Reload the database
make reload
# Return to the project root directory
cd ..
```

The reload command will delete the database files and reload the database and compressed version using the updated offline pipeline, this will produce a database that contains both your changes and the changes you are merging in. There may still be errors to tend to in this step.