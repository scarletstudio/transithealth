# Using Git

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