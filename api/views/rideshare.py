from flask import Blueprint, jsonify
from api.metrics.rideshare import RideshareMetrics


def make_blueprint(cur):
    """
    Creates blueprint for endpoints related to rideshare data.
    """

    app = Blueprint('rideshare', __name__)
    metric = RideshareMetrics(cur)


    @app.route("/rideshare/max_trips")
    def max_trips():
        """
        Returns the maximum number of trips of any record.
        """
        return jsonify(metric.get_max_trips())


    @app.route("/rideshare/total_trips_by_pickup_area")
    def total_trips_by_pickup_area():
        """
        Returns the maximum number of trips of any record.
        """
        return jsonify(metric.get_total_trips_by_pickup_area())


    return app
