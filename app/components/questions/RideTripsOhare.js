import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Table } from '../../components/Table'
import { Notification } from '../../components/Notification'
import { FailureNotification } from '../../components/Notification'
import {
  Formatter,
  calculatePercentChange,
} from '../../site/metrics'

const RIDETRIPS_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/ridetrips`;
  
  const MAX_PCT_CHANGE = -0.76;
  const RIDETRIPS_DROPOFF_ALL = [
  {
    key: "dropoff_community_area",
    name: "Dropoff Location",
  },
  {
    key: "total_trips_2019",
    name: "Dropoffs in 2019",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "total_trips_2020",
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

  //creating key:value pairs
  var dropoffs = before.map(({
    total_trips: total_trips_2019,
    dropoff_community_area: dropoff_community_area,
  }) => ({
    total_trips_2019,
    dropoff_community_area,
  }));
  
  const dropoffs_2020 = since.map(({
    total_trips: total_trips_2020,

  }) => ({
    total_trips_2020,

  }));
  
  //adding 2020 trips within the same object as the 2019 trips
  for (var i = 0; i < dropoffs.length ; i++){
    dropoffs[i]["total_trips_2020"] = dropoffs_2020[i]["total_trips_2020"];
    dropoffs[i]["pct_change"] = calculatePercentChange(dropoffs[i]["total_trips_2019"],dropoffs_2020[i]["total_trips_2020"]);
  }

  return dropoffs;
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
        <h2>Most Common Dropoff Locations</h2>
        <p>This table shows the common dropoff trips for each locations from O'hare for the year {props.year}.</p>
        <Table rows={props.rRow} cols={props.cColumn} />
        {errorMsg}
      </div>
    </div>
    );
}
  
  export default function RideTrips(props) {
  const { loading, error, data } = useFetch(RIDETRIPS_ENDPOINT, {}, []);
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
    <TableDropoff rRow={ohare_dropoff} cColumn={RIDETRIPS_DROPOFF_ALL}/>
    {errorMsg}
    </div>
    );
}