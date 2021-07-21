from flask import Blueprint, jsonify, request
from api.metrics.rent_burdened import RentBurdenedMetrics


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to rent burdened households data.
    """

    app = Blueprint("rent_burdened", __name__)
    metric = RentBurdenedMetrics(con)
    
    supported_metrics = {
        "rent_burdened_2015": lambda: metric.rent_burdened(year=2015, segment="all"),
        "rent_burdened_2016": lambda: metric.rent_burdened(year=2016, segment="all"),
        "rent_burdened_2017": lambda: metric.rent_burdened(year=2017, segment="all"),
        "rent_burdened_2018": lambda: metric.rent_burdened(year=2018, segment="all"),
        "rent_burdened_2019": lambda: metric.rent_burdened(year=2019, segment="all"),
        "rent_max": lambda: metric.rent_max_burdened(),
        "rent_min": lambda: metric.rent_min_burdened(),
        "rent_average_burden_area": lambda: metric.rent_average_burden_area()
    }
    
    @app.route("/rent_burdened/rent_burdened", methods=["POST"])
    def rent_burdened():
        """
        Returns the rent burdened households data by year.
        """
        
        body = request.get_json()
        rent_year = body["rent_burdened"] if "rent_burdened" in body else []
        return jsonify(metric.rent_burdened(rent_year, segment="all"))

    @app.route("/rent_burdened/max_burdened")
    def max_burdened():
        """
        Returns the maximum percentage of burdened households and its area.
        """
        return jsonify(metric.rent_max_burdened())
        
    @app.route("/rent_burdened/min_burdened")
    def min_burdened():
        """
        Returns the minimum percentage of burdened households and its area.
        """
        return jsonify(metric.rent_min_burdened())


    @app.route("/rent_burdened/average_burden")
    def average_burden():
        """
        Returns the average percentage of rent burdened households by area
        across all periods..
        """
        return jsonify(metric.rent_average_burden_area())
        
    @app.route("/rent_burdened/hello")
    def hello():
        return "hello"


    return app
