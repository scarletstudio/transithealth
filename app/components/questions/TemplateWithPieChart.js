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
import { Color } from '../../site/theme'
import { Formatter } from '../../site/metrics'

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/fake/data/example-pie-chart`

const TRANSIT_MODES = {
  "rail": {
    name: "CTA Rail",
    color: Color.Forest,
  },
  "bus": {
    name: "CTA Bus",
    color: Color.Cerulean,
  },
  "rideshare": {
    name: "Rideshare",
    color: Color.Indigo,
  },
  "e-scooter": {
    name: "E-Scooter",
    color: Color.Salmon,
  },
}

const EMPTY_MOST_TRIPS = {
  name: "?",
  totalTripsFormatted: "?",
};

function transformData(response, error) {
  if (!response || error) {
    return {
      chartData: [],
      mostTrips: EMPTY_MOST_TRIPS,
    }
  }

  const dataWithName = response.results.map(d => ({
    // Get all fields from original record
    ...d,
    // Add name and color for transit mode
    ...(TRANSIT_MODES[d.transit_mode] || {
      name: d.transit_mode,
      color: Color.DarkGray,
    }),
    // Add formatted data
    totalTripsFormatted: Formatter.numberInMillions(d.total_trips_2019),
  }));
  
  // Get the transit mode that has the most trips
  const mostTrips = dataWithName.reduce((currentMost, d) => {
    if (d.total_trips_2019 > currentMost.total_trips_2019) {
      return d;
    }
    return currentMost;
  }, { total_trips_2019: 0 });
  
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
          nameKey="name"
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
              fill={entry.color}
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
        <p>
        <span>Based on (fake) data from 2019, {mostTrips.name} is the most popular transit mode, </span>
        <span>with {mostTrips.totalTripsFormatted} annual trips.</span>
        </p>
      </div>
    </div>
  );
}