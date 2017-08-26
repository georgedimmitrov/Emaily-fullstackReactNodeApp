# localtunnel sometimes crashes so this script automatically restarts it!
function localtunnel {
  lt -s ubmauniyqusdneomi --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done