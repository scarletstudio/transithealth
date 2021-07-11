import { useEffect } from 'react'
import useFetch from 'use-http'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts'
import { FailureNotification } from '../../components/Notification'

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/fake/data/example-pie-chart`

const PIE_COLORS = [
  "#332288",
  "#1978AD",
  "#117733",
  "#44AA99",
];

const TRANSIT_MODES = {
  "rail": "CTA Rail",
  "bus": "CTA Bus",
  "rideshare": "Rideshare",
  "e-scooter": "E-Scooter",
}

function transformData(response, error) {
  if (!response || error) {
    return {
      chartData: [],
      mostTrips: {},
    }
  }

  // Add the transit mode name to each record
  const dataWithName = response.results.map(d => ({
    ...d,
    transit_mode_name: TRANSIT_MODES[d.transit_mode],
  }));
  
  // Get the transit mode that has the most trips
  const mostTrips = dataWithName.reduce((currentMost, d) => {
    if (d.total_trips_2019 > currentMost.total_trips_2019) {
      return d;
    }
    return currentMost;
  }, {});
  
  return {
    chartData: dataWithName,
    mostTrips,
  }
}

function ExamplePieChart(props) {
  const { data } = props
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart
        width={400}
        height={400}
        margin={{ bottom: 30 }}
      >
        <Pie
          data={data}
          nameKey="transit_mode_name"
          dataKey="total_trips_2019"
          label
          cx="50%"
          cy="50%"
          fill=""
          outerRadius={150}
        >
          {data.map((entry, i) => (
            <Cell
              key={`cell-${i}`}
              fill={PIE_COLORS[i]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ bottom: -10 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default function TemplateWithPieChart(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {}, []);
  const { chartData, mostTrips } = transformData(data, error);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Total Trips by Transit Type</h2>
        <p>How do people get around the city?</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>Based on data from 2019, {mostTrips.transit_mode_name} is the most popular transit mode.</p>
      </div>
    </div>
  );
}