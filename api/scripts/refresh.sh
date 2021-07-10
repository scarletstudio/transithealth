echo "Getting latest instance IP address..."
INSTANCE_IP=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
FRONTEND_URL="http://$INSTANCE_IP:8001"
BACKEND_URL="http://$INSTANCE_IP:5000"

echo "Updating .env"
sed -i "s,ALLOW=.*,ALLOW=$FRONTEND_URL," .env

echo "Updating app/.env.local"
sed -i "s,NEXT_PUBLIC_API=.*,NEXT_PUBLIC_API=$BACKEND_URL," app/.env.local

echo "Done."
