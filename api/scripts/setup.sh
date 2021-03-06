#!/bin/bash

if [ ! -f archive.tgz ]; then
    echo "File not found: archive.tgz"
    echo "Please download the archive from Google Drive and upload it to your workspace."
    exit
fi

echo "[Step 0] Resizing the amount of storage..."
wget https://raw.githubusercontent.com/scarletstudio/transithealth/main/api/scripts/resize.sh
chmod 0777 resize.sh
./resize.sh 20
echo "DONE: Step 0 complete."
echo

echo "[Step 1] Generating an SSH key and writing it to your config..."
read -p "Enter the email address associated with your GitHub account: " GITHUB_EMAIL
echo "You should accept the default file location in which to save the key."
ssh-keygen -t ed25519 -C "$GITHUB_EMAIL"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
touch ~/.ssh/config
echo "
Host *
  AddKeysToAgent yes
  IgnoreUnknown UseKeychain
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
" >> ~/.ssh/config
chmod 600 ~/.ssh/config
chown $USER ~/.ssh/config
echo "DONE: Step 1 complete."
echo

echo "[Step 2] Adding the SSH key to your GitHub account..."
echo "Go to this link: https://github.com/settings/keys"
echo "Click the New SSH key button"
echo "Paste this single line as the key:"

cat ~/.ssh/id_ed25519.pub

echo
read -p "When you are ready to move on, hit enter to continue." READY
echo "DONE: Step 2 complete."
echo

echo "[Step 3] Cloning the repository..."
git clone git@github.com:scarletstudio/transithealth.git
echo "Moving archive.tgz to repository under directory: pipeline/"
cp archive.tgz transithealth/pipeline
cd transithealth
echo "DONE: Step 3 complete."
echo

echo "[Step 4] Creating environment files..."
echo "Getting instance IP address..."
INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
echo "Your public frontend URL will be: http://$INSTANCE_IP:8001"
echo "Your public backend URL will be: http://$INSTANCE_IP:5000"
echo "Creating .env file..."
echo "
# Tells the server what port to serve the API on
PORT=5000
# Tells the server what origins to accept requests from (comma-separated list, if multiple origins)
ALLOW=http://$INSTANCE_IP:8001
# Tells the server where to find the SQLite database file
DATABASE=pipeline/database.db
" > .env
echo "Creating app/.env.local file..."
echo "
# Tells the frontend app where to send requests to for the backend API (no slash at the end)
NEXT_PUBLIC_API=http://$INSTANCE_IP:5000
" > app/.env.local
echo "DONE: Step 4 complete."
echo

echo "[Step 5] Installing dependencies..."
# nvm does not work from the script, so default Node version (v10) will have to do for now
# echo "Setting up Node v14..."
# nvm install 14
# nvm use 14
# nvm alias default 14
echo "Installing Yarn..."
npm install --global yarn
echo "Installing frontend dependencies..."
cd app
yarn install
cd ..
echo "Creating virtual environment..."
pip3 install virtualenv
virtualenv .venv
source .venv/bin/activate
echo "Installing backend dependencies..."
pip3 install -r requirements.txt
echo "DONE: Step 5 complete."
echo

echo "[Step 6] Preparing data files..."
echo "Unpacking archive..."
cd pipeline
make unpack-archive
echo "Running offline pipeline..."
make
cd ..
echo "Running tests to verify database was built properly..."
pytest
echo "DONE: Step 6 complete."
echo

echo "[Step 7] Allowing traffic to ports..."
echo "Go to your Cloud9 page: https://us-east-2.console.aws.amazon.com/cloud9"
echo "- Click View details"
echo "- Click the link under Security groups"
echo "- Click the link under Security group ID"
echo "- Click Edit inbound rules"
echo "- Click Add rule"
echo "- For Type, select All traffic"
echo "- For Source, select Anywhere"
echo "- Click Save rules"
read -p "When you are ready to move on, hit enter to continue." READY
echo "DONE: Step 7 complete."
echo

echo "[Step 8] Adding alias for run script..."
echo "" >> ~/.bashrc
echo "alias run=\"$HOME/environment/transithealth/run.sh\"" >> ~/.bashrc
source ~/.bashrc
echo "DONE: Step 8 complete."
echo

echo "Setup complete! You should be ready to go."
echo "To start the frontend, open a new terminal window and run this line:"
echo
echo "  cd transithealth && run app 9"
echo
echo "To start the backend, open a new terminal window and run this line:"
echo
echo "  cd transithealth && run api 9"
echo
echo "Then view the app at: http://$INSTANCE_IP:8001/transithealth"
echo
