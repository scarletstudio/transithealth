from flask import Blueprint, jsonify, request
from api.metrics.community import CommunityMetrics
from api.metrics.rent_burdened import RentBurdenedMetrics
from api.metrics.taxitrips import TaxiTripMetrics
from api.metrics.escooter_metric import EscooterMetric
from api.metrics.Covid_cdd_metric import Covid_CDD_Metric


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to community areas.
    """

    app = Blueprint("community", __name__)
    
    metric = CommunityMetrics(con)
    metric_rbu = RentBurdenedMetrics(con)
    metric_tt = TaxiTripMetrics(con)
    metric_em = EscooterMetric(con)
    metric_co = Covid_CDD_Metric(con)
    
    supported_metrics = {
        "rideshare_pickups_covid": metric.rideshare_total_pickups,
        "rideshare_pooled_trip_rate_2018": lambda: metric.rideshare_pooled_trip_rate(year=2018),
        "rideshare_pooled_trip_rate_2019": lambda: metric.rideshare_pooled_trip_rate(year=2019),
        "rideshare_pool_request_rate_2018": lambda: metric.rideshare_pool_request_rate(year=2018),
        "rideshare_pool_request_rate_2019": lambda: metric.rideshare_pool_request_rate(year=2019),
        "total_population_2010": lambda: metric.population(year=2010, segment="all"),
        "total_population_2019": lambda: metric.population(year=2019, segment="all"),
        "median_income_2010": lambda: metric.income(year=2010, segment="all"),
        "median_income_2017": lambda: metric.income(year=2017, segment="all"),
        "median_income_2018": lambda: metric.income(year=2018, segment="all"),
        "median_income_2019": lambda: metric.income(year=2019, segment="all"),
        "traffic_intensity_2016": lambda: metric.traffic_intensity(year=2016, segment="all"),
        "traffic_intensity_2017": lambda: metric.traffic_intensity(year=2017, segment="all"),
        "traffic_intensity_2018": lambda: metric.traffic_intensity(year=2018, segment="all"),
        "traffic_intensity_2019": lambda: metric.traffic_intensity(year=2019, segment="all"),
        "traffic_intensity_2020": lambda: metric.traffic_intensity(year=2020, segment="all"),
        "total_covid_cases": lambda: metric.covid_spread_sum_by_area("cases_weekly"),
        "disability_rate_2018":lambda: metric.disability_rate(year=2018, segment="all"),
        "disability_rate_2019":lambda: metric.disability_rate(year=2019, segment="all"),
        "belonging_rate_2017": lambda: metric.belonging(year=2017, segment="all"),
        "belonging_rate_2018": lambda: metric.belonging(year=2018, segment="all"),
        "sidewalk_cafe_permits_area": metric.total_cafe_permits_by_area,
        "rent_burdened_2017": lambda: metric_rbu.rent_burdened(year=2017, segment="all"),
        "rent_burdened_2018": lambda: metric_rbu.rent_burdened(year=2018, segment="all"),
        "rent_burdened_2019": lambda: metric_rbu.rent_burdened(year=2019, segment="all"),
        "rent_max": lambda: metric_rbu.rent_max_burdened(),
        "rent_min": lambda: metric_rbu.rent_min_burdened(),
        "rent_average": lambda: metric_rbu.rent_average_burden_area(),
        "avg_speed_per_dropoff": lambda: metric_tt.get_avg_speed_per_dropoff(),
        "avg_speed_per_pickup": lambda: metric_tt.get_avg_speed_per_pickup(),
        "avg_distance_based_on_start_can": lambda: metric_em.avg_distance_based_on_start_can(),
        "avg_distance_based_on_end_can": lambda: metric_em.avg_distance_based_on_end_can(),
        "number_of_trips_based_on_start_cn": lambda: metric_em.number_of_trips_based_on_start_cn(),
        "number_of_trips_based_on_end_cn": lambda: metric_em.number_of_trips_based_on_end_cn(),
        "cases_for_given_age_0_17": lambda: metric_co.cases_for_given_age(givenAge="0_17"),
        "cases_for_given_age_18_29": lambda: metric_co.cases_for_given_age(givenAge="18_29"),
        "cases_for_given_age_30_39": lambda: metric_co.cases_for_given_age(givenAge="30_39"),
        "cases_for_given_age_40_49": lambda: metric_co.cases_for_given_age(givenAge="40_49"),
        "cases_for_given_age_50_59": lambda: metric_co.cases_for_given_age(givenAge="50_59"),
        "cases_for_given_age_60_69": lambda: metric_co.cases_for_given_age(givenAge="60_69"),
        "cases_for_given_age_70_79": lambda: metric_co.cases_for_given_age(givenAge="70_79"),
        "cases_for_given_age_80_": lambda: metric_co.cases_for_given_age(givenAge="80_"),
        "deaths_for_given_age_0_17": lambda: metric_co.deaths_for_given_age(givenAge="0_17"),
        "deaths_for_given_age_18_29": lambda: metric_co.deaths_for_given_age(givenAge="18_29"),
        "deaths_for_given_age_30_39": lambda: metric_co.deaths_for_given_age(givenAge="30_39"),
        "deaths_for_given_age_40_49": lambda: metric_co.deaths_for_given_age(givenAge="40_49"),
        "deaths_for_given_age_50_59": lambda: metric_co.deaths_for_given_age(givenAge="50_59"),
        "deaths_for_given_age_60_69": lambda: metric_co.deaths_for_given_age(givenAge="60_69"),
        "deaths_for_given_age_70_79": lambda: metric_co.deaths_for_given_age(givenAge="70_79"),
        "deaths_for_given_age_80_": lambda: metric_co.deaths_for_given_age(givenAge="80_"),
        "totalCases": lambda: metric_co.totalCases(),
        "totalDeaths": lambda: metric_co.totalDeaths()
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
