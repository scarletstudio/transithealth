import { useEffect, useState } from 'react'

function Modal(props){
  const { supportedMetrics, onClose, selectMetric, show } = props;
  const [searchText, setSearchText] = useState("")
  if(!show){
    return null;
  }
  const searchTextLower = searchText.toLowerCase().trim()
      
  const searchResults = searchTextLower.length === 0 
    ? Object.keys(supportedMetrics)
    : Object.keys(supportedMetrics)
      .filter((k) => {
        const metric = supportedMetrics[k]
        const metricNameLower = metric.name.toLowerCase()
        return metricNameLower.indexOf(searchTextLower) > -1
      })
  const searchResultsMessage = searchTextLower.length === 0
    ? "Showing all Metrics"
    : `Showing results for ${searchText}`
    
  const groups = [...new Set(Object.keys(supportedMetrics).map(q => supportedMetrics[q].dataset))];
  
  return (
    <div className="selectorModal" onClick={onClose} >
        <div className="modalContent" onClick={e => e.stopPropagation() } >
          <div className="modalHeader" >
            <h4 className="modalTitle">Select your Metric</h4>
          </div>
          <div className="modalBody" >
            <div className="searchBar"> 
              <p> <input 
                type="text" 
                value={searchText} 
                placeholder="Search Metrics..."
                onChange={(e) => setSearchText(e.target.value)}
              /> </p>
              
              <p>{searchResultsMessage}</p>
            
            </div>
            <div className="searchResults">
              {searchResults.map((k, i) => (
                <p
                className="metricChoice"
                key={i} 
                onClick={ () => {
                  selectMetric(k)
                  onClose()  
                }}
                >
                {supportedMetrics[k].name}
                  <ul className="metricMetaData">
                    <li>Dataset: {supportedMetrics[k].dataset}</li>
                    <li>Description: {supportedMetrics[k].description}</li>
                  </ul>
                </p>
              ))}
            </div>
          </div>
          <div className="modalFooter" >
            <button className="closeButton" onClick={onClose} >Close</button>
          </div>
        </div>
      </div>
    )
}

export default function SearchableMetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  const [show, setShow] = useState(0)
  const [selectedMetric, setSelectedMetric] = useState(defaultValue)
  
  return (
    <div className="searchableMetricSelector">
    
      <div className="selectorBody"> 
        { label ? (<span className="bold selectorLabel">{label}: </span>) : null }
        <button className="selectorButton" onClick={() => setShow(1)}>{supportedMetrics[selectedMetric].name}</button>
      </div>
      
      <Modal 
        supportedMetrics={supportedMetrics} 
        onClose={() => setShow(0)}
        selectMetric={(metricID) => {
          onChange(metricID)
          setSelectedMetric(metricID)
          }
        } 
        show={show} />
      
    </div>
  )
};