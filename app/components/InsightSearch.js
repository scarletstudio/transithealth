import { useState, useEffect } from 'react'
import Link from 'next/link'
import { insights } from '../site/insights'

const INSIGHT_TYPE = {
  scatter : {
    name : "Scatter Plot"
  }
}


export default function InsightSearch(){
  const [searchText, setSearchText] = useState('');
  const searchTextLower = searchText.toLowerCase();
  const results = insights.filter((d) => {
    const nameLower = d.name.toLowerCase();
    return nameLower.indexOf(searchTextLower) > -1;
  });
  const resultsMessage = searchText
    ? results.length > 0
      ? `Showing ${results.length} Results for ${searchText}`
      : `No Results for ${searchText}`
    : "Showing All Results";
  return (
    <div className="insightsSearch left medium-width">
      <div className="searchBar center">
        <input
          type="text"
          placeholder="What do you want to know about?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <p className="results">{resultsMessage}</p>
      </div>
      <div className ="searchResultContainer">
        {results.map((d) => {
          const url = `/scatter?x=${d.x}&y=${d.y}`
          const config = INSIGHT_TYPE[d.type]
          return (
            <div className="searchResult">
              <div className="insights-name">
                <h3>{d.name}</h3>
              </div>
              <div>
                <Link href={url}>
                  <a className="btn secondary">View Insight</a>
                </Link>
              </div>
              <p>{config.name}</p>
              <hr/>
            </div>
          )
        })}
      </div>
    </div>
  )
}