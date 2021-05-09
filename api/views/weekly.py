from flask import Blueprint, jsonify, request
from api.metrics.weekly import WeeklyMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to weekly metrics.
    """

    app = Blueprint('weekly', __name__)
    
    metric = WeeklyMetrics(con)

    supported_metrics = {
        "weekly_rideshare_pickups": metric.rideshare_pickups,
        "weekly_covid_cases": metric.covid_cases
    }


    @app.route("/weekly/metrics", methods=["POST"])
    def weekly_metrics():
        """
        Returns the requested weekly metrics.
        """
        body = request.get_json()
        metric_list = body["metrics"] if "metrics" in body else []
        res = {}
        for metric_name in set(metric_list):
            if metric_name in supported_metrics:
                metric_fn = supported_metrics[metric_name]
                for row in metric_fn():
                    key = row["week"]
                    if key not in res:
                        res[key] = { "week": key }
                    res[key][metric_name] = row["value"]
        return jsonify({ "metrics": [ v for v in res.values() ] })

    return app
