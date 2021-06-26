# Cloud9

[Cloud9](https://aws.amazon.com/cloud9) is a cloud-based development environment that allows you to develop without installing the project on your computer. Instead, you connect to a remote machine and use an editor and terminals in your browser. The application runs on that remote machine and its IP address can be used as a URL to access it over the web.

## Common Commands

### Get Public IP Address

To access the frontend app and backend server from Cloud9, you need to get the public IP address of the remote instance.

```bash
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

This command will print the IP address. To get the URL, you can add `http://` before it and the port number (like `:8001`) after it.

### Out of Space on Disk

If you get an error saying that you have run out of space on disk, run this script to increase the size:

```bash
api/scripts/resize.sh 20
```

Your Cloud9 instance uses another machine for memory. This command will resize it to 20 GB.

If you see messages saying that you do not have permission to perform this operation, ask Vinesh for help.
