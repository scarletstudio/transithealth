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
import { Color } from '../../site/theme'
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
const ADA_COLOR = {
  "Yes": "#332288",
  "No": "#1978AD",
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
const CTA_ADA_CHANGE_COLS = [
  {
    key:"ada",
    name: "ADA",
  },
  {
    key:"num_stations",
    name: "Num Stations",
  },
  {
    key:"avg_trips_before",
    name: "AVG Trips Before",
    format: Formatter.numberWithCommas
  },
  {
    key:"avg_trips_since",
    name: "AVG Trips After",
    format: Formatter.numberWithCommas
  },
  {
    key:"pct_change_avg_trips",
    name: "%Change",
    format: Formatter.percentChangeWithOneDecimal
  },
];

function booleanResult(x){
  return (x == 1) ? "Yes" : "No";
}


function augmentMetrics(metrics) {
  return metrics.map((d) => {
    const ada_key = booleanResult(d["ada"]);
    const pct_change = calculatePercentChange(
        d["avg_trips_before"],
        d["avg_trips_since"]);
    return {
      ...d,
      "pct_change_avg_trips": pct_change,
      "ada" : ada_key,
      [ada_key] : pct_change,
    };
  });
}


function transformData(res) {
  if (res) {
    const cta_area_metrics = res.cta_area_metrics;
    const cta_station_ridership_metrics = augmentMetrics(res.cta_station_ridership_metrics);
    const cta_change_metrics = augmentMetrics(res.cta_change_metrics);
    return [ 
      cta_station_ridership_metrics, 
      cta_change_metrics,
      cta_area_metrics
      ];
  }
  return [ [], [], [] ];
}

function QuestionBarChart({ data }) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ left: 45, right: 45, bottom: 30, top: 30 }}
      >
        <CartesianGrid strokeDashArray="3 3" />
        <XAxis dataKey="ada" tick={{ dy: 5 }}>
          <Label
            value="Accessible"
            position="bottom"
            offset={5}
          />
        </XAxis>
        <YAxis type="number" tickFormatter={Formatter.numberInThousands()}>
          <Label
            value="Average Ridership"
            position="left"
            angle={-90}
            offset={27}
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip
          formatter={
            (value, name, props) => ([
              Formatter.numberInThousands(value),
              name,
              props,
            ])
          }
        />
        <Bar name="Avg Trips Before" dataKey= "avg_trips_before"  fill={Color.Forest} />
        <Bar name="Avg Trips Since" dataKey="avg_trips_since"  fill={Color.Magenta} />
        <Legend layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ top: 5 }} />
      </BarChart>
    </ResponsiveContainer>
  )
}


export default function CTARides(props) {
  const { loading, error, data } = useFetch(DISABILITIES_ENDPOINT, {}, []);
  const [ cta_station_ridership_metrics, cta_change_metrics, cta_area_metrics] = transformData(data);

  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);

  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;

  return (
    <div className="QuestionCTARidershipChange">
      <div className="center medium-width">
        <br/>
        <h2>Ridership Change Based on Station Accessibility</h2>
        <p>How much of a difference does it make if a station is ADA (Americans with Disabilities Act) approved or not? </p>
      </div>
      <QuestionBarChart data={cta_change_metrics} />
      <br/>
    
     <Table rows={cta_change_metrics} cols={CTA_ADA_CHANGE_COLS} />
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
      </div>
      <Table rows={cta_station_ridership_metrics} cols={CTA_STATION_RIDERSHIP_COLS} />
      {errorMsg}
    </div>
  );
};

