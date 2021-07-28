export default function SearchableMetricSelector(props) {
  const { label, supportedMetrics, defaultValue, onChange } = props;
  
  const modalStyle = {
    position: "fixed",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  
  return (
    <div className="SearchableMetricSelector">
    
      <div className="SelectorBody"> 
        <button id="pickBtn" >Select Metric Here</button>
      </div>
      
      <div className="SelectorModal" style={modalStyle}> 
        <div className="modal-content">
          <h4 className="modal-title">Select your Metrics</h4>
        </div>
        <div className="modal-body">
          { label ? (<span className="bold">{label}: </span>) : null }
          <span>
            {Object.keys(supportedMetrics).map((k, i) => (
              <p key={i} value={k}>{supportedMetrics[k].name}</p>
            ))}
          </span>
        </div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  )
};