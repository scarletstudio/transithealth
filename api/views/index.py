from flask import Blueprint, jsonify
from api.utils.database import is_valid_table_name


def make_blueprint(cur):
    """
    Creates blueprint for main endpoints.
    """

    app = Blueprint('index', __name__)


    @app.route("/")
    def index():
        """
        Basic hello world route to check if server is running.
        """
        return "Welcome to TransitHealth."


    @app.route("/count/<table_name>")
    def count_table_name(table_name):
        """
        Count the number of rows in a given table.
        """
        if not is_valid_table_name(cur, table_name):
            raise ValueError(f"Invalid table name: {table_name}")
        query = """
            SELECT count(1)
            FROM {table_name}
        """.format(table_name=table_name)
        cur.execute(query)
        count = cur.fetchone()[0]
        return jsonify({ "count": count })


    return app
