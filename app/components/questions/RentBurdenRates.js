import { useEffect, useState } from 'react'
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
  rentBurdenRateFormatted: "?",
};

function transformData(response, error, selectedArea, selectedYear) {
  if (!response || error) {
    return {
      chartData: [],
      areaData: EMPTY_AREA,
    }
  }
  
  var rentYear = ((selectedYear === 2019) ? 'rent_burdened_2019'
                  :(selectedYear === 2018) ? 'rent_burdened_2018'
                  :(selectedYear === 2017) ? 'rent_burdened_2017'
                  : 'Error');

  const areaData = response.metrics.map(d => ({
    // Get all fields from original record
    ...d,
    // Add formatted data
    rentBurdenRateFormatted: Formatter.percentWithOneDecimal(d[rentYear]), 
  })).filter(d => d.area_number===selectedArea)[0];

  const data = [
    {
      label: "Rent Burdened Households",
      value: areaData[rentYear],
      valueFormatted: Formatter.percentWithOneDecimal(areaData[rentYear]),
      color: Color.Maroon,
    },
    {
      label: "Not Rent Burdened Households",
      value: 1 - areaData[rentYear],
      valueFormatted: Formatter.percentWithOneDecimal(1 - areaData[rentYear]),
      color: Color.Forest,
    },
    ]

  
  return {
    chartData: data,
    areaData,
  }
}

function ExamplePieChart(props) {
  const { data } = props
  
  if(!data?.[0]?.value){
    return null;
  }

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

function YearSelector(props) {
  if(!props.data){
    return (
      <p>Waiting for data...</p>
    )
  }
  
  const handleChange = (e) => props.handleChange(parseInt(e.target.value))

  return (
    <div style={{display:'inline-block'}}>
      <p>Select the Year</p>
      <select onChange={handleChange}>
        {props.data.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}

function AreaSelector(props) {
  if(!props.data){
    return (
      <p>Waiting for data...</p>
    )
  }
  
  const handleChange = (e) => props.handleChange(parseInt(e.target.value))

  return (
    <div style={{display:'inline-block'}}>
      <p>Select an Area of Interest</p>
      <select onChange={handleChange}>
        {props.data.metrics.map((d, i) => (
          <option key={i} value={d.area_number}>{d.name}</option>
        ))}
      </select>
    </div>
  );
}

function AreaRentBurdenedMessage(props) {
  const { areaData } = props; 
  
  if(!areaData){
    return (
      <p>Waiting for data...</p>  
    )
  }
  
  if(!areaData.rent_burdened_2019){
    return (
      <span>There is no data for {areaData.name}</span>
    )
  } else {
    return (
      <span>Based on the data from 2019, {areaData.rentBurdenRateFormatted} of households in {areaData.name} are rent burdened</span>
    )
  }
}

export default function RentBurdenedRates(props) {
  const { loading, error, data } = useFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({metrics: ["rent_burdened_2019","rent_burdened_2018","rent_burdened_2017"]})
  }, []);
  const years = [
    2019,2018,2017
  ]
  const [selectedArea, setSelectedArea] = useState(1)
  const [selectedYear, setSelectedYear] = useState(2019)
  const { chartData, areaData } = transformData(data, error, selectedArea, selectedYear);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>Rent Burdened Households Rate by Area and Year</h2>
        <AreaSelector data={data} handleChange={setSelectedArea} />
        <YearSelector data={years} handleChange={setSelectedYear} />
        <p>What percentage of households in {areaData.name} are rent burdened?</p>
        <FailureNotification error={error} data={data} />
      </div>
      <div className="center">
        <ExamplePieChart data={chartData} />
        <br />
      </div>
      <div className="center medium-width">
        <p>
        <span>Based on data from {selectedYear}, {areaData.rentBurdenRateFormatted} of households in {areaData.name} are rent burdened.</span>
        </p>
      </div>
    </div>
  );
}