from flask import Blueprint, jsonify, request
from api.metrics.weekly import WeeklyMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to weekly metrics.
    """

    app = Blueprint('weekly', __name__)
    
    metric = WeeklyMetrics(con)

    start_week_2018 = "2018-01-01"
    start_week_covid = "2020-03-02"

    supported_metrics = {
        "weekly_rideshare_pickups": lambda: metric.rideshare_pickups(since=start_week_2018),
        "weekly_rideshare_pickups_covid": lambda: metric.rideshare_pickups(since=start_week_covid),
        "weekly_rideshare_avg_cost": lambda: metric.rideshare_avg_cost_cents(since=start_week_2018),
        "weekly_rideshare_avg_cost_covid": lambda: metric.rideshare_avg_cost_cents(since=start_week_covid),
        "weekly_covid_cases": metric.covid_cases
    }


    @app.route("/weekly/metrics", methods=["POST"])
    def weekly_metrics():
        """
        Returns the requested metrics by week.
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
        vals = list(sorted(res.values(), key=lambda r: r["week"]))
        return jsonify({ "metrics": vals })

    return app
