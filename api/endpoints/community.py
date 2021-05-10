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
        "total_population_2000": lambda: metric.demography("total_population_2000"),
        "total_population_2010": lambda: metric.demography("total_population_2010"),
        "total_covid_cases": lambda: metric.covid_spread_sum_by_area("cases_weekly")
    }


    @app.route("/community/metrics", methods=["POST"])
    def community_metrics():
        """
        Returns the maximum number of trips of any record.
        """
        body = request.get_json()
        metric_list = body["metrics"] if "metrics" in body else []
        res = {}
        for area in metric.community_areas():
            res[area["area_number"]] = area
        for metric_name in set(metric_list):
            if metric_name in supported_metrics:
                metric_fn = supported_metrics[metric_name]
                for row in metric_fn():
                    number = row["area_number"]
                    if number in res:
                        res[number][metric_name] = row["value"]
        return jsonify({ "metrics": [ v for v in res.values() ] })

    return app
