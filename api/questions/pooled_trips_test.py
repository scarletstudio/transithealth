import sys
sys.path.append("../")

from api.questions.pooled_trips import PooledTripMetrics
from api.utils.testing import create_test_db, fill_missing, fill_default

rideshare_fields = [
    "pickup_community_area",
    "ymd",
    "n_trips",
    "n_trips_pooled",
    "avg_cost_no_tip_cents"
]

output_fields = [
    "area_number",
    "period",
    "pooled_trip_rate",
    "cost_per_trip",
    "trips_per_day"
]

rideshare_row = lambda r: fill_missing(rideshare_fields, r)

with_period_before = lambda r: fill_default({ "period": "before" }, r)
with_output_cols = lambda r: fill_missing(output_fields, r)
output_row = lambda r: with_output_cols(with_period_before(r))


def test_pooled_trip_rate():
    rideshare_table = [
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-01",
            "n_trips": 400,
            "n_trips_pooled": 100
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-02",
            "n_trips": 100,
            "n_trips_pooled": 100
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-03",
            "n_trips": 700,
            "n_trips_pooled": 100
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-05",
            "n_trips": 700,
            "n_trips_pooled": 100
        })
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = PooledTripMetrics(con)

    msg_1 = """
    Should compute pooled trip rate for both periods,
    as fractional values, ignoring records outside the
    date range, where end date is exclusive.
    """
    actual_1 = metric.pooled_trip_comparison(
        before=("2019-04-01", "2019-04-03"),
        since=("2019-04-03", "2019-04-05")
    )
    expected_1 = [
        output_row({
            "area_number": 1,
            "period": "before",
            "pooled_trip_rate": 0.4,
            "trips_per_day": 250
        }),
        output_row({
            "area_number": 1,
            "period": "since",
            "pooled_trip_rate": 1.0 / 7.0,
            "trips_per_day": 350
        })
    ]
    assert actual_1 == expected_1, msg_1

def test_avg_trips_per_day():
    rideshare_table = [
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-01",
            "n_trips": 400
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-02",
            "n_trips": 100
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-03",
            "n_trips": 200
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-04",
            "n_trips": 300
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-06-23",
            "n_trips": 2
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-06-24",
            "n_trips": 3
        })
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = PooledTripMetrics(con)

    # Only compute metrics for the before period,
    # set since date range to have no results
    ignore_since = ("2099-01-01", "2099-01-02")

    msg_1 = """
    Should compute average trips per day.
    """
    actual_1 = metric.pooled_trip_comparison(
        before=("2019-04-01", "2019-04-05"),
        since=ignore_since
    )
    expected_1 = [
        output_row({
            "area_number": 1,
            "trips_per_day": 250
        })
    ]
    assert actual_1 == expected_1, msg_1

    msg_2 = """
    Should compute average trips per day, using date range as the denominator.
    """
    actual_2 = metric.pooled_trip_comparison(
        before=("2019-04-01", "2019-04-11"),
        since=ignore_since
    )
    expected_2 = [
        output_row({
            "area_number": 1,
            "trips_per_day": 100
        })
    ]
    assert actual_2 == expected_2, msg_2

    msg_3 = """
    Should include the start date and exclude the end date.
    """
    actual_3 = metric.pooled_trip_comparison(
        before=("2019-04-02", "2019-04-04"),
        since=ignore_since
    )
    expected_3 = [
        output_row({
            "area_number": 1,
            "trips_per_day": 150
        })
    ]
    assert actual_3 == expected_3, msg_3

    msg_4 = """
    Should return result as an integer in whole trips, not a fractional value.
    """
    actual_4 = metric.pooled_trip_comparison(
        before=("2019-06-23", "2019-06-25"),
        since=ignore_since
    )
    # Average trips without converting to integer is 2.5 trips
    expected_4 = [
        output_row({
            "area_number": 1,
            "trips_per_day": 2
        })
    ]
    assert actual_4 == expected_4, msg_4

def test_avg_cost_per_trip():
    rideshare_table = [
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-01",
            "avg_cost_no_tip_cents": 1000,
            "n_trips": 400
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-02",
            "avg_cost_no_tip_cents": 2000,
            "n_trips": 200
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-03",
            "avg_cost_no_tip_cents": 1000,
            "n_trips": 300
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-04-04",
            "avg_cost_no_tip_cents": 1300,
            "n_trips": 700
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-06-21",
            "avg_cost_no_tip_cents": 1,
            "n_trips": 3
        }),
        rideshare_row({
            "pickup_community_area": 1,
            "ymd": "2019-06-22",
            "avg_cost_no_tip_cents": 4,
            "n_trips": 1
        })
    ]
    con, cur = create_test_db(
        scripts=[ "./pipeline/load/rideshare.sql" ],
        tables={ "rideshare": rideshare_table }
    )

    metric = PooledTripMetrics(con)

    # Only compute metrics for the before period,
    # set since date range to have no results
    ignore_since = ("2099-01-01", "2099-01-02")

    msg_1 = """
    Should compute average cost for one day of trips.
    """
    actual_1 = metric.pooled_trip_comparison(
        before=("2019-04-01", "2019-04-02"),
        since=ignore_since
    )
    expected_1 = [
        output_row({
            "area_number": 1,
            "cost_per_trip": 1000,
            "trips_per_day": 400
        })
    ]
    assert actual_1 == expected_1, msg_1

    msg_2 = """
    Should include the start date and exclude the end date.
    """
    actual_2 = metric.pooled_trip_comparison(
        before=("2019-04-02", "2019-04-04"),
        since=ignore_since
    )
    expected_2 = [
        output_row({
            "area_number": 1,
            "cost_per_trip": 1400,
            "trips_per_day": 250
        })
    ]
    assert actual_2 == expected_2, msg_2

    # Average cost without converting to integer is 1333.33333 (repeated) cents
    msg_3 = """
    Should return result as an integer in whole cents, not a fractional value.
    """
    actual_3 = metric.pooled_trip_comparison(
        before=("2019-04-01", "2019-04-03"),
        since=ignore_since
    )
    expected_3 = [
        output_row({
            "area_number": 1,
            "cost_per_trip": 1333,
            "trips_per_day": 300
        })
    ]
    assert actual_3 == expected_3, msg_3

    # Average cost without rounding down is 1.75 cents
    msg_4 = """
    Should return result as an integer in whole cents, rounded down.
    """
    actual_4 = metric.pooled_trip_comparison(
        before=("2019-06-21", "2019-06-23"),
        since=ignore_since
    )
    expected_4 = [
        output_row({
            "area_number": 1,
            "cost_per_trip": 1,
            "trips_per_day": 2
        })
    ]
    assert actual_4 == expected_4, msg_4
