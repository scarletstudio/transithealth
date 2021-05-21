from flask import Blueprint, jsonify, request
from api.metrics.community import CommunityMetrics
from api.questions.pooled_trips import PooledTripMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to questions.
    """

    app = Blueprint('question', __name__)
    
    metric_community = CommunityMetrics(con)
    metric_pooled = PooledTripMetrics(con)


    @app.route("/question/hello")
    def hello():
        return jsonify({ "message": "Welcome to questions!" })

    @app.route("/question/pooled_trips")
    def pooled_trips():
        before_covid = ("2019-02-01", "2020-03-02")
        since_covid = ("2020-03-02", "2021-04-01")
        metrics = metric_community.merge_metrics({
            "rideshare_pooled_trip_rate_2019":
                lambda: metric_community.rideshare_pooled_trip_rate(year=2019),
            "avg_cost_per_trip_cents_before":
                lambda: metric_pooled.avg_cost_per_trip_cents_by_area(*before_covid),
            "avg_trips_per_day_before":
                lambda: metric_pooled.avg_trips_per_day_by_area(*before_covid),
            "avg_cost_per_trip_cents_since":
                lambda: metric_pooled.avg_cost_per_trip_cents_by_area(*since_covid),
            "avg_trips_per_day_since":
                lambda: metric_pooled.avg_trips_per_day_by_area(*since_covid)
        })
        return jsonify({ "metrics": metrics })


    return app
