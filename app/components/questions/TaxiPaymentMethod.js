import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Table } from '../../components/Table'
import { Notification } from '../../components/Notification'
import {
  Formatter
} from '../../site/metrics'

const COMMON_PAYMENT_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/taxitrips`;

const COMMON_PPAYMENT_COLS = [
  {
    key: "pickup_community_area",
    name: "Pickup Location",
  },
  {
    key: "payment_type",
    name: "Payment Method",
    rowClasses: ["center"],
  },
  {
    key: "max_count",
    name: "# of Payments",
    rowClasses: ["center"],
    rgb: "255, 165, 0",
    alpha: (v) => (v/450),
  },
  {
    key: "percentage",
    name: "% from Total Taxi Rides",
    format: Formatter.percentWithOneDecimal,
    rowClasses: ["center"],
    rgb: "136, 34, 85",
    alpha: (v) => (v / .7),
  },
];

const COMMON_DPAYMENT_COLS = [
  {
    key: "dropoff_community_area",
    name: "Dropoff Location",
  },
  {
    key: "payment_type",
    name: "Payment Method",
    rowClasses: ["center"],
  },
  {
    key: "max_count",
    name: "# of Payments",
    rowClasses: ["center"],
    rgb: "255, 165, 0",
    alpha: (v) => (v/450),
  },
  {
    key: "percentage",
    name: "% from Total Taxi Rides",
    format: Formatter.percentWithOneDecimal,
    rowClasses: ["center"],
    rgb: "136, 34, 85",
    alpha: (v) => (v / .7),
  },
];

function transformData(res) {
  if (res) {
    const payment_per_pickup = res.payment_per_pickup;
    const payment_per_dropoff = res.payment_per_dropoff;
    return [ 
      payment_per_pickup,
      payment_per_dropoff
      ];
  }
  return [ [] , [] ];
}

export default function TaxiTrips(props) {
  const { loading, error, data } = useFetch(COMMON_PAYMENT_ENDPOINT, {}, []);
  const [ payment_per_pickup, payment_per_dropoff ] = transformData(data);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;
  return (
      <div className="QuestionPaymentMethod">
          <div className="center medium-width">
            <h2>Most Popular Payment Method Per Pickup Location</h2>
            <p>This table shows the most common payment method for taxi trips for every pickup location in Chicago 
            as well as the total amount of taxi rides paid for with that method. </p>
            <p>
              <span> This is for the 6-month period from January 2021 - July 2021.</span>
            </p>
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
          
          {errorMsg}
        </div>
    );
};