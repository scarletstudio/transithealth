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

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/community/metrics`

const AREA_COLORS = [
  Color.Forest,
  Color.Gold,
  Color.Magenta,
  ]

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

  const dataWithName = response.metrics.map(d => ({
    // Get all fields from original record
    ...d,
    number_of_trips_based_on_start_cn: d.number_of_trips_based_on_start_cn || 0,
    // Add formatted data
    totalTripsFormatted: Formatter.numberWithCommas(d.number_of_trips_based_on_start_cn || 0),
  })).sort((a,b) => {
    return b.number_of_trips_based_on_start_cn - a.number_of_trips_based_on_start_cn
  }).filter( (d, i) => i < 10).map((d,i) => ({
    ...d,
    color: AREA_COLORS[i % AREA_COLORS.length],
  }));
  
  // Get the transit mode that has the most trips
  const mostTrips = dataWithName.reduce((currentMost, d) => {
    if (d.number_of_trips_based_on_start_cn > currentMost.number_of_trips_based_on_start_cn) {
      return d;
    }
    return currentMost;
  }, { number_of_trips_based_on_start_cn: 0 });
  
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
          dataKey="number_of_trips_based_on_start_cn"
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

export default function EscooterCity(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      metrics: ["number_of_trips_based_on_start_cn"]
    })
  }, []);
  console.log(data);
  const { chartData, mostTrips } = transformData(data, error);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Total number of escooter trips</h2>
        <p>Top 10 community areas for escooters</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>
        <span>{mostTrips.name} uses escooters the most, with {mostTrips.totalTripsFormatted} trips in 2019.</span>
        </p>
      </div>
    </div>
  );
}