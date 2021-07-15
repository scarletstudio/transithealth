# Merge Conflicts

Merge conflicts are tricky for all engineers because resolving them may require knowledge about code that other people recently changed. As a general rule, if you are unsure about how to handle a merge conflict or spend more than 10 minutes trying to resolve one, ask your mentor or someone else to pair program with you on it.

## What is a merge conflict?

A merge conflict happens when we try to merge two branches that both edit the same code.

- Changes to different files or different parts of the same file can usually be merged **automatically**.
- Changes to the same part of a file usually need to be merged **manually**.

## How do I merge and resolve conflicts?

Commit your changes on your branch, then run these commands to get the latest version from the `main` branch:

```bash
git checkout main
git pull
git checkout -
git merge main
```

One of two things will happen:

1. The merge will be handled **automatically**.
2. You will have to finish the merge **manually**.

See the instructions below for how to handle those situations.

After handling the merge either automatically or manually, see the section on [Conflicts in Database Files](#conflicts-in-database-files) for how to update your database.

Then, you can continue working on your branch!

### Case 1. Automatic Merge

In case 1, git handles the merge automatically then asks you to write a message for the merge commit. It may cause a terminal text editor like Nano, Vim, or Emacs to suddenly pop up in your terminal.

You can accept the default message and then follow these instructions to exit the editor and get back to your terminal:

- By default, Cloud9 uses Nano as a terminal text editor. To exit Nano, press Ctrl + Shift + X. If you are still in Nano after that, the editor may give you an option to press Ctrl + Shift + M + A to append your message and exit.
- If you use Emacs as your terminal text editor, you can exit by pressing Ctrl + X.
- If you use Vim as your terminal text editor, you can exit by pressing Escape + : (colon) + wq! (exclamation point).

### Case 2. Manual Merge

In case 2, git is not able to handle the merge automatically. In the terminal, git will print a list of all files that have conflicting changes that could not be merged manually.

You should open each file and look for merge markers, which look like this `>>>>>` or this `<<<<<`. Cloud9 may replace the merge markers with its own highlighting, instead of the arrow symbols. Merge markers separate which content is from your version and which content is from the version you are merging in. You can choose which of the two versions to keep or, if needed, delete them both and rewrite the section based on the update.

When you resolve all the conflicts, commit your changes.

```bash
git add -A
git commit -m "Merged main."
```

### Conflicts in Database Files

In addition to code files, our repository also tracks the compressed database files. However, the actual `database.db` file on your machine is not committed to the repository, so it may go out of sync with the compressed database files.

If you have not made any changes to the offline pipeline or database on your branch, you can get the latest database by running:

```bash
run db
```

However, if you have merge conflicts with the compressed database files or any file in the `pipeline/` directory, you should run the offline pipeline to get a new database and compressed files that contain both your changes and the changes you merged in from `main`. Run this command:

```bash
run pipeline-quick
```

Depending on the change you are working on, there may still be errors to tend to in this step.

Now you can add another commit with the updates to the compressed database files.
