from flask import Blueprint, jsonify


FAKE_DATA = {
    "example-pie-chart": [
        { "transit_mode": "rail", "total_trips_2019": 12_000_000, },
        { "transit_mode": "bus", "total_trips_2019": 8_000_000, },
        { "transit_mode": "rideshare", "total_trips_2019": 2_000_000, },
        { "transit_mode": "e-scooter", "total_trips_2019": 700_000, },
        { "transit_mode": "Other", "total_trips_2019": 150_000, },
    ],
}


def make_blueprint(con):
    """
    Creates blueprint for endpoints with fake data.
    """

    app = Blueprint("fake", __name__)


    @app.route("/fake/data/<data_id>")
    def get_fake_date_by_id(data_id):
        """
        Return the fake data for the given ID, if any.
        """
        if data_id not in FAKE_DATA:
            return f"No fake data for ID: {data_id}", 400
        return jsonify({ "results": FAKE_DATA[data_id] })


    return app
