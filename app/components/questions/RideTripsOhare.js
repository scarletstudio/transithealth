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

const RIDETRIPS_DROPOFF = [
  {
    key: "dropoff_community_area",
    name: "Dropoff Location",
  },
  {
    key: "dropoff_2019",
    name: "Dropoffs in 2019",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "dropoff_2020",
    name: "Dropoffs in 2020",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  ]
  
  const RIDETRIPS_DROPOFF_2019 = [
  {
    key: "dropoff_community_area",
    name: "Dropoff Location",
  },
  {
    key: "total_trips",
    name: "Dropoffs in 2019",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  ]
  
  const RIDETRIPS_DROPOFF_2020 = [
  {
    key: "dropoff_community_area",
    name: "Dropoff Location",
  },
  {
    key: "total_trips",
    name: "Dropoffs in 2020",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  ]
  
  ////
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
  ]
  
  const RIDETRIPS_PICKUP = [
  {
    key: "pickup_community_area",
    name: "Dropoff Location",
  },
  {
    key: "pickup_2019",
    name: "Pickups in 2019",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  {
    key: "pickup_2020",
    name: "Pickups in 2020",
    format: Formatter.numberWithCommas,
    rowClasses: ["right"],
  },
  ]
  
  
  function transformData(res) {
  
  if (res) {
    const ohare_dropoff_2019 = res.ohare_dropoff_2019;
    const ohare_dropoff_2020 = res.ohare_dropoff_2020;
    console.log("This is res ",res)
    
    return [ 
      ohare_dropoff_2019,
      ohare_dropoff_2020
      ];
  }
  return [ [],[] ];
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
  const [ ohare_dropoff_2019, ohare_dropoff_2020 ] = transformData(data);

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
    <TableDropoff rRow={ohare_dropoff_2019} cColumn={RIDETRIPS_DROPOFF_2019} error={error} year={2019}/>
    <TableDropoff rRow={ohare_dropoff_2020} cColumn={RIDETRIPS_DROPOFF_2020} error={error} year={2020}/>
    </div>
    );
};