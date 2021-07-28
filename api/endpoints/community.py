from flask import Blueprint, jsonify, request
from api.metrics.community import CommunityMetrics
from api.metrics.rent_burdened import RentBurdenedMetrics
from api.metrics.taxitrips import TaxiTripMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to community areas.
    """

    app = Blueprint("community", __name__)
    
    metric = CommunityMetrics(con)
    metric_rbu = RentBurdenedMetrics(con)
    metric_tt = TaxiTripMetrics(con)

    supported_metrics = {
        "rideshare_pickups_covid": metric.rideshare_total_pickups,
        "rideshare_pooled_trip_rate_2018": lambda: metric.rideshare_pooled_trip_rate(year=2018),
        "rideshare_pooled_trip_rate_2019": lambda: metric.rideshare_pooled_trip_rate(year=2019),
        "rideshare_pool_request_rate_2018": lambda: metric.rideshare_pool_request_rate(year=2018),
        "rideshare_pool_request_rate_2019": lambda: metric.rideshare_pool_request_rate(year=2019),
        "total_population_2000": lambda: metric.population(year=2000, segment="all"),
        "total_population_2010": lambda: metric.population(year=2010, segment="all"),
        "total_population_2019": lambda: metric.population(year=2019, segment="all"),
        "median_income_2010": lambda: metric.income(year=2010, segment="all"),
        "median_income_2017": lambda: metric.income(year=2017, segment="all"),
        "median_income_2018": lambda: metric.income(year=2018, segment="all"),
        "median_income_2019": lambda: metric.income(year=2019, segment="all"),
        "total_covid_cases": lambda: metric.covid_spread_sum_by_area("cases_weekly"),
        "disability_rate_2018":lambda: metric.disability_rate(year=2018, segment="all"),
        "disability_rate_2019":lambda: metric.disability_rate(year=2019, segment="all"),
        "belonging_rate_2017": lambda: metric.belonging(year=2017, segment="all"),
        "belonging_rate_2018": lambda: metric.belonging(year=2018, segment="all"),
        "rent_burdened_2017": lambda: metric_rbu.rent_burdened(year=2017, segment="all"),
        "rent_burdened_2018": lambda: metric_rbu.rent_burdened(year=2018, segment="all"),
        "rent_burdened_2019": lambda: metric_rbu.rent_burdened(year=2019, segment="all"),
        "rent_max": lambda: metric_rbu.rent_max_burdened(),
        "rent_min": lambda: metric_rbu.rent_min_burdened(),
        "rent_average": lambda: metric_rbu.rent_average_burden_area(),
        "avg_speed_per_dropoff": lambda: metric_tt.get_avg_speed_per_dropoff(),
        "avg_speed_per_pickup": lambda: metric_tt.get_avg_speed_per_pickup()
    }


    @app.route("/community/metrics", methods=["POST"])
    def community_metrics():
        """
        Returns the requested metrics by community area.
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
