/* global fetch */

import { useState, useEffect } from 'react'

import { FailureNotification } from '../../components/Notification'
import { Table } from '../../components/Table'


const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const formatIssuedDate = (ymd) => (
  dateFormat.format(new Date(`${ymd} `))
);

const formatExpiresDate = (ymdTz) => (
  dateFormat.format(new Date(ymdTz))
);

const ENDPOINT = `${process.env.NEXT_PUBLIC_API}/question/sidewalk_search`;

const COLS = [
  {
    key: "doing_business_as_name",
    name: "Business Name",
  },
  {
    key: "zip_code",
    name: "Zip Code",
  },
  {
    key: "issued_date_dt",
    name: "Issued On",
    format: formatIssuedDate,
  },
  {
    key: "expiration_date",
    name: "Expires On",
    format: formatExpiresDate,
  },
];

export default function SidewalkCafePermitSearch(props) {
  const [ inputText, setInputText ] = useState("");
  const [ searchText, setSearchText ] = useState("");
  const [ results, setResults ] = useState(null);
  const [ failure, setFailure ] = useState(null);
  const [ isSearching, setIsSearching ] = useState(false);
  
  const permits = results?.["results"] || [];
  const resultsMessage = !isSearching
    ? searchText
      ? permits.length > 0
        ? `${permits.length} results for ${searchText}`
        : `No results for ${searchText}`
      : null
    : "Searching...";
  
  useEffect(() => {
    props.setContentIsLoading(false);
  }, []);
  
  function doSearch() {
    let isSubscribed = true;
    
    async function getResults() {
      const req = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          search: inputText
        })
      });
      const res = await req.json();
      return res;
    }
    
    setIsSearching(true);
    setSearchText(inputText);
    getResults().then((data) => {
      if (isSubscribed) {
        setIsSearching(false);
        setFailure(null);
        setResults(data);
      }
    }).catch((err) => {
      if (isSubscribed) {
        setIsSearching(false);
        setFailure(err);
        setResults(null);
      }
    });
    
    return () => { isSubscribed = false };
  }
  
  return (
    <div className="SidewalkCafePermitSearch">
      <div className="center medium-width">
        <p>Search for permits by restaurant name.</p>
        <input
          className="SearchInput"
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              doSearch();
            }
          }}
        />
        <p>{resultsMessage}</p>
        <FailureNotification error={failure} data={results} />
      </div>
      <Table rows={permits} cols={COLS} />
    </div>
  );
}