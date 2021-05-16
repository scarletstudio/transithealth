from flask import Blueprint, jsonify, request


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to questions.
    """

    app = Blueprint('question', __name__)


    @app.route("/question/hello")
    def hello():
        return jsonify({ "message": "Welcome to questions!" })


    return app
