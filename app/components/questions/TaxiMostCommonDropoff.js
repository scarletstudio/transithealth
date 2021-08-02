import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Table } from '../../components/Table'
import { Notification } from '../../components/Notification'
import {
  Formatter
} from '../../site/metrics'

const COMMON_DROPOFF_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/taxitrips`;

const COMMON_DROPOFF_COLS = [
  {
    key: "pickup_community_area",
    name: "Pickup Location",
  },
  {
    key: "dropoff_community_area",
    name: "Most Common Dropoff Location",
    rowClasses: ["center"],
  },
  {
    key: "max_count",
    name: "# of Dropoffs",
    rowClasses: ["center"],
  },
  {
    key: "percentage",
    name: "% from Total Dropoffs",
    format: Formatter.percentWithOneDecimal,
    rowClasses: ["center"],
  },
];

function transformData(res) {
  if (res) {
    const most_common_dropoff = res.most_common_dropoff;
    return [ 
      most_common_dropoff
      ];
  }
  return [ [] ];
}

export default function TaxiTrips(props) {
  const { loading, error, data } = useFetch(COMMON_DROPOFF_ENDPOINT, {}, []);
  const [ most_common_dropoff ] = transformData(data);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  const errorMsg = error ? (
    <Notification classes={["Bottom", "Wide", "Failure"]} visible={true}>
      <p>Failed to get data from server. Please reload.</p>
    </Notification>
  ) : null;

  return (
    <div className="QuestionMostCommonDropoff">
      <div className="center medium-width">
        <h2>Most Common Dropoff Locations</h2>
        <p>This table shows the most common dropoff locations done by taxis for each pickup community area.</p>
        <p>
          <span> This is for the 6-month period from January 2021 - July 2021.</span>
        </p>
      </div>
      <Table rows={most_common_dropoff} cols={COMMON_DROPOFF_COLS} />
      {errorMsg}
    </div>
);
  
};
  