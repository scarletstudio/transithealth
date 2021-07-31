import { useEffect, useState } from 'react'

function SortDictionary(dictionary){
    var sortedTagsArr = Object.entries(dictionary).sort((a,b) => b[1].length - a[1].length)
    var retArr = [];
    for(let i = 0; i < sortedTagsArr.length; i++){
      var tempArr = sortedTagsArr[i]
      var tempDict = {};
      tempDict[tempArr[0]] = tempArr[1]
      retArr.push(tempDict)
    }
    return retArr
  }
  
function CreateTagDictionary(supportedMetrics){
  const groups = [...new Set(Object.keys(supportedMetrics).map(q => supportedMetrics[q].dataset))];
  const metricRecords = Object.keys(supportedMetrics)
  var tagDictionary = {};
  
  for (var i in groups){
    var groupedRecords = [];
    for(var j in Object.keys(supportedMetrics)){
      var record = Object.keys(supportedMetrics)[j]
      if(groups[i].indexOf(supportedMetrics[record].dataset) > -1 ){
        groupedRecords.push(metricRecords[j])
      }
    }
    tagDictionary[groups[i]] = groupedRecords;
  }
  
  return tagDictionary
}

function CreateDictArray(tagDictionary){
  var tagDictArray = [];
  var chunk_size = 1;
  for ( var cols = Object.entries( tagDictionary ); cols.length; ){
    tagDictArray.push( cols.splice(0, chunk_size).reduce( (o,[k,v])=>(o[k]=v,o), {}));
  }
  return tagDictArray;
}

function Modal(props){
  const { supportedMetrics, onClose, selectMetric, show } = props;
  const [searchText, setSearchText] = useState("")
  if(!show){
    return null;
  }
  var tagDictionary = CreateTagDictionary(supportedMetrics);
  var tagDictArray = CreateDictArray(tagDictionary);
  tagDictArray = SortDictionary(tagDictionary)
  
  const searchTextLower = searchText.toLowerCase().trim()
      
  const searchResultsMessage = searchTextLower.length === 0
    ? "Showing all Metrics"
    : `Showing results for ${searchText}`
    
  
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
            <GroupedMetricSearchResults 
              searchText={searchText} 
              supportedMetrics={supportedMetrics} 
              onClose={onClose}
              selectMetric={selectMetric}
              tagDictArray={tagDictArray}
              tagDictionary={tagDictionary}
            />
          </div>
          <div className="modalFooter" >
            <button className="closeButton" onClick={onClose} >Close</button>
          </div>
        </div>
      </div>
    )
}

function SimpleMetricSearchResults(props){
  const { searchText, supportedMetrics, onClose, selectMetric, } = props
  const searchTextLower = searchText.toLowerCase().trim()
  const searchResults = searchTextLower.length === 0 
    ? Object.keys(supportedMetrics)
    : Object.keys(supportedMetrics)
      .filter((k) => {
        const metric = supportedMetrics[k]
        const metricNameLower = metric.name.toLowerCase()
        return metricNameLower.indexOf(searchTextLower) > -1
      })
      
  return ( 
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
  )
  
}

function GroupedMetricSearchResults(props){
  const { searchText, supportedMetrics, onClose, selectMetric, tagDictionary, tagDictArray } = props
  const searchTextLower = searchText.toLowerCase().trim()
  const searchResults = searchTextLower.length === 0 
    ? Object.keys(supportedMetrics)
    : Object.keys(supportedMetrics)
      .filter((k) => {
        const metric = supportedMetrics[k]
        const metricNameLower = metric.name.toLowerCase()
        return metricNameLower.indexOf(searchTextLower) > -1
      })

  var elements = [];
  for (var metric in tagDictionary){
    var metricArr = tagDictionary[metric]
    var count = 0;
    for (var j = 0; j < searchResults.length; j++){
      if (supportedMetrics[searchResults[j]].dataset.indexOf(metric) > -1 && count < 1){
        elements.push(
        <p
          className="metricGroup"
          key={metric}
        > 
          {metric}
        </p>
        
        )
        for (var i = 0; i < metricArr.length; i++){
        if(searchResults.indexOf(metricArr[i]) > -1){
          elements.push(
              <p
                className="metricChoice"
                key={metricArr[i]} 
                onClick={ () => {
                  selectMetric(metricArr[i])
                  onClose()  
                  }}
              >
                {supportedMetrics[metricArr[i]].name}
                <ul className="metricMetaData">
                  <li>Dataset: {supportedMetrics[metricArr[i]].dataset}</li>
                  <li>Description: {supportedMetrics[metricArr[i]].description}</li>
                </ul>
               </p>
            )
        }
      }
      count++
      }
    }
  }
  
  return (
  <div className="searchResults">
  {elements}
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