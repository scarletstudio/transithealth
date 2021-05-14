# Using Git

Check out the GitHub Education [git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf) for more.

## Create a Branch

```bash
# Check out the branch you want to base your new branch off of
git checkout main
git checkout -b YOUR_BRANCH_NAME
git push --set-upstream origin YOUR_BRANCH_NAME
```

## Commit Your Work

```bash
# Add all changed files to staging for commit
git add -A
# View which files have been affected
git status
git commit -m "YOUR COMMIT MESSAGE"
git push
```

## Update Your Branch

Other engineers will be adding datasets at the same time, so you will want to keep your branch updated. When you have no uncommitted changes you can run these commands:

```bash
git checkout main
git fetch 
git pull
git checkout YOUR_BRANCH_NAME
git merge main
```

If there are any merge conflicts, refer to the [Handling Merge Conflicts](merge_conflicts.md) guide for help.

## View Diffs

To view the files that you have changed:

```bash
git status
```

To view the differences between your version and the previous commit:

```bash
git diff
```

You can also write the diff to a file so you can open and read that file:

```bash
git diff > diff.txt
# After you finish inspecting the diff, delete it
rm diff.txt
```