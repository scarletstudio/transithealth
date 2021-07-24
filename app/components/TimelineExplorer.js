/* global fetch */

import { useState, useEffect, useRef } from 'react'
import { MetricSelector } from '../components/Common'
import {
  timelineMetrics,
  timelineExplorerDefaults
} from '../site/metrics'
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

const supportedMetrics = timelineMetrics;
const defaultMetricToAdd = timelineExplorerDefaults.metricToAdd;
const defaultColors = [
  "#099178",
  "#f06869",
  "#a453f5",
  "#f5cd53",
];
const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

async function getTimelineMetrics(metrics) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API}/timeline/metrics`,
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
  const d = payload?.[0]?.payload;
  if (!active || !d) {
    return null;
  }
  // This is very hacky. If there is a space after the date, it will be parsed
  // without the local timezone offset, that way the date returned by the API
  // will be displayed as intended, no matter what timezone the client is in.
  // StackOverflow: https://stackoverflow.com/q/47359812
  const localDate = new Date(`${d.date} ?`);
  return (
    <div className="CustomToolTip">
      <h4>{dateFormat.format(localDate)}</h4>
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
        <XAxis dataKey="date" domain={["dataMin", "dataMax"]}>
          <Label
            value="Date"
            position="bottom"
            offset={10}
          />
        </XAxis> 
        <YAxis yAxisId="left"  type="number" />
        <YAxis yAxisId="right"  type="number" orientation="right" />
        {metrics.filter((m) => m.axis !== "none").map((m, i) => {
          const color = m.color || defaultColors[i % defaultColors.length];
          return (
            <Area key={`${i}-${m.id}`} yAxisId={m.axis} dataKey={m.id} stroke={color} fill={color} />
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
          <div key={`${i}-${m.id}`} className="MetricEditor">
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
        <button className="btn primary" onClick={addMetric}>Add Metric</button>
      </div>
    </div>
  );
}

/*
 * Custom hook to get the previous value
 * https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks
 */
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function TimelineExplorer(props) {
  const { metrics: inputMetrics } = props;
  const [ data, setData ] = useState([]);
  const [ metrics, setMetrics ] = useState(inputMetrics || []);
  const [ isLoading, setIsLoading ] = useState(false);
  
  useEffect(() => {
    setMetrics(inputMetrics || []);
  }, [inputMetrics]);

  const previousMetrics = usePrevious(metrics) || [];

  useEffect(() => {
    let isSubscribed = true;

    async function getData() {
      const requestedMetrics = metrics.map(m => m.id);
      setIsLoading(true);
      const res = await getTimelineMetrics(requestedMetrics);
      if (isSubscribed) {
        setData(res.metrics);
        setIsLoading(false);
      }    
    }

    const oldMetrics = previousMetrics.reduce((agg, m) => ({ ...agg, [m.id]: true }), {});
    const newMetrics = metrics.filter(m => !(m.id in oldMetrics));
    if (newMetrics.length > 0) {
      getData();
    }
    return () => isSubscribed = false;
  }, [ metrics ]);

  return (
    <div>
      <div className="center">
        <span>{ isLoading ? "Loading..." : "" }</span>
      </div>
      <TimelineChart data={data} metrics={metrics} />
      <h3>Select Metrics</h3>
      <TimelineMetrics metrics={metrics} setMetrics={setMetrics} />
    </div>
  );
}