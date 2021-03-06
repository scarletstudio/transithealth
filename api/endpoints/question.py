from flask import Blueprint, jsonify, request
from api.questions.disabilities import DisabilitiesMetrics
from api.questions.pooled_trips import PooledTripMetrics
from api.questions.taxitrips import TaxiTripQuestions
from api.questions.sidewalk_search import SidewalkCafePermitSearch
from api.questions.rideshare_ohare import OHareRideshareQuestion


def make_blueprint(con):
    """
    Creates blueprint for endpoints related to questions.
    """

    app = Blueprint("question", __name__)
    
    metric_pooled = PooledTripMetrics(con)
    metric_disabilities = DisabilitiesMetrics(con)
    metric_tt = TaxiTripQuestions(con)
    metric_oHareRideshare = OHareRideshareQuestion(con)
    sidewalk_search = SidewalkCafePermitSearch(con)
    
    
    @app.route("/question/hello")
    def hello():
        return jsonify({ "message": "Welcome to questions!" })

    @app.route("/question/pooled_trips")
    def pooled_trips():
        before_covid = ("2019-02-01", "2020-03-02")
        since_covid = ("2020-03-02", "2021-04-01")
        rows = metric_pooled.pooled_trip_comparison(before_covid, since_covid)
        metrics = metric_pooled.metrics_by_area(rows)
        return jsonify({ "metrics": metrics })
        
    @app.route("/question/disabilities")
    def disabilities():
        rideshare_metrics = metric_disabilities.disabilities_rideshare_metrics()
        cta_area_metrics = metric_disabilities.disabilities_cta_by_community_area()
        cta_change_metrics = metric_disabilities.disabilities_cta_percent_change_metrics()
        cta_station_ridership_metrics = metric_disabilities.disabilities_ridership_per_station_metrics()
        return jsonify({ 
            "rideshare_metrics": rideshare_metrics,
            "cta_area_metrics" : cta_area_metrics,
            "cta_change_metrics" : cta_change_metrics,
            "cta_station_ridership_metrics" : cta_station_ridership_metrics
        })

    @app.route("/question/taxitrips")
    def taxitrips():
        most_common_dropoff = metric_tt.most_common_dropoff()
        payment_per_pickup = metric_tt.get_payment_type_by_pickup()
        payment_per_dropoff = metric_tt.get_payment_type_by_dropoff()
        return jsonify({
            "most_common_dropoff": most_common_dropoff,
            "payment_per_pickup": payment_per_pickup,
            "payment_per_dropoff": payment_per_dropoff
        })
        

    @app.route("/question/sidewalk_search", methods=["POST"])
    def question_sidewalk_search():
        body = request.get_json()
        raw_search = body["search"] if "search" in body else ""
        search = raw_search.strip().lower()
        if len(search) > 0:
            permits = sidewalk_search.search_permits(search)
            return jsonify({ "results": permits })
        return jsonify({ "results": [] })

    @app.route("/question/ohare/rideshare")
    def rideshare():
        #Area number of o'hare is 76
        #ohare_pickup_2019 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_pickup_specific_area_and_year(2019,76))
        #ohare_pickup_2020 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_pickup_specific_area_and_year(2020,76))
        #ohare_pickup_2021 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_pickup_specific_area_and_year(2021,76))
        ohare_dropoff_2019 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_dropoff_specific_area_and_year(2019,76))
        ohare_dropoff_2020 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_dropoff_specific_area_and_year(2020,76))
        ohare_dropoff_2021 = metric_oHareRideshare.metrics_by_area(metric_oHareRideshare.get_total_trips_by_dropoff_specific_area_and_year(2021,76))
        return jsonify({
        #    "ohare_pickup_2019": ohare_pickup_2019,
        #    "ohare_pickup_2020": ohare_pickup_2020,
        #    "ohare_pickup_2021": ohare_pickup_2021,
            "ohare_dropoff_2019": ohare_dropoff_2019,
            "ohare_dropoff_2020": ohare_dropoff_2020,
            "ohare_dropoff_2021": ohare_dropoff_2021,
        })

    return app

