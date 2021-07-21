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

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/rideshare/total_trips_by_pickup_part_and_year`

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
  const chartData = response
    .filter(d => d.year===2019)
    .map(d => ({
      ...d,
      color: CITY_PART_COLOR[d.pickup_part]
    }));
  
  return {
    chartData,
    mostTrips: EMPTY_MOST_TRIPS,
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
          nameKey="pickup_part"
          dataKey="total_trips"
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

export default function RidesharesAcrossCity(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {}, []);
  const { chartData, mostTrips } = transformData(data, error);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Rideshares by Part of City</h2>
        <p>How do people get around the city?</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
      </div>
    </div>
  );
}