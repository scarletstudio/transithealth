import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from 'recharts'

const PIE_COLORS = [
  "#332288",
  "#1978AD",
  "#117733",
  "#44AA99",
];

export default function TemplateWithPieChart(props) {
  
  useEffect(() => {
    props.setContentIsLoading(false);
  });
  
  const data = [
    { transit_mode: "train", total_trips_2019: 12_000_000, },
    { transit_mode: "bus", total_trips_2019: 8_000_000, },
    { transit_mode: "rideshare", total_trips_2019: 2_000_000, },
    { transit_mode: "e-scooter", total_trips_2019: 700_000, },
  ];

  return (
    <div>
      <div className="center medium-width">
        <p>This is an example page with a pie chart.</p>
      </div>
      <div className="center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              nameKey="transit_mode"
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
                  fill={PIE_COLORS[i % PIE_COLORS.length]}
                  />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}