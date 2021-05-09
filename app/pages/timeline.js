import Head from 'next/head'
import Nav from '../components/Nav'

import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Label,
  AreaChart,
  Area,
} from 'recharts'
import { MetricSelector } from '../components/Common'

function numberWithCommas(val) {
  return new Intl.NumberFormat("en").format(val);
}

function numberInThousands(val) {
  return new Intl.NumberFormat("en").format((val / 1000).toFixed(1)) + "K";
}

function numberInMillions(val) {
  return new Intl.NumberFormat("en").format((val / 1000000).toFixed(1)) + "M";
}

const supportedMetrics = {
  weekly_rideshare_pickups: {
    name: "Weekly Rideshare Pickups",
    units: "trips",
    format: numberInThousands,
    fullFormat: numberWithCommas,
  },
  weekly_covid_cases: {
    name: "Weekly COVID Cases",
    units: "cases",
    format: numberWithCommas,
    fullFormat: numberWithCommas,
  },
};

const defaultMetricToAdd = "weekly_rideshare_pickups";

const defaultMetrics = [
  { id: "weekly_rideshare_pickups", axis: "left" },
  { id: "weekly_covid_cases", axis: "right" },
]

const defaultColors = [
  "#099178",
  "#f06869",
];

async function getTimelineMetrics(metrics) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API}/weekly/metrics`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metrics,
      }),
    }
  );
  const res = await req.json();
  return res;
}

function CustomToolTip({ active, payload, label, metrics, selectedPayload }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const d = payload[0].payload;
  return (
    <div className="CustomToolTip">
      <h4>{d.week}</h4>
      {metrics.filter(({ id: m}) => d[m]).map(({ id: m }, i) => (
        <p key={i}>
          <span>{supportedMetrics[m].name}: </span>
          <span>{supportedMetrics[m].format(d[m])} </span>
          <span>{supportedMetrics[m].units}</span>
        </p>
      ))}
    </div>
  );
}

function TimelineChart({ data, metrics }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ left: 30, right: 30, bottom: 30, top: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week">
          <Label
            value="Week"
            position="bottom"
            offset={10}
          />
        </XAxis> 
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        {metrics.filter((m) => m.axis !== "none").map((m, i) => {
          const color = m.color || defaultColors[i % defaultColors.length];
          return (
            <Area key={i} yAxisId={m.axis} dataKey={m.id} stroke={color} fill={color} />
          );
        })}
        <Tooltip content={ <CustomToolTip metrics={metrics} /> } />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function TimelineMetrics({ metrics, setMetrics }) {
  const [ metricToAdd, setMetricToAdd ] = useState(defaultMetricToAdd);
  const addMetric = () => {
    setMetrics([
      ...metrics,
      {
        id: metricToAdd,
        axis: metrics.length % 2 === 0 ? "left" : "right",
      }
    ]);
  };
  return (
    <div className="TimelineMetrics">
      {metrics.map((m, i) => {
        const detail = supportedMetrics[m.id];
        const removeMetric = () => {
          setMetrics(metrics.filter((v, j) => j !== i));
        };
        const changeAxis = (e) => {
          const axis = e.target.value;
          setMetrics(metrics.map((v, j) => j === i ? { ...v, axis } : v));
        };
        const changeColor = (e) => {
          const color = e.target.value;
          setMetrics(metrics.map((v, j) => j === i ? { ...v, color } : v));
        }
        const color = m.color || defaultColors[i % defaultColors.length];
        return (
          <div key={i} className="MetricEditor">
            <span className="ColorSelector">
              <input type="color" defaultValue={color} onChange={changeColor} />
            </span>
            <span className="AxisSelector">
              <select defaultValue={m.axis} onChange={changeAxis}>
                <option value="left">Left Axis</option>
                <option value="right">Right Axis</option>
                <option value="none">Hidden</option>
              </select>
            </span>
            <span className="RemoveMetric" onClick={removeMetric}>x</span>
            <span>{detail.name}</span>
          </div>
        );
      })}
      <div className="MetricEditor">
        <MetricSelector
          supportedMetrics={supportedMetrics}
          defaultValue={defaultMetricToAdd}
          onChange={setMetricToAdd}
        />
        <button onClick={addMetric}>Add Metric</button>
      </div>
    </div>
  );
}

function TimelineExplorer(props) {
  const { metrics: inputMetrics } = props;
  const [ data, setData ] = useState([]);
  const [ metrics, setMetrics ] = useState(inputMetrics || []);
  
  const [ isLoading, setIsLoading ] = useState(false);
  
  useEffect(() => {
    setMetrics(inputMetrics || []);
  }, [inputMetrics]);

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      setIsLoading(true);
      const res = await getTimelineMetrics(metrics.map(m => m.id));
      if (isSubscribed) {
        setData(res.metrics);
        setIsLoading(false);
      }    
    }

    if (metrics.length > 0) {
      getData();
    }
    return () => isSubscribed = false;
  }, [ metrics ]);

  return (
    <div>
      <div className="center">
        <h2>By Week</h2>
        <p>{ isLoading ? "Loading..." : "" }</p>
      </div>
      <TimelineChart data={data} metrics={metrics} />
      <h3>Select Metrics</h3>
      <TimelineMetrics metrics={metrics} setMetrics={setMetrics} />
      
    </div>
  );
}

export default function Timeline() {
  return (
    <div>
      <Head>
        <title>TransitHealth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore transit and public health data across Chicago." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="Explorer">
        <div className="page">
          <div className="center">
            <h1>Timeline</h1>
            <p>Select transit and public health metrics to view over time.</p>
          </div>
          <br />
          <TimelineExplorer metrics={defaultMetrics} />
        </div>
      </main>
    </div>
  );
}
