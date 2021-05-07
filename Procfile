web: apt-get install sshpass && sshpass -p $DROPLET_SECRET scp root@$DROPLET:storage/transithealth/database.db pipeline/database.db && gunicorn --bind 0.0.0.0:$PORT api:app
