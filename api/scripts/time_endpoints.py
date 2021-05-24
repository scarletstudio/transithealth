import json
import requests
from timeit import default_timer as timer

API = "http://localhost:5000"


def time_get_endpoint(endpoint):
    print(f"GET {endpoint}")
    start = timer()
    r = requests.get(f"{API}{endpoint}")
    r.json()
    secs = timer() - start
    b = len(r.content) 
    print(f"\tgot {b:d} bytes")
    print(f"\tin {secs:.1f} secs")
    print()

def time_post_endpoint(endpoint, body):
    print(f"POST {endpoint}")
    start = timer()
    r = requests.post(
        f"{API}{endpoint}",
        data=json.dumps(body),
        headers={
            "Content-Type": "application/json"
        }
    )
    r.json()
    secs = timer() - start
    b = len(r.content) 
    print(f"\tgot {b:d} bytes")
    print(f"\tin {secs:.1f} secs")
    print()


tables = [
    "community_area",
    "covid_spread",
    "income",
    "population",
    "rideshare"  
]

count_endpoints = [ f"/count/{table}" for table in tables ]

data_endpoints = [
    "/rideshare/max_trips",
    "/question/pooled_trips"
]

get_endpoints = count_endpoints + data_endpoints

request_endpoints = [
    (
        "Metrics By Area: rideshare pickups since COVID + 2019 pooled trip rate",
        "/community/metrics",
        {
            "metrics": [
                "rideshare_pickups_covid",
                "rideshare_pooled_trip_rate_2019"
            ]
        }
    ),
    (
        "Metrics By Week: all rideshare pickups + all avg. cost",
        "/weekly/metrics",
        {
            "metrics": [
                "weekly_rideshare_pickups",
                "weekly_rideshare_avg_cost"
            ]
        }
    )
]

post_endpoints = request_endpoints

for endpoint in get_endpoints:
    time_get_endpoint(endpoint)

for name, endpoint, body in post_endpoints:
    print(name)
    time_post_endpoint(endpoint, body)
