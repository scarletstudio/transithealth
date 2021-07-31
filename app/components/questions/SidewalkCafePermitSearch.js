import { useState, useEffect } from 'react'
import useFetch from 'use-http'

import { FailureNotification } from '../../components/Notification'

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/sidewalk_search`;

export default function SidewalkCafePermitSearch(props) {
  const [ searchText, setSearchText ] = useState("");
  const { loading, error, data } = useFetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ search: searchText }),
  }, [ searchText ]);
  
  useEffect(() => {
    props.setContentIsLoading(loading);
  }, [loading]);
  
  return (
    <div>
      <div className="">
        <p>Search for permits by restaurant name.</p>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <p>Showing results for: {searchText}.</p>
        <FailureNotification error={error} data={data} />
      </div>
    </div>
  );
}