from flask import Blueprint, jsonify, request
from api.metrics.rideshare import RideshareMetrics
from api.metrics.rideshare import RideshareAreas


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to rideshare data.
    """

    app = Blueprint("rideshare", __name__)
    metric = RideshareMetrics(con)
    areas = RideshareAreas(con)

    supported_metrics = {
        "Pickup from O'hare 2017": lambda: areas.get_total_trips_pooled_by_pickup_specific_area_and_year(2017,76),
        "Dropoff from O'hare 2017": lambda: areas.get_total_trips_pooled_by_dropoff_specific_area_and_year(2017,76),
        "Pickup Pooled from O'hare 2018": lambda: areas.get_total_trips_pooled_by_pickup_specific_area_and_year(2018,76),
        "Dropoff Pooled from O'hare 2018": lambda: areas.get_total_trips_pooled_by_dropoff_specific_area_and_year(2018,76),
        "Pickup Pooled from O'hare 2019": lambda: areas.get_total_trips_pooled_by_pickup_specific_area_and_year(2019,76),
        "Dropoff Pooled from O'hare 2019": lambda: areas.get_total_trips_pooled_by_dropoff_specific_area_and_year(2019,76),
        "Pickup Pooled from O'hare 2020": lambda: areas.get_total_trips_pooled_by_pickup_specific_area_and_year(2020,76),
        "Dropoff Pooled from O'hare 2020": lambda: areas.get_total_trips_pooled_by_dropoff_specific_area_and_year(2020,76),
    }

    @app.route("/rideshare/max_trips")
    def max_trips():
        """
        Returns the maximum number of trips of any record.
        """
        return jsonify(metric.get_max_trips())


    @app.route("/rideshare/total_trips_by_pickup_area")
    def total_trips_by_pickup_area():
        """
        Returns the total number of trips by pickup area.
        """
        return jsonify(metric.get_total_trips_by_pickup_area())
    
    
    @app.route("/rideshare/total_trips_by_pickup_part_and_year")
    def total_trips_by_pickup_part_and_year():
        """
        Returns the total number of trips by pickup part of city.
        """
        return jsonify(metric.get_total_trips_by_pickup_part_and_year())


    return app
