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

const TEXT_TRANSLATION = {
  "English": {
  "Title": "Traffic Intensity by Area", 
  "Sub_Title": "How congested traffic is around the city?",
  "YearSelector_Title": "Select the Year",
  "SelectLanguage_Title": "Select Language",
  
  },
  "Urdu": {
  "Title": "ر قبںہ کے حسا ب سے ٹر یفک مین شد ت", 
  "Sub_Title":" شھر کے ا ر گر د  ٹر یفک کتنی ز یا د ہ ھے؟",
  "YearSelector_Title": "سا ل کا ا نتخا ب کر ین",
  "SelectLanguage_Title": "ز با ن کا ا نتخا ب کر ین",
  
  }
  
  
  
};

const EMPTY_MOST_TRIPS = {
  name: "?",
  totalTripsFormatted: "?",
};
const AREA_COLORS = [
  Color.Forest,
  Color.Gold,
  Color.Magenta,
  Color.Cerulean,
  Color.HealthPink,
  Color.Indigo,
  Color.Red,
  Color.Sky,
  Color.Salmon,
  Color.Maroon,
  ]

function transformData(response, error, selectedYear) {
  if (!response || error) {
    return {
      chartData: [],
     
    }
  }
  
  var traffic_intensity_year = ((selectedYear === 2020) ? 'traffic_intensity_2020'
                  :(selectedYear === 2019) ? 'traffic_intensity_2019'
                  :(selectedYear === 2018) ? 'traffic_intensity_2018'
                  :(selectedYear === 2017) ? 'traffic_intensity_2017'
                  :(selectedYear === 2016) ? 'traffic_intensity_2016'
                  : 'Error');

  const dataWithName = response.metrics.map(d => ({
    // Get all fields from original record
    ...d,
   
    // Add formatted data
    traffic_intensity_formatted: parseFloat(Formatter.numberWithTwoDecimals(d[traffic_intensity_year])),
  })).sort((a,b) => {
    return a.traffic_intensity_formatted-b.traffic_intensity_formatted;
  }).filter( (d, i) => i < 10).map((d,i) => ({
    ...d,
    color: AREA_COLORS[i % AREA_COLORS.length],
  }));
  
  
  return {
    chartData: dataWithName,
   
  }
}

function YearSelector(props) {
  if(!props.data){
    return (
      <p>Waiting for data...</p>
    )
  }
  
  const handleChange = (e) => props.handleChange(parseInt(e.target.value))

  const Language = props.Language
  return (
    <div style={{display:'inline-block'}}>
      <p>{TEXT_TRANSLATION[Language]["YearSelector_Title"]}</p>
      <select onChange={handleChange}>
        {props.data.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}

function LanguageSelector(props) {
  if(!props.data){
    return (
      <p>Waiting for data...</p>
    )
  }
  
  const handleChange = (e) => props.handleChange(e.target.value)
  const Language = props.Language
  return (
    <div style={{display:'inline-block'}}>
      <p>{TEXT_TRANSLATION[Language]["SelectLanguage_Title"]}</p> 
      <select onChange={handleChange}>
        {props.data.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}
function ExamplePieChart(props) {
  const { data } = props
  console.log("examplepiechart",data)
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
          dataKey="traffic_intensity_formatted"
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

export default function TrafficIntensityAcrossCity(props) {
 
 const { loading, error, data } = useFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({metrics: ["traffic_intensity_2020","traffic_intensity_2019","traffic_intensity_2018","traffic_intensity_2017","traffic_intensity_2016",]})
  }, []);
  
   const years = [
    2020,2019,2018,2017,2016
  ]
 const language = ["English", "Urdu"]
 const [selectedYear, setSelectedYear] = useState(2016)
 const [selectedLanguage, setSelectedLanguage] = useState("English")
  //console.log(data);
  const { chartData, mostTrips } = transformData(data, error,selectedYear);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="center medium-width">
        <h2>{TEXT_TRANSLATION[selectedLanguage]["Title"]}</h2>
         <YearSelector data={years} Language={selectedLanguage} handleChange={setSelectedYear} />
          <LanguageSelector data={language} Language={selectedLanguage} handleChange={setSelectedLanguage} />
        <p>{TEXT_TRANSLATION[selectedLanguage]["Sub_Title"]} </p>
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