export default function SearchableMetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  
  
  return (
    <div className="SearchableMetricSelector">
    
      <div className="SelectorBody"> 
        <button id="pickBtn" >Select Metric Here</button>
      </div>
      
      <div className="SelectorModal"> 
      
        { label ? (<span className="bold">{label}: </span>) : null }
        <span>
          {Object.keys(supportedMetrics).map((k, i) => (
            <p key={i} value={k}>{supportedMetrics[k].name}</p>
          ))}
        </span>
        
      </div>
    </div>
  )
};