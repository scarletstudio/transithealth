from flask import Blueprint, jsonify, request
from api.metrics.weekly import WeeklyMetrics
from api.metrics.yearly import YearlyMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to weekly metrics.
    """

    app = Blueprint("weekly", __name__)
    
    metric = WeeklyMetrics(con)
    yearly_metric = YearlyMetrics(con)

    start_week_2018 = "2018-01-01"
    start_week_covid = "2020-03-02"
    start_year_2018 = "2018"

    supported_metrics = {
        "weekly_rideshare_pickups": lambda: metric.rideshare_pickups(since=start_week_2018),
        "weekly_rideshare_pickups_covid": lambda: metric.rideshare_pickups(since=start_week_covid),
        "weekly_rideshare_avg_cost": lambda: metric.rideshare_avg_cost_cents(since=start_week_2018),
        "weekly_rideshare_avg_cost_covid": lambda: metric.rideshare_avg_cost_cents(since=start_week_covid),
        "weekly_covid_cases": metric.covid_cases,
        "yearly_disability_rate":lambda: metric.disability_rate(since=start_year_2018),
        "yearly_belonging_rate_all": lambda: yearly_metric.belonging("all"),
        "yearly_belonging_rate_W": lambda: yearly_metric.belonging("W"),
        "yearly_belonging_rate_B": lambda: yearly_metric.belonging("B"),
        "yearly_belonging_rate_A": lambda: yearly_metric.belonging("A"),
        "yearly_belonging_rate_H": lambda: yearly_metric.belonging("H")
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
