"""
TransitHealth API Server
"""

import sys
sys.path.append("./")

from decouple import config
from flask import (
    Flask,
    jsonify,
    request,
    Response,
    send_file,
    render_template
)
from flask_cors import CORS
import sqlite3

from api.views import (
    index,
    rideshare
)


# Initialize Flask app and enable CORS.
app = Flask(__name__)
allow_list = config("ALLOW").strip().split(",")
cors = CORS(app, resource={"/*": {"origins": allow_list}})

# Initialize database connection in read-only mode
con = sqlite3.connect(config("DATABASE"), uri=True, check_same_thread=False)
# con.row_factory = sqlite3.Row
cur = con.cursor()

# Register blueprints for endpoint views
app.register_blueprint(index.make_blueprint(cur))
app.register_blueprint(rideshare.make_blueprint(cur))

# Start the server on the default host.
if __name__ == "__main__":
    print("Starting server...")
    app.run(host="0.0.0.0", port=int(config("PORT")))
