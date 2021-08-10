import { useEffect, useState } from 'react'

function sortDictionary(dictionary){
    // Object.entries is used to give each element as an array of [key, value]. This array is then sorted based on the length of the value, which is an array itself.
    // These arrays contain all metrics who share the same key
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
  
//Create a dictionary of all unique tags/datasets that exist, each key holding an array of metrics belonging to that tag/dataset
function createTagDictionary(supportedMetrics, searchResults){
  const groups = [...new Set(Object.keys(supportedMetrics).map(q => supportedMetrics[q].dataset))];
  const metricRecords = searchResults
  var tagDictionary = {};
  
  for (var i in groups){
    var groupedRecords = [];
    for(var j in searchResults){
      var record = searchResults[j]
      if(groups[i] === supportedMetrics[record].dataset){
        groupedRecords.push(metricRecords[j])
      }
    }
    tagDictionary[groups[i]] = groupedRecords;
  }
  
  return tagDictionary
}

//Creates an array of dictionaries, each belonging to a dataset/tag that holds an array of all metrics belonging to that tag/dataset
function createDictArray(tagDictionary){
  const tagDictArray = [];
  var dictArr = Object.entries(tagDictionary)
  
  for (let i = 0; i < dictArr.length; i++){
    var tempArr = dictArr[i]
    var key = tempArr[0]
    var val = tempArr[1]
    var tempDict = { key : val }
    tagDictArray.push(tempDict)
  }
  return tagDictArray;
}

function filterSearchResults(supportedMetrics, searchText){
  const searchTextLower = searchText.toLowerCase().trim()
  const searchResults = searchTextLower.length === 0 
    ? Object.keys(supportedMetrics)
    : Object.keys(supportedMetrics)
      .filter((k) => {
        const metric = supportedMetrics[k]
        const metricNameLower = metric.name.toLowerCase()
        return metricNameLower.indexOf(searchTextLower) > -1
      })
      
  return searchResults
}

function Modal(props){
  const { supportedMetrics, onClose, selectMetric, show } = props;
  const [searchText, setSearchText] = useState("")
  const [focus, setFocus] = useState(0)
  
  if(!show){
    return null;
  }
  
  const searchTextLower = searchText.toLowerCase().trim()
      
  const searchResultsMessage = searchTextLower.length === 0
    ? "Showing all Metrics"
    : `Showing results for ${searchText}`
    
  
  return (
    <div className="selectorModal" onClick={focus ? undefined : onClose} >
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
                onFocus={() => setFocus(1)}
                onBlur={() => setFocus(0)}
              /> </p>
              
              <p>{searchResultsMessage}</p>
            
            </div>
            <GroupedMetricSearchResults
              searchText={searchText} 
              supportedMetrics={supportedMetrics} 
              onClose={onClose}
              selectMetric={selectMetric}
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
  const { searchText, supportedMetrics, onClose, selectMetric } = props
  const searchTextLower = searchText.toLowerCase().trim()
  const searchResults = filterSearchResults(supportedMetrics, searchText)
  
  return ( 
      searchResults.map((k, i) => (
        <div className="metricResult"
          key={i} 
          onClick={ () => {
            selectMetric(k)
            onClose()  
          }}
        >
          <p className="metric">
          {supportedMetrics[k].name}
          </p>
          <div className="metricMetaData">
            <p>Dataset: {supportedMetrics[k].dataset}</p>
            <p>Description: {supportedMetrics[k].description}</p>
          </div>
        </div>
              ))
  )
  
}

function GroupedMetricSearchResults(props){
  const { searchText, supportedMetrics, onClose, selectMetric } = props
  const searchTextLower = searchText.toLowerCase().trim()
  const searchResults = filterSearchResults(supportedMetrics, searchText)
  
  var tagDictionary = createTagDictionary(supportedMetrics, searchResults);
  var tagDictArray = createDictArray(tagDictionary);
  tagDictArray = sortDictionary(tagDictionary)

  var elements = [];
  for (var i = 0; i < tagDictArray.length; i++){
    for (var key in tagDictArray[i]){
      const metricArr = tagDictionary[key]
      var count = 0;
      for (var j = 0; j < searchResults.length; j++){ 
        
        // An if conditional checks if the key, which is a dataset, is a member of the datasets for any metric in the search results. 
        // A count is kept so each group is only printed once
        if (supportedMetrics[searchResults[j]].dataset.indexOf(key) > -1 && count < 1){
          elements.push(
          <p
            className="metricGroup"
            key={key}
          > 
            {key}
          </p>
          
          )
          for (let k = 0; k < metricArr.length; k++){
          if(searchResults.indexOf(metricArr[k]) > -1){
            elements.push(
              <div 
                className="metricResult"
                key={metricArr[k]} 
                onClick={ () => {
                  selectMetric(metricArr[k])
                  onClose()  
                }}
              >
                <p className="metric">
                  {supportedMetrics[metricArr[k]].name}
                </p>
                <div className="metricMetaData">
                  <p>Description: {supportedMetrics[metricArr[k]].description}</p>
                </div>
                </div>
              )
          }
        }
        count++
        }
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
  useEffect(() => {
    setSelectedMetric(defaultValue);
  }, [defaultValue])
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