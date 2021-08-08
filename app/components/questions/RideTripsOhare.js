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
    console.log("res ohare_dropoff_2020 is ",res.ohare_dropoff_2020)
    const ohare_dropoff_2020 = res.ohare_dropoff_2020;
    return [ 
      ohare_dropoff_2020
      ];
  }
  return [ [] ];
}
  
  export default function RideTrips(props) {
  const { loading, error, data } = useFetch(RIDETRIPS_ENDPOINT, {}, []);
  const [ ohare_dropoff_2020 ] = transformData(data);
  //const [ payment_per_pickup, payment_per_dropoff ] = transformData(data);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;
  
  return (
    <div className="DropoffTrips">
      <div className="center medium-width">
        <h2>Most Common Dropoff Locations</h2>
        <p>This table shows the most common dropoff locations from O'hare for each dropoff community area.</p>
        <p>
          <span> This is for the 12-month period from January 2020 - December 2020.</span>
        </p>
      </div>
      <Table rows={ohare_dropoff_2020} cols={RIDETRIPS_DROPOFF_2020} />
      {errorMsg}
    </div>
);
};