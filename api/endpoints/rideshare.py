from flask import Blueprint, jsonify, request
from api.metrics.rideshare import RideshareMetrics

def make_blueprint(con):
    """
    Creates blueprint for endpoints related to rideshare data.
    """

    app = Blueprint("rideshare", __name__)
    metric = RideshareMetrics(con)

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
