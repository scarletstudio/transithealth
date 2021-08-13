import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Table } from '../../components/Table'
import { Notification } from '../../components/Notification'
import { FailureNotification } from '../../components/Notification'
import {
  Formatter,
  calculatePercentChange,
} from '../../site/metrics'

const RIDESHARE_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/ohare/rideshare`;
  
const MAX_PCT_CHANGE = -0.76;
const RIDESHARE_DROPOFF_ALL = [
  {
    key: "dropoff_community_area",
    name: "Area Number",
  },
  {
    key: "area_name",
    name: "Community Area",
  },
  {
    key:"part",
    name:"Part"
  },
  {
    key: "total_trips",
    name: "Dropoffs in 2019",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "total_trips_since",
    name: "Dropoffs in 2020",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "pct_change",
    name: "Change",
    format: Formatter.percentChangeWithNoDecimal,
    rowClasses: ["right"],
    rgb: "209, 31, 0",
    alpha: (v) => (v / MAX_PCT_CHANGE),
  },
];

function addTotalTripsYear(before,since) {

  var ds = {};
  for(var key in before) {
    ds[before[key]["dropoff_community_area"]] = before[key];
  }
  for(var key in since) {
    var sinceAreaNum = since[key]["dropoff_community_area"];
    if (ds[sinceAreaNum]["area_name"] == since[key]["area_name"] && ds[sinceAreaNum]["dropoff_community_area"] == since[key]["dropoff_community_area"]){
      //The area number of the other data is used as the key and see if they have the same area name. J
      //Just to be sure, I also had it check the area number if they're the same for both
      ds[sinceAreaNum]["total_trips_since"] = since[key]["total_trips"];
      ds[sinceAreaNum]["pct_change"] = calculatePercentChange(ds[sinceAreaNum]["total_trips"],ds[sinceAreaNum]["total_trips_since"]);
    } 
    else {
      console.log("Something wrong. Mismatching area names and area numbers from both datas");
    }
  }
  
  const fin = Object.values(ds); //turns key:value of the original object into elements of an array
  console.log("fin is ",fin)
  return fin; //returns the rows with the 2019 and 2020 trips together
}

function transformData(res) {
  
  if (res) {
    const ohare_dropoff_2019 = res.ohare_dropoff_2019;
    const ohare_dropoff_2020 = res.ohare_dropoff_2020;
    const ohare_dropoff = addTotalTripsYear(ohare_dropoff_2019,ohare_dropoff_2020);

    return [ 
      ohare_dropoff
      ];
  }
  return [ [] ];
}

function TableDropoff(props){
  
  const errorMsg = props.error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;
  
  return (
    <div className="DropoffTrips">
      <div className="center medium-width">
        <h2>Why this question?</h2>
        <p>The pandemic has severely affected the amount of flights. 
        While the data shows the dropoff trips from the O'Hare Area, 
        we can also assume that a large majority of these dropoffs 
        came from the O'Hare airport if not all.</p>
        <h2>Dropoff Trips From The O'Hare Area to Places in Chicago</h2>
        <p>This table shows the dropoff trips from the O'Hare Area to different locations in Chicago for 2019 and 2020.</p>
        <Table rows={props.rRow} cols={props.cColumn} />
        {errorMsg}
      </div>
    </div>
  );
}
  
export default function RideshareTripsOHare(props) {
  const { loading, error, data } = useFetch(RIDESHARE_ENDPOINT, {}, []);
  const [ ohare_dropoff] = transformData(data);

  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
    <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;
  
  return(
    <div className="center medium-width">
    <TableDropoff rRow={ohare_dropoff} cColumn={RIDESHARE_DROPOFF_ALL}/>
    {errorMsg}
    </div>
  );
}