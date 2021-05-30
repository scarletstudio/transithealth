## Run Staging

The staging environment is designed to match production as closely as possible.

If you need to use the staging environment, ask Vinesh for the `DROPLET` IP address to add to your `.env` file and the password for logging in via `ssh`.

You will need two terminal windows to start the app. In each terminal, `ssh` into the staging environment.

```bash
source .env
ssh root@$DROPLET
# Enter droplet password
cd transithealth
```

In one of the terminals, get the latest version of the repository.

```bash
git checkout main
git fetch
git pull
```

Now start the app and API.

**Terminal 1: Frontend**

```bash
cd app
yarn install
yarn build
yarn export
python3 -m http.server 8001
```

**Terminal 2: Backend**

```bash
source .venv/bin/activate
source .env
pip3 install -r requirements.txt
cat pipeline/compressed/db-part-* > pipeline/compressed.db.tgz
tar -xf pipeline/compressed.db.tgz -C pipeline
rm pipeline/compressed.db.tgz
gunicorn --bind 0.0.0.0:$PORT api:app
```

Now you can view the app at [bit.ly/transithealth-staging](http://bit.ly/transithealth-staging).
