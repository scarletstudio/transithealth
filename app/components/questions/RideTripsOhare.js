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
  
  export default function RideTrips(props) {
  const { loading, error, data } = useFetch(RIDETRIPS_ENDPOINT, {}, []);
  console.log(data)
  //const [ payment_per_pickup, payment_per_dropoff ] = transformData(data);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  /*
  return (
      <div className="QuestionPaymentMethod">
          <div className="center medium-width">
            <h2>Most Popular Payment Method Per Pickup Location</h2>
            <p>This table shows the most common payment method for taxi trips for every pickup location in Chicago 
            as well as the total amount of taxi rides paid for with that method. </p>
            <p>
              <span> This is for the 6-month period from January 2021 - July 2021.</span>
            </p>
            <FailureNotification error={error} data={data} />
          </div>
          <Table rows={payment_per_pickup} cols={COMMON_PPAYMENT_COLS} />
          
          <div className="center medium-width">
            <h2>Most Popular Payment Method Per Dropoff Location</h2>
            <p>This table shows the most common payment method for taxi trips for every Dropoff location in Chicago 
            as well as the total amount of taxi rides paid for with that method. </p>
            <p>
              <span> This is for the 6-month period from January 2021 - July 2021.</span>
            </p>
          </div>
          <Table rows={payment_per_dropoff} cols={COMMON_DPAYMENT_COLS} />
        </div>
    );
  */
  return (
    <div>
      <p>Hello</p>
    </div>
    );
};