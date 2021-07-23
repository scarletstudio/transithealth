from flask import Blueprint, jsonify, request
from api.questions.disabilities import DisabilitiesMetrics
from api.questions.pooled_trips import PooledTripMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to questions.
    """

    app = Blueprint("question", __name__)
    
    metric_pooled = PooledTripMetrics(con)
    metric_disabilities = DisabilitiesMetrics(con)
    
    
    @app.route("/question/hello")
    def hello():
        return jsonify({ "message": "Welcome to questions!" })

    @app.route("/question/pooled_trips")
    def pooled_trips():
        before_covid = ("2019-02-01", "2020-03-02")
        since_covid = ("2020-03-02", "2021-04-01")
        rows = metric_pooled.pooled_trip_comparison(before_covid, since_covid)
        metrics = metric_pooled.metrics_by_area(rows)
        return jsonify({ "metrics": metrics })
        
    @app.route("/question/disabilities")
    def disabilities():
        rideshare_metrics = metric_disabilities.disabilities_rideshare_metrics()
        return jsonify({ "rideshare_metrics": rideshare_metrics })


    return app
