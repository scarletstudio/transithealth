import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts'

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

function ExamplePieChart(props) {
  const { data } = props;
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
  
  useEffect(() => {
    props.setContentIsLoading(false);
  });
  
  const data = [
    { transit_mode: "rail", total_trips_2019: 12_000_000, },
    { transit_mode: "bus", total_trips_2019: 8_000_000, },
    { transit_mode: "rideshare", total_trips_2019: 2_000_000, },
    { transit_mode: "e-scooter", total_trips_2019: 700_000, },
  ];
  
  const dataWithName = data.map(d => ({
    ...d,
    transit_mode_name: TRANSIT_MODES[d.transit_mode],
  }));
  
  const mostTrips = dataWithName.reduce((currentMost, d) => {
    if (d.total_trips_2019 > currentMost.total_trips_2019) {
      return d;
    }
    return currentMost;
  });
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Total Trips by Transit Type</h2>
        <p>How do people get around the city?</p>
      </div>
      <div className="center">
        <ExamplePieChart data={dataWithName} />
        <br />
      </div>
      <div className="center medium-width">
        <p>Based on data from 2019, {mostTrips.transit_mode_name} is the most popular transit mode.</p>
      </div>
    </div>
  );
}