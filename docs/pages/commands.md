# Common Commands

## Run Services

- These commands should be run from the `transithealth/` directory.
- Run `run db` after `git pull` to get the latest database.
- If the `run` command does not work for you, [follow these instructions](#set-up-alias).
- If you are not on Cloud9, omit the `9` from run commands.

| Command | Description |
|:--|:--|
| `run api 9` | Start the backend API on Cloud9. |
| `run app 9` | Start the frontend app on Cloud9. |
| `run app 9 prod-api` | Start the frontend app on Cloud9, using prod API. |
| `run db` | Get the latest database from the compressed files. |
| `run tests` | Run all tests. |
| `run notebooks 9` | Run the Jupyter notebook server. |
| `run sqlite` | Run the SQLite command line interface. |
| `run update` | Update dependencies. |

## Run With Additional Arguments

You can use the `run` alias to run these commands with additional arguments. For example:

```bash
run make data/extracted/population.csv
```

...is equivalent to:

```bash
source .venv/bin/activate
cd pipeline
make data/extracted/population.csv
```

| Command | Description |
|:--|:--|
| `run make` | Run `make` with additional arguments. |
| `run pytest` | Run `pytest` with additional arguments. |
| `run sqlite3` | Run `sqlite3` with additional arguments. |

## Offline Pipeline

- These commands should be run from the `transithealth/` directory.
- In most cases, you will use `run pipeline-quick` to run the offline pipeline. 

| Command | Description |
|:--|:--|
| `run pipeline-quick` | Run the offline pipeline, without remaking large files. |
| `run pipeline-load` | Run only the load steps of the offline pipeline. |
| `run pipeline-all` | Run the entire offline pipeline from scratch. Takes a long time. |

## Git Commands

Read the documentation pages about [git](git.md) and [merge conflicts](merge_conflicts.md) for more information.

| Command | Description |
|:--|:--|
| `git pull` | Pull the latest version of the current branch from the repository. |
| `git checkout branch_name` | Switch to another branch. |
| `git checkout -b new_branch_name` | Create a new local branch. |
| `git status` | Check what files have been changed. |
| `git add -A` | Add all changes before creating a commit. |
| `git commit -m "Your commit message"` | Create a commit with a message. |
| `git push` | Push your commits to the repository. |

## Make Commands

Read the documentation page about [Makefiles](makefiles.md) for more information.

- Before running `make` directly, activate the virtual environment, and enter the `transithealth/pipeline` directory.
- These commands should be run from the `transithealth/pipeline` directory.

| Command | Description |
|:--|:--|
| `source .venv/bin/activate` | Activate the virtual environment. |
| `cd pipeline` | Enter the `pipeline/` directory. |
| `deactivate` | Deactivate the virtual environment. |
| `cd ..` | Go back up to the parent directory. |
| `rm target_name` | Delete a given target. |
| `make target_name` | Make a given target. |
| `make clean-except` | Delete all targets except for the large files. |
| `make reload` | Reload the database using your local files. |

## Set Up Alias

To set up the `run` command, enter these commands into your terminal. You only need to do this once.

```bash
echo "" >> ~/.bashrc
echo "alias run=\"$HOME/environment/transithealth/run.sh\"" >> ~/.bashrc
source ~/.bashrc
```

- This alias allows you to use `run` instead of writing out `./run.sh`.
- Adding this alias to your `~/.bashrc` config means that every terminal will have access to the alias.
