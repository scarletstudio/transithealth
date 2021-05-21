from flask import Blueprint, jsonify, request
from api.metrics.community import CommunityMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to community areas.
    """

    app = Blueprint('community', __name__)
    
    metric = CommunityMetrics(con)

    supported_metrics = {
        "rideshare_pickups_covid": metric.rideshare_total_pickups,
        "rideshare_pooled_trip_rate_2018": lambda: metric.rideshare_pooled_trip_rate(year=2018),
        "rideshare_pooled_trip_rate_2019": lambda: metric.rideshare_pooled_trip_rate(year=2019),
        "rideshare_pool_request_rate_2018": lambda: metric.rideshare_pool_request_rate(year=2018),
        "rideshare_pool_request_rate_2019": lambda: metric.rideshare_pool_request_rate(year=2019),
        "total_population_2000": lambda: metric.population(year=2000, segment="all"),
        "total_population_2010": lambda: metric.population(year=2010, segment="all"),
        "total_population_2019": lambda: metric.population(year=2019, segment="all"),
        "total_covid_cases": lambda: metric.covid_spread_sum_by_area("cases_weekly")
    }


    @app.route("/community/metrics", methods=["POST"])
    def community_metrics():
        """
        Returns the maximum number of trips of any record.
        """
        body = request.get_json()
        metric_list = body["metrics"] if "metrics" in body else []
        metric_fns = {
            metric_name: supported_metrics[metric_name]
            for metric_name in metric_list
            if metric_name in supported_metrics
        }
        metrics = metric.merge_metrics(metric_fns)
        return jsonify({ "metrics": metrics })

    return app
