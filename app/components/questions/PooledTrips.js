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
import { Formatter, communityMetrics } from '../../site/metrics'

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

async function getPooledTripsRateByArea() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API}/community/metrics`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metrics: [ METRIC_POOLED_TRIP_RATE ],
      }),
    }
  );
  const res = await req.json();
  const metrics = res.metrics.sort((a, b) => {
    return b[METRIC_POOLED_TRIP_RATE] - a[METRIC_POOLED_TRIP_RATE];
  }).sort((a, b) => {
    return a.part.localeCompare(b.part);
  }).map((v) => ({
    ...v,
    [v.part]: v[METRIC_POOLED_TRIP_RATE],
  }));
  return metrics;
}

function QuestionBarChart() {
  const [ pooledTripRate, setPooledTripRate ] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      const res = await getPooledTripsRateByArea();
      if (isSubscribed) {
        setPooledTripRate(res);
      }    
    }

    getData();
    return () => isSubscribed = false;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={pooledTripRate}
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
  return (
    <div className="QuestionPooledTrips">
      <div className="center medium-width">
        <h2>Pooled Trip Rates by Community Area</h2>
        <p>This chart shows the percentage of all rides in 2019 that were pooled, by community area where the rider was picked up.</p>
      </div>
      <QuestionBarChart />
      <div className="center medium-width">
        <h2>Coming Soon...</h2>
        <p>How have rideshare costs changed without pooled trips?</p>
        <p>How does pooled trip rate relate to COVID community vulnerability factors?</p>
      </div>
    </div>
  )
};
