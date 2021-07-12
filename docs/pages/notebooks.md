# Jupyter Notebooks

Jupyter notebooks allow us to write Python (and other languages, like SQL!) and interact with the output. They are a great tool for data exploration, debugging, and prototyping.

### Usage

You can start the Jupyter notebook server from the project root directory. If you are using Cloud9, include the `9`.

```bash
run notebooks 9
```

## Setup Instructions

### 1. Create Your Directory

Create a new folder with your username. This is where your notebooks will live. Change the command below to replace `YOUR_HAWK_USERNAME` with your Hawk username. By convention, folder names are lowercase.

```bash
mkdir notebooks/YOUR_HAWK_USERNAME
```

Copy the example notebook into your folder. Change the command below to replace `YOUR_HAWK_USERNAME` with your Hawk username.

```bash
cp "notebooks/example/Example Notebook.ipynb" "notebooks/YOUR_HAWK_USERNAME/My Example Notebook.ipynb"
```

### 2. Run the Notebook Server

You can start the Jupyter notebook server from the project root directory. If you are using Cloud9, include the `9`.

```bash
run notebooks 9
```

### 3. Connect via Token

On Cloud9, Jupyter will not be able to automatically open your browser. Instead look for output in the terminal like this:

```
Running Jupyter notebook server on: http://18.118.210.186:8080
Copy token from output below:
[I 17:48:26.391 NotebookApp] Serving notebooks from local directory: /home/ec2-user/environment/transithealth
[I 17:48:26.392 NotebookApp] Jupyter Notebook 6.3.0 is running at:
[I 17:48:26.392 NotebookApp] http://ip-172-31-1-51.us-east-2.compute.internal:8080/?token=d029f4f7e5ea7ced2c885194f53ccec8ba20bc685eb5321e
[I 17:48:26.392 NotebookApp]  or http://127.0.0.1:8080/?token=d029f4f7e5ea7ced2c885194f53ccec8ba20bc685eb5321e
[I 17:48:26.393 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[W 17:48:26.398 NotebookApp] No web browser found: could not locate runnable browser.
[C 17:48:26.398 NotebookApp] 
    
    To access the notebook, open this file in a browser:
        file:///home/ec2-user/.local/share/jupyter/runtime/nbserver-7819-open.html
    Or copy and paste one of these URLs:
        http://ip-172-31-1-51.us-east-2.compute.internal:8080/?token=d029f4f7e5ea7ced2c885194f53ccec8ba20bc685eb5321e
     or http://127.0.0.1:8080/?token=d029f4f7e5ea7ced2c885194f53ccec8ba20bc685eb5321e
```

Open the link that looks like this:

```
Running Jupyter notebook server on: http://18.118.210.186:8080
```

And copy the token (copy just the token, not the link or the `?token=` part) from the line that looks like this:

```
or http://127.0.0.1:8080/?token=d029f4f7e5ea7ced2c885194f53ccec8ba20bc685eb5321e
```

Paste the token into the login input on the Jupyter page and it will allow you to access your notebooks!

### 4. Run the Example Notebook

This will open a page in your browser with all the folders in our project. Click on the `notebooks/` folder and then open your folder. Click on your example notebook to launch it.

Using this command also ensures that the notebook server launches with our Python virtual environment, so you can use any module we have installed.

Run through the commands in the sample notebook. Click `Shift + Enter` to execute a cell. You can also do this step later.

Press the save icon in the top left corner of your notebook.

You can stop the notebook server by pressing `Cmd + C` or `Ctrl + C`. You may have to press twice.

After you are done using the example notebook, you can click the save icon in the top-left corner or from the File dropdown.

### 5. Create and Push Your Branch

**Note:** For this step, you will need access to the GitHub repository. Send Vinesh your GitHub username if you do not have access. You can find this on your GitHub profile or in the URL of your GitHub account page.

Now that you have made some changes, you will **commit** and **push** them to the main project repository.

First, we will create a new branch. Putting your change on a different branch allows you to work while others make changes to the repository and lets you submit your work for review, before merging it into the main repository.

Replace `YOUR_BRANCH_NAME` with `first_branch_YOUR_HAWK_USERNAME` where `YOUR_HAWK_USERNAME` is your Hawk username. By convention, branch names are lowercase.

```bash
git checkout -b YOUR_BRANCH_NAME
```

```bash
git status
```

The only change should be the notebooks folder you added and your new example notebook. If you see other changes, ask for help.

Use this command to add all of the changes to your commit. When you check the status again, they should show as "to be committed."

```bash
git add -A
git status
```

We only want to modify your new notebooks folder. If you see the example notebook on the list of staged changes, you can reset it to how it was originally with this command:

```bash
git restore "notebooks/example/Example Notebook.ipynb"
```

Next, create a commit and add a commit message.

```bash
git commit -m "Create my notebooks folder."
```

Now try to push the commit to the repository.

```bash
git push
```

The first time you push a commit from a new branch, it will fail and tell you that the branch is only on your local machine, not on the remote repository. Git will show you a command in the failure output. Run that command to push your branch to the repository. From then on, you will be able to push commits from this branch. The command will be like this:

```bash
git push --set-upstream origin YOUR_BRANCH_NAME
```

### 6. Open a Pull Request

After pushing, open a pull request so we can merge your new notebook folder into the main branch.

- Go to [the project repository on GitHub](https://github.com/scarletstudio/transithealth)
- Click on the **Pull Requests** tab
- Click **New pull request** in the top-right corner
- Select your branch name from the dropdown labeled **compare**
- Leave **main** as the value for the dropdown labeled **base**
- Click **Create pull request** in the top-right corner
- Fill out the title and description of your pull request
- Click **Create pull request** in the bottom-right bellow the description
- Ask your mentor to review and merge the pull request

![Screenshot showing how to open a new pull request on GitHub](../images/setup_pull_request.png)

Now you are ready to start using Jupyter notebooks!
