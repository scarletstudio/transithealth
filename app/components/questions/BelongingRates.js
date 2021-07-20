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



const EMPTY_AREA = {
  name: "?",
  belongingRateFormatted: "?",
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
    // Add formatted data
    belongingRateFormatted: Formatter.percentWithOneDecimal(d.belonging_rate_2018),
  })).filter(d => d.area_number===selectedArea)[0];
  
  const data = [
    {
      label: "Feels Belonging",
      value: areaData.belonging_rate_2018,
      valueFormatted: Formatter.percentWithOneDecimal(areaData.belonging_rate_2018),
      color: Color.Indigo
    },
    {
      label: "Does Not Feel Belonging",
      value: 1 - areaData.belonging_rate_2018,
      valueFormatted: Formatter.percentWithOneDecimal(1 - areaData.belonging_rate_2018),
      color: Color.Salmon
    }
    ]

  
  return {
    chartData: data,
    areaData,
  }
}

function ExamplePieChart(props) {
  const { data } = props
  
  
  const tooltipStyle = {
    backgroundColor: "white", 
    borderColor: "LightGrey", 
    borderStyle: "solid", 
    borderWidth: "thin"
  };
  
  
  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Changes the tooltip to display the formatted percentage rather than a decimal
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p className="label">{`${payload[0].name} : ${payload[0].payload.valueFormatted}`}</p>
      </div>
    );
  }
  return null;
  };
  
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, color, valueFormatted, index }) => {
    // Takes various characteristics of the pie chart to calculate the position of the label
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    // Returns the text label using computed x and y position, as well as provided color and formatted percentage.
    return (
      <text x={x}
            y={y}
            fill={color}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central">
        {`${valueFormatted}`}
      </text>
    );
  };
  
  
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
          label={renderCustomizedLabel}
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
        <Tooltip content={<CustomTooltip />} />
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

export default function BelongingRates(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({metrics: ["belonging_rate_2018"]})
  }, []);
  const selectedArea = 34
  const { chartData, areaData } = transformData(data, error, selectedArea);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Belonging Rate by Area</h2>
        <p>What percentage of residents in {areaData.name} feel a sense of belonging?</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>
        <span>Based on data from 2018, {areaData.belongingRateFormatted} of people in {areaData.name} agree or strongly agree that they feel a sense of belonging in their community.</span>
        </p>
      </div>
    </div>
  );
}