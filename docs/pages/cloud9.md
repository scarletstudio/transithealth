# Cloud9

[Cloud9](https://aws.amazon.com/cloud9) is a cloud-based development environment that allows you to develop without installing the project on your computer. Instead, you connect to a remote machine and use an editor and terminals in your browser. The application runs on that remote machine and its IP address can be used as a URL to access it over the web.

## Create a Cloud9 Environment

### 1. Login to AWS

Check your email or Slack for a message with your credentials.

- Go to [the AWS homepage](https://aws.amazon.com)
- Click the "My Account" dropdown in the top-right corner
- Click "AWS Management Console"
- Select the "IAM user" option
- Enter the account ID (12 digits) provided to you
- Sign in with the IAM user name and password provided to you
- Search for Cloud9 in the services search bar and click on the result

### 2. Create your environment

We will use all the default settings.

- Click the "Create environment" button
- Enter the name (e.g. "Vinesh TransitHealth")
- Enter an optional description
- Click the "Next step" button
- For environment type, select "Create a new EC2 instance for environment (direct access)"
- For instance type, select "t2.micro (1 GiB RAM + 1 vCPU)"
- For platform, select "Amazon Linux 2 (recommended)"
- For cost-saving setting, leave as "After 30 minutes (default)"
- Click the "Next step" button
- Click the "Create environment" button
- Wait for your AWS Cloud9 environment to be set up


### 3. Set up the TransitHealth project

Since Cloud9 provides consistent Linux environments, most of this setup should work automatically.

- Download the `archive.tgz` file from [this Google Drive link](https://drive.google.com/file/d/1UG0G8PemaT1YU_BKaOfN-PIq191KvceV/view?usp=sharing)
- Click the "File" menu, then click "Upload local files" and upload `archive.tgz` to your Cloud9 environment
- Download the `setup.sh` script by running this in your terminal:

```bash
wget https://raw.githubusercontent.com/scarletstudio/transithealth/main/api/scripts/setup.sh
```

- Enable and run the script:

```bash
chmod 0777 setup.sh
./setup.sh
```

- Follow the instructions the script prints out
- The script will ask you to copy an SSH key and add it to your account on the GitHub website
- When the script finishes, it will tell you how to run the frontend and backend
- Then it will give you a public link to view the app in your browser

If the setup script fails at any point:

- Ask Vinesh for help
- Or follow the manual setup instructions in [the setup guide](setup.md)
- If you have trouble with generating the SSH key, refer to these two guides:
    - [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    - [Adding a new SSH key to your GitHub account](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Common Commands

### Get Public IP Address

To access the frontend app and backend server from Cloud9, you need to get the public IP address of the remote instance.

```bash
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

This command will print the IP address. To get the URL, you can add `http://` before it and the port number (e.g. `:8001`) after it.

### Out of Space on Disk

If you get an error saying that you have run out of space on disk, run this script to increase the size:

```bash
api/scripts/resize.sh 20
```

Your Cloud9 instance uses another machine for memory. This command will resize it to 20 GB.

If you see messages saying that you do not have permission to perform this operation, ask Vinesh for help.
