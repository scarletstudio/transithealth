from flask import Blueprint, jsonify, request
from api.metrics.taxitrips import TaxiTripMetrics

#creates blueprint for endpoints related to taxi trips
def make_blueprint(connection):
    app = Blueprint('taxitrips', __name__)
    metric = TaxiTripMetrics(connection)
    
    supported_metrics = {
        "avg_speed_per_dropoff": lambda: metric.get_avg_speed_per_dropoff(),
        "avg_speed_per_pickup": lambda: metric.get_avg_speed_per_pickup()
    }
    
    @app.route("/taxitrips/avg_pickup_speed")
    #returns average speed by pickup area
    def avg_pickup_speed():
        return jsonify(metric.get_avg_speed_per_pickup())
        
    @app.route("/taxitrips/avg_dropoff_speed")
    #returns average speed by dropoff area
    def avg_dropoff_speed():
        return jsonify(metric.get_avg_speed_per_dropoff())
        
    