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

const EMPTY_AREA = {
  name: "?",
  part: "?",
  disability_rate_formatted: "?"
};

function transformData(response, error, selectedArea) {
  if (!response || error) {
    return {
      chartData: [],
      areaData: EMPTY_AREA,
    }
  }

  const areaData = response.metrics.map(d => ({
    // Get all fields from original record
    ...d,
    disability_rate_formatted: Formatter.percentWithOneDecimal(d.disability_rate_2019)
  })).filter(d => d.area_number === selectedArea)[0];

  
  const data = [
    {
      "label": "With Disabilities",
      "value": areaData.disability_rate_2019,
      "color": Color.Salmon
    },
    {
      "label": "Without Disabilities",
      "value": 1 - areaData.disability_rate_2019,
      "color": Color.Teal
    }
    ];
  
  return {
    chartData: data,
    areaData,
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
          nameKey="label"
          dataKey="value"
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

export default function ResidentsWithDisabilities(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({metrics: ['disability_rate_2019']})
  }, []);
  console.log(data);
  const selectedArea = 47;
  const { chartData, areaData } = transformData(data, error, selectedArea);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Disability Rate by Area</h2>
        <p>How many residents in {areaData.name} have an included disability?</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>
        <span>Based on data from 2019, {areaData.disability_rate_formatted} of residents in {areaData.name} have an included disability.</span>
        </p>
      </div>
    </div>
  );
}