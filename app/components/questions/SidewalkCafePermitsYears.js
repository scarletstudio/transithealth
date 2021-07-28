import { useEffect } from 'react'
import useFetch from 'use-http'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'
import { FailureNotification } from '../../components/Notification'
import { Color } from '../../site/theme'
import { Formatter } from '../../site/metrics'

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/timeline/metrics`

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

const EMPTY_MOST_PERMITS = {
  year: "?",
  numberOfPermitsFormatted: "?",
};

function transformData(response, error) {
  if (!response || error) {
    return {
      chartData: [],
      mostPermits: EMPTY_MOST_PERMITS,
    }
  }

  const chartData = response.metrics.map(d => ({
    // Get all fields from original record
    ...d,
    color : Color.Indigo,
    // Add formatted data
    year : d.date.split("-")[0],
    numberOfPermitsFormatted: Formatter.numberWithCommas(d.yearly_sidewalk_cafe_permit),
  }));
  
  // Get the year that has the most permits
  const mostPermits = chartData.reduce((currentMost, d) => {
    if (d.yearly_sidewalk_cafe_permit > currentMost.yearly_sidewalk_cafe_permit) {
      return d;
    }
    return currentMost;
  }, { yearly_sidewalk_cafe_permit: 0 });
  
  return {
    chartData,
    mostPermits,
  }
}

function SidewalkCafeChart(props) {
  const { data } = props
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={400}
        height={400}
        data={data}
        margin={{ bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Bar
          nameKey="year"
          dataKey="yearly_sidewalk_cafe_permit"
          fill="#000000"
        >
          {data.map((entry, i) => (
            <Cell
              key={`cell-${i}`}
              fill={entry.color}
            />
          ))}
        </Bar>
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ bottom: -10 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default function SidewalkCafePermitsYears(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {
    method : "POST",
    body : JSON.stringify({metrics : ["yearly_sidewalk_cafe_permit"]})
  }, []);
  const { chartData, mostPermits } = transformData(data, error);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Sidewalk Cafe Permits by Year</h2>
        <p>City of Chicago has been issuing sidewalk cafe permits since 2001.</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <SidewalkCafeChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>
        <span>{mostPermits.year} had the most permits issued ({mostPermits.numberOfPermitsFormatted}).</span>
        </p>
      </div>
    </div>
  );
}