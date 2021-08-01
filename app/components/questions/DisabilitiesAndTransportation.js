import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
  Bar,
  Cell,
} from 'recharts'
import { Table } from '../../components/Table'
import { Notification } from '../../components/Notification'
import {
  Formatter,
  calculatePercentChange,
} from '../../site/metrics'

const DISABILITIES_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/disabilities`;
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
const MIN_PCT_CHANGE_RIDES = -1.0;
const CTA_STATION_RIDERSHIP_COLS = [
  {
    key: "station_id",
    group: "Station",
    name: "ID",
  },
  {
    key: "station_name",
    group: "Station",
    name: "Name",
  },
  {
    key: "ada",
    group: "Station",
    name: "ADA",
  },
  {
    key: "avg_trips_before",
    group: "Rides/Day",
    name: "Before",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "avg_trips_since",
    group: "Rides/Day",
    name: "Since",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "pct_change_avg_trips",
    group: "Rides/Day",
    name: "Change",
    format: Formatter.percentChangeWithNoDecimal,
    rowClasses: ["right"],
    rgb: "136, 34, 85",
    alpha: (v) => (v / MIN_PCT_CHANGE_RIDES),
  }
];

function booleanResult(x){
  return (x == 1) ? "Yes" : "No";
}


function augmentMetrics(metrics) {
  return metrics.map((d) => {
    return {
      ...d,
      "pct_change_avg_trips": calculatePercentChange(
        d["avg_trips_before"],
        d["avg_trips_since"],
      ),
      "ada" : booleanResult(d["ada"]),
    };
  });
}


function transformData(res) {
  if (res) {
    const cta_area_metrics = res.cta_area_metrics;
    const cta_change_metrics = res.cta_change_metrics;
    const cta_station_ridership_metrics = augmentMetrics(res.cta_station_ridership_metrics);
    return [ cta_station_ridership_metrics, 
    cta_area_metrics, cta_change_metrics];
  }
  return [ [], [], [] ];
}

// function QuestionBarChart({ data }) {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart
//         data={data}
//         margin={{ left: 30, right: 30, bottom: 30, top: 30 }}
//       >
//         <CartesianGrid strokeDashArray="3 3" />
//         <XAxis dataKey="name" tick={{ dy: 5 }}>
//           <Label
//             value="Station Community Area"
//             position="bottom"
//             offset={10}
//           />
//         </XAxis>
//         <YAxis type="number" tickFormatter={Formatter.percentWithNoDecimal}>
//           <Label
//             value="Pooled Trip Rate"
//             position="left"
//             angle={-90}
//             offset={15}
//             style={{ textAnchor: "middle" }}
//           />
//         </YAxis>
//         <Tooltip
//           formatter={
//             (value, name, props) => ([
//               Formatter.percentWithOneDecimal(value),
//               "Pooled Trip Rate",
//               props,
//             ])
//           }
//         />
//         {Object.keys(CITY_PART_COLOR).map((partName, j) => (
//           <Bar key={j} dataKey={partName} stackId="a" fill={CITY_PART_COLOR[partName]} />
//         ))}
//         <Legend layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ top: 5 }} />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }

export default function CTARides(props) {
  const { loading, error, data } = useFetch(DISABILITIES_ENDPOINT, {}, []);
  const [ cta_station_ridership_metrics, rideshare_metrics, cta_area_metrics, cta_change_metrics] = transformData(data);

  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);

  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;

  // const sortedByPooledRate = metrics.sort((a, b) => {
  //   return b[METRIC_POOLED_TRIP_RATE] - a[METRIC_POOLED_TRIP_RATE];
  // });
  // const highestByPooledRate = sortedByPooledRate[0];
  // const lowestByPooledRate = sortedByPooledRate[sortedByPooledRate.length - 1];
  // const detailForPooledRate = sortedByPooledRate.length > 1 ? (
  //     <p className="center">
  //       <span className="bold">
  //         {highestByPooledRate.name}
  //       </span>
  //       <span> has the highest rate of residents with an included disability (</span>
  //       <span className="bold">
  //         {Formatter.percentWithOneDecimal(highestByPooledRate[METRIC_POOLED_TRIP_RATE])}
  //       </span>
  //       <span>) while </span>
  //       <span className="bold">
  //         {lowestByPooledRate.name}
  //       </span>
  //       <span> has the lowest (</span>
  //       <span className="bold">
  //         {Formatter.percentWithOneDecimal(lowestByPooledRate[METRIC_POOLED_TRIP_RATE])}
  //       </span>
  //       <span>).</span>
  //     </p>
  //   ) : null;

  return (
    <div className="QuestionCTARidershipChange">
      <div className="center medium-width">
        <h2>CTA Rides by Station Community Area</h2>
        <p>*****EDIT****</p>
      </div>
      
 
      <br />
      <div className="center medium-width">
        <h2>Daily Ridership Change Per CTA Station Since COVID</h2>
        <p>This table shows the average daily ridership in the year before and the year since COVID per CTA station.</p>
        <p>
          <span className="bold">Before</span>
          <span> is the 12-month period from February 2019-2020.</span>
        </p>
        <p>
          <span className="bold">After</span>
          <span> is the 12-month period from March 2020-2021.</span>
        </p>
        <p>
          <span className="bold">ADA</span>
          <span> refers to the American's with Disabilities Act.  ADA stations are accessible.</span>
        </p>
      </div>
      <Table rows={cta_station_ridership_metrics} cols={CTA_STATION_RIDERSHIP_COLS} />
    
      {errorMsg}
    </div>
  );
};
