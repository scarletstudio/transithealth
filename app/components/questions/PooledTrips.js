import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
  Bar,
  Cell,
} from 'recharts'
import { Table } from '../../components/Table'
import {
  Formatter,
  communityMetrics,
  calculatePercentChange,
} from '../../site/metrics'

const METRIC_POOLED_TRIP_RATE = "rideshare_pooled_trip_rate_2019";
const CITY_PART_COLOR = {
  "Central": "#332288",
  "Far North Side": "#1978AD",
  "Far Southeast Side": "#117733",
  "Far Southwest Side": "#44AA99",
  "North Side": "#88CCEE",
  "Northwest Side": "#DCA139",
  "South Side": "#CC6677",
  "Southwest Side": "#AA4499",
  "West Side": "#882255",
};
const RIDESHARE_COLS = [
  {
    key: "name",
    group: "Pickup Community Area",
    name: "Name",
  },
  {
    key: "part",
    group: "Pickup Community Area",
    name: "Part",
  },
  {
    key: "rideshare_pooled_trip_rate_2019",
    group: "Pooled Trips",
    name: "% of Trips",
    format: Formatter.percentWithOneDecimal,
    rowClasses: ["right"],
  },
  {
    key: "avg_trips_per_day_before",
    group: "Trips/Day",
    name: "Before",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "avg_trips_per_day_since",
    group: "Trips/Day",
    name: "Since",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "pct_change_avg_trips",
    group: "Trips/Day",
    name: "Change",
    format: Formatter.percentChangeWithNoDecimal,
    rowClasses: ["right"],
  },
  {
    key: "avg_cost_per_trip_cents_before",
    group: "Cost/Trip",
    name: "Before",
    format: Formatter.centsToDollarsUSD,
    rowClasses: ["right"],
  },
  {
    key: "avg_cost_per_trip_cents_since",
    group: "Cost/Trip",
    name: "Since",
    format: Formatter.centsToDollarsUSD,
    rowClasses: ["right"],
  },
  {
    key: "pct_change_avg_cost",
    group: "Cost/Trip",
    name: "Change",
    format: Formatter.percentChangeWithNoDecimal,
    rowClasses: ["right"],
  },
];

async function fetchData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API}/question/pooled_trips`);
  const res = await req.json();
  return res.metrics;
}

function augmentMetrics(metrics) {
  return metrics.map((d) => {
    return {
      ...d,
      "pct_change_avg_trips": calculatePercentChange(
        d["avg_trips_per_day_before"],
        d["avg_trips_per_day_since"],
      ),
      "pct_change_avg_cost": calculatePercentChange(
        d["avg_cost_per_trip_cents_before"],
        d["avg_cost_per_trip_cents_since"],
      ),
    };
  });
}

function getPooledTripsRateByArea(metrics) {
  return metrics.sort((a, b) => {
    return b[METRIC_POOLED_TRIP_RATE] - a[METRIC_POOLED_TRIP_RATE];
  }).sort((a, b) => {
    return a.part.localeCompare(b.part);
  }).map((v) => ({
    ...v,
    [v.part]: v[METRIC_POOLED_TRIP_RATE],
  }));
}

function QuestionBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ left: 30, right: 30, bottom: 30, top: 30 }}
      >
        <CartesianGrid strokeDashArray="3 3" />
        <XAxis dataKey="name" tick={{ dy: 5 }}>
          <Label
            value="Pickup Community Area"
            position="bottom"
            offset={10}
          />
        </XAxis>
        <YAxis type="number" tickFormatter={Formatter.percentWithNoDecimal}>
          <Label
            value="Pooled Trip Rate"
            position="left"
            angle={-90}
            offset={15}
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip
          formatter={
            (value, name, props) => ([
              Formatter.percentWithOneDecimal(value),
              "Pooled Trip Rate",
              props,
            ])
          }
        />
        {Object.keys(CITY_PART_COLOR).map((partName, j) => (
          <Bar key={j} dataKey={partName} stackId="a" fill={CITY_PART_COLOR[partName]} />
        ))}
        <Legend layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ top: 5 }} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default function PooledTrips() {
  const [ data, setData ] = useState([]);
  const [ pooledTripRate, setPooledTripRate ] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      const rawMetrics = await fetchData();
      const metrics = augmentMetrics(rawMetrics);
      const pooledTripRateData = getPooledTripsRateByArea(metrics);
      if (isSubscribed) {
        setData(metrics);
        setPooledTripRate(pooledTripRateData);
      }    
    }

    getData();
    return () => isSubscribed = false;
  }, []);

  const sortedByPooledRate = data.sort((a, b) => {
    return b[METRIC_POOLED_TRIP_RATE] - a[METRIC_POOLED_TRIP_RATE];
  });
  const highestByPooledRate = sortedByPooledRate[0];
  const lowestByPooledRate = sortedByPooledRate[sortedByPooledRate.length - 1];
  const detailForPooledRate = sortedByPooledRate.length > 1 ? (
    <p className="center">
      <span className="bold">
        {highestByPooledRate.name}
      </span>
      <span> has the highest rate of pooled trips (</span>
      <span className="bold">
        {Formatter.percentWithOneDecimal(highestByPooledRate[METRIC_POOLED_TRIP_RATE])}
      </span>
      <span>) while </span>
      <span className="bold">
        {lowestByPooledRate.name}
      </span>
      <span> has the lowest (</span>
      <span className="bold">
        {Formatter.percentWithOneDecimal(lowestByPooledRate[METRIC_POOLED_TRIP_RATE])}
      </span>
      <span>).</span>
    </p>
  ) : null;

  return (
    <div className="QuestionPooledTrips">
      <div className="center medium-width">
        <h2>Pooled Trip Rates by Community Area</h2>
        <p>This chart shows the percentage of all rides in 2019 that were pooled, by community area where the rider was picked up.</p>
      </div>
      <QuestionBarChart data={pooledTripRate} />
      {detailForPooledRate}
      <br />
      <div className="center medium-width">
        <h2>Change Since COVID</h2>
        <p>This table shows how the average number of trips per day and average cost per trip has changed in each community area since COVID.</p>
        <p>
          <span className="bold">Before</span>
          <span> is the 12-month period from February 2019-2020.</span>
        </p>
        <p>
          <span className="bold">After</span>
          <span> is the 12-month period from March 2020-2021.</span>
        </p>
      </div>
      <Table rows={data} cols={RIDESHARE_COLS} />
    </div>
  )
};
